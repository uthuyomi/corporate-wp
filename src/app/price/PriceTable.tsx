"use client";

import { useEffect, useState } from "react";
import style from "../price/price.module.scss";

type TableRow = {
  title?: string;
  range?: string;
  duration: string;
  price: string;
  note?: string;
};

type TableGroup = {
  heading: string;
  rows: TableRow[];
};

type WPPricePage = {
  id: number;
  title: { rendered: string };
  acf: {
    price_acf_table_json: string;
  };
};

type PriceIntroACF = {
  acf: {
    pricepage_heading: string;
    pricepage_text: string;
  };
};

export default function PriceTableList() {
  const [posts, setPosts] = useState<WPPricePage[]>([]);
  const [intro, setIntro] = useState<PriceIntroACF | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // 価格表（CPT）を取得
  useEffect(() => {
    fetch(
      "https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/wp/v2/price_page?acf_format=standard&per_page=100"
    )
      .then((res) => res.json())
      .then((data: WPPricePage[]) => setPosts(data))
      .catch((err) => setError(err));
  }, []);

  // テキスト本文（固定ページ ID = 92）を取得
  useEffect(() => {
    fetch(
      "https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/wp/v2/pages/96?acf_format=standard"
    )
      .then((res) => res.json())
      .then((data: PriceIntroACF) => setIntro(data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>エラー: {error.message}</p>;
  if (!posts.length || !intro) return <p>読み込み中...</p>;

  return (
    <>
      <div className={style.pricePage}>
        <h3>{intro.acf.pricepage_heading}</h3>
        <p>{intro.acf.pricepage_text}</p>

        <div className="space-y-12">
          {posts.map((post) => {
            let tables: TableGroup[] = [];

            try {
              const raw = post.acf.price_acf_table_json || "[]";
              const cleaned = raw.replace(/[“”]/g, '"');
              tables = JSON.parse(cleaned);
            } catch (e) {
              console.warn(`JSON parse error on post ${post.id}`);
              return null;
            }

            return (
              <div key={post.id} className={style.priceItem}>
                {tables.map((table, tableIndex) => (
                  <div key={tableIndex} className={style.table}>
                    <table>
                      <caption className={style.tableTitle}>
                        {table.heading}
                      </caption>
                      <thead>
                        <tr>
                          {table.rows[0].title && <th>内容</th>}
                          {table.rows[0].range && <th>サイズ</th>}
                          <th>日数</th>
                          <th>価格</th>
                          {table.rows[0].note && <th>備考</th>}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, i) => (
                          <tr key={i}>
                            {row.title && <td>{row.title}</td>}
                            {row.range && <td>{row.range}</td>}
                            <td>{row.duration}</td>
                            <td>{row.price}</td>
                            {row.note && <td>{row.note}</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
