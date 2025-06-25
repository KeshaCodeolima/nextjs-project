import styles from './page.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className={styles.h1}>Home Page.</h1>
    <Link href='/registers' className={styles.main}><button>Register Page</button></Link>
    </>
  );
}
