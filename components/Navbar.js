import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>
          Benim Sitem
        </Link>
        <div className={styles.nav_links}>
          <Link href={"/"} className={styles.link}>
            Ana Sayfa
          </Link>
          <Link href={"/todo"} className={styles.link}>
            Todo App
          </Link>
        </div>
      </div>
    </nav>
  );
}
