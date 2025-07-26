import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

export const BlogCard = ({ id, title, imageUrl }) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className={styles.blogCard}>
        <Image
          src={imageUrl}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className={styles.image}
        />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};
