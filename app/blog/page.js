import { BlogCard } from "@/components/BlogCard";
import { data } from "@/data";
import styles from "./page.module.css";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Sayfası</h1>
      <p>Bu, blog sayfasının içeriğidir.</p>
      <div className={styles.blogList}>
        {data.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            imageUrl={blog.image}
          />
        ))}
      </div>
    </div>
  );
}
