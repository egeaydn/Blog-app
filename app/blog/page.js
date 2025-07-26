'use client';
import { BlogCard } from "@/components/BlogCard";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Veri alınırken bir hata oluştu:", error);
    return []; // Hata durumunda boş array dönelim ki hata olmasın
  }
}

export default function BlogPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      console.log("Veri başarıyla alındı:", data);
      setData(data);
    });
  }, []);

  return (
    <div>
      <h1>Blog Sayfası</h1>
      <p>Bu, blog sayfasının içeriğidir.</p>
      <div className={styles.blogList}>
        {data.map((item) => (
          <BlogCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={"https://via.placeholder.com/150"} // Sabit placeholder görsel koydum
          />
        ))}
      </div>
    </div>
  );
}
