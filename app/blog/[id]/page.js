import { data } from "@/data";
import Image from "next/image";
import style from "./page.module.css";

export default function SingleBlogPage({ params }) {
  const { id } = params;

  const blog = data[0];

  return (
    <div>
      <Image
        src={blog.image}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className={style.image}
      />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
