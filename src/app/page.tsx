'use client'

import Header from "@/component/Header/Header";
import List from "@/component/CafeInfo/List";
import AddCafeIcon from "@/component/AddForm/AddCafeIcon";
import AddCafeForm from "@/component/AddForm/AddCafeForm";

export default function Home() {
  return (
    <>
      <Header/>
      <List/>
      <AddCafeIcon/>
      <AddCafeForm/>
    </>
  );
}
