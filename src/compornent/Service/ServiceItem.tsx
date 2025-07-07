import React from 'react'
import Image from 'next/image'
import style from '@/compornent/Service.module.scss'
import dummy from "../../../public/assets/Hero.jpg";

const ServiceItem = () => {
  return (
    <div className={style.Service_item}>
      <div className={style.img}>
        <Image src={dummy} alt="dummy" width={100} height={100} />
      </div>
      <h3>LPコーディング</h3>
      <p>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  )
}

export default ServiceItem