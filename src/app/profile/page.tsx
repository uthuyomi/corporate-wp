import React from "react";
import style from "../profile/profile.module.scss";
import Image from "next/image";
import Data from "@/data/data.json";

const page = () => {
  const profile = Data.profile;
    return (
      <>
        <section></section>
        <section></section>
        <section id="skills">
          <h2>スキルセット</h2>
          <div class="skills-grid">
            <div class="skill-box">
              <h3>HTML / CSS / SCSS</h3>
              <p>（レスポンシブ / カラム設計）</p>
            </div>
            <div class="skill-box">
              <h3>JavaScript / React / Next.js</h3>
              <p>（SPA / API連携）</p>
            </div>
            <div class="skill-box">
              <h3>PHP / WordPressテーマ開発</h3>
              <p>（自作 / カスタム投稿 / フィールド）</p>
            </div>
            <div class="skill-box">
              <h3>Figma / XD / Photoshop</h3>
              <p>（デザインカンプからの変換）</p>
            </div>
            <div class="skill-box">
              <h3>SEO設計 / ページ構造の最適化</h3>
            </div>
            <div class="skill-box">
              <h3>執筆</h3>
              <p>（小説 / 技術記事 / 構造ライティング）</p>
            </div>
            <div class="skill-box">
              <h3>AI活用</h3>
              <p>（ChatGPTとの共同制作 / コンテンツ設計支援）</p>
            </div>
          </div>
        </section>
      </>
    );
};

export default page;
