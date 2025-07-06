import React from 'react'
import Image from 'next/image'
import style from '@/compornent/Service.module.scss'

const ServiceItem = () => {
  return (
    <div className={style.Service_item}>
      <div className={style.img}>
        <Image src={} alt={} width={} height={} />
      </div>
      <h3>LPコーディング</h3>
      <p>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
}

export default ServiceItem