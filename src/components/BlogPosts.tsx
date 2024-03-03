import { type ReactNode } from 'react';

type BlogPostsProps = {
  children: ReactNode;
};

export default function Shop({ children }: BlogPostsProps) {
  return (
    <section classname="blogposts">
     

      <ul className="blogs">{children}</ul>
    </section>
  );
}