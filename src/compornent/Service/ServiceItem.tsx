import React from 'react'
import Image from 'next/image'
import style from '@/compornent/Service.module.scss'
import { AcfService } from '@/types/acf';

type ServiceItemProps = {
  acf: AcfService;
};

const ServiceItem = ({ acf }: ServiceItemProps) => {
  return (
    <div className={style.Service_item}>
      <div className={style.img}>
        <Image
          src={acf.acf.service_item_thumbnail}
          alt="サムネイル"
          width={100}
          height={100}
        />
      </div>
      <h3>{acf.acf.service_item_title}</h3>
      <p>{acf.acf.service_item_text}</p>
    </div>
  );
};

export default ServiceItem