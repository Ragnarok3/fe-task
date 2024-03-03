import "../App.css";
import image6 from "../assets/image6.png";
import frame69 from "../assets/Frame69.png";

export default function SectionHero() {
  return (
    <div className="section-hero">
      <div className="heading-hero">
        <h1>
          Building Brands in the <span>Digital Age</span>
        </h1>

        <p>
          Your partner in navigating the ever-evolving landscape of digital
          marketing. From conceptualization to execution, we craft tailored
          solutions that drive results and elevate your brand to new heights.
        </p>

        <button className="button">Learn More</button>
      </div>
      <div className="image-hero">
        <div className="image1">
          {" "}
          <img src={image6} alt="image6" />{" "}
        </div>
        <div className="image2">
          {" "}
          <img src={frame69} alt="frame69" />
        </div>
      </div>
    </div>
  );
}
