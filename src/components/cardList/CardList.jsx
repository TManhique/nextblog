import React from "react";
import styles from './cardList.module.css';
import Pagination from "../pagination/Pagination";

 function CardList() {
  return (
    <div className={styles.container}>
       <Pagination />
        
    </div>
  )
}


export default CardList;