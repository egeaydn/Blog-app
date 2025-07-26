'use client';
import Image from "next/image";
import style from "./page.module.css";
import { use, useEffect } from "react";

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }
  catch(error) {
    console.error("Veri alınırken bir hata oluştu:", error);
  }
}

export default async function SingleBlogPage({ params }) {
 const [data,setData] =useState([]);
useEffect(()=>{
  fetchData().then((data)=>{
    setData(data);
    console.log("Veri başarıyla alındı:", data);
  });
},[]);
  return (
    <div>
      {data.map((item)=>(
        <Image
       src={"https://via.placeholder.com/600x400"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className={style.image}
        />
      <h1>{item.title}</h1>
    
      ))}
      </div>
  );
}
