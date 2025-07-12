"use client";

import { useEffect, useState } from "react";
import React from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/mousewheel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { AcfSkill } from "@/types/acf";
import Image from "next/image";
import style from "@/components/Skills/Skills.module.scss";

type SkillsProps = {
  skills: {
    heading: string;
  };
};

const Skills = ({ skills }: SkillsProps) => {
  //動的にwordpressのACFを使ってskillセクションのアイテム情報を取得
  const [skill, setSkill] = useState<AcfSkill[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/wp/v2/skill")
      .then((res) => res.json())
      .then((data: AcfSkill[]) => setSkill(data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>エラーが発生しました</p>;
  if (!skill) return <p>読み込み中...</p>;

  return (
    <section className={style.Skill}>
      <h2>{skills.heading}</h2>
      <div className={style.Slider_wrapper}>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <Swiper
          className={style.Skill_Slider}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={30}
          slidesPerView={3} // or "auto" if you want variable width
          pagination={{ clickable: true }}
        >
          {
            //ここからslideの処理
            skill.map((item, index) => (
              <SwiperSlide key={index} className={style.Skill_slider_slide}>
                <div className={style.img}>
                  <Image
                    src={item.acf.skill_item_thumbnail}
                    alt="サムネイル"
                    width={100}
                    height={100}
                  />
                </div>
                <div className={style.text}>
                  <p>{item.acf.skill_item_text}</p>
                  <div className={style.Level}>
                    <h3>スキルレベル</h3>
                    <div className={style.Level_img}>
                      <Image
                        src={item.acf.skill_item_img}
                        alt="dummy"
                        width={100}
                        height={100}
                      />
                      <p>{item.acf.skill_item_level_text}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
            //ここまで
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
