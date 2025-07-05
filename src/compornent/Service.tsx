import React from 'react';
import ServiceItem from '@/compornent/Service/ServiceItem';
import Style from '@/compornent/Service.module.scss';

type ServiceProps = {
  service: {
    heading: string;
  }
}

const Service = ({service}: ServiceProps) => {
  return (
    <div className={style}>
      <h2>{service.heading}</h2>
      <div className={style}>
        <ServiceItem/>
      </div>
    </div>
  )
}

export default Service