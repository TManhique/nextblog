import React from "react";
import styles from './navbar.module.css';
import Image from "next/image";
import Link from 'next/link';

 function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
          <Image src="/facebook.png" alt='' width={24} height={24} />
          <Image src="/instagram.png" alt='' width={24} height={24}/>
          <Image src="/tiktok.png" alt='' width={24} height={24}/>
          <Image src="/youtube.png" alt='' width={24} height={24}/>      
        </div>
        <div className={styles.logo}>blog</div>
        <div className={styles.links}></div>
    </div>
  )
}


export default Navbar;