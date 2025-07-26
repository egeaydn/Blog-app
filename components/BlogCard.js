import Link from "next/link";
import styles from "./card.module.css";

export const BlogCard = () => {
  return (
    <div className={styles.blogCard}>
      <h2>Blog Yazısı Başlığı</h2>
      <p>Bu, blog yazısının kısa bir özeti.</p>
      <Link href="/blog/blog-yazisi" className={styles.readMore}>
        Devamını Oku
      </Link>
    </div>
  );
};
