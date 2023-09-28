"use client";
import { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

function AuthLinks() {
  const [open, setOpen] = useState(false);

  const status = "notAuthenticated";

  return (
    <>
      {status == "notAuthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write"> Write </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        {status == "notAuthenticated" ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/write"> Write </Link>
            <span className={styles.link}>Logout</span>
          </>
        )}
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </>
  );
}

export default AuthLinks;
