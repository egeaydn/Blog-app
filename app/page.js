"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  function arttir() {
    setNumber(number + 1);
  }

  function azalt() {
    setNumber(number - 1);
  }

  return (
    <div>
      <Link href="/todo">Todo Uygulamama Git</Link>
      <h1>Sayaç</h1>
      <div>{number}</div>
      <button onClick={arttir}>1 Arttır</button>
      <button onClick={azalt}>1 Azalt</button>
    </div>
  );
}
