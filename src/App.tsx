import { useState} from "react";
import { get } from "./util/http.ts";
import { useQuery } from "react-query";


import Ofc from './assets/ofc.png'
// import viteLogo from "/vite.svg";
// import image6 from "./assets/image6.png";

import Header from "./components/Header";
import SectionHero from "./components/SectionHero";
import SectionFeature from "./components/SectionFeature";
import SectionFrame from "./components/SectionFrame";
import SectionTestimonial from "./components/SectionTestimonial";
import Footer from "./components/Footer";
import { DUMMY_BLOGS } from "./dummy-blogs.ts";
import BlogPosts from "./components/BlogPosts";
import Blog, { type BlogPost } from "./components/Blog";

import "./App.css";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>(DUMMY_BLOGS);
  const [enabled,setEnabled] = useState(false)
  const url: string = "https://jsonplaceholder.typicode.com/posts";

  console.log(fetchedPosts);

 
  // function handlequery() {
  //   get(url);
  // }
  //  const {isLoading,mydata, isError, error,isFetching} = useQuery('posts',handlequery)

    useQuery(
      "posts",
      handleClick,
      { enabled : enabled }
    );
  

  

  //fetch data using button click normal flow
  function handleClick() {
    async function getData() {
      const data = (await get(url)) as RawDataBlogPost[];
      const blogPosts: BlogPost[] = data.map((rawPost) => {
        return {
          id: rawPost.id.toString(),
          title: rawPost.title,
          description: rawPost.body,
          image: Ofc,
        };
      });
      setFetchedPosts([...DUMMY_BLOGS, ...blogPosts]);
    }
    getData();
  }

  return (
    <div className="container">
      <Header />
      <SectionHero />
      <SectionFeature />

      <SectionFrame />
      <SectionTestimonial />

      <div className="coding-section">
        <h2>Our Blogs</h2>

        <BlogPosts>
          {fetchedPosts.map((blog) => (
            <li key={blog.id} className="blog">
              <Blog {...blog} />
            </li>
          ))}
        </BlogPosts>

        <div className="fetch">
          {/* <button href="#" className="button" onClick={handleClick}>
            View all posts
          </button> */}

          <button  className="button" onClick={() => setEnabled(true)}>
            View all posts
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
