import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import Link from "next/link";
import CatergoryList from "@/components/catergoryList/CatergoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CatergoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
