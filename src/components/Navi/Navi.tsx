"use client";

import React from "react";
import { useEffect, useState } from "react";
import style from "@/components/Navi/Navi.module.scss"

type MenuItem = {
  ID: number;
  title: string;
  url: string;
};

const Header = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch(
      "https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/menus/v1/menus/main_menu"
    )
      .then((res) => res.json())
      .then((data) => setMenu(data.items))
      .catch((err) => console.error("メニュー取得エラー", err));
  });
  return (
    <>
      {menu.map((item) => (
        <li key={item.ID} className={style.NaviList}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </>
  );
};

export default Header;
