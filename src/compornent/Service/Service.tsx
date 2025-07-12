import style from "./Service.module.scss";
import ServiceItem from "@/compornent/Service/ServiceItem";

type Props = {
  service: {
    heading: string;
  };
};

const Service = ({ service }: Props) => {

  return (
    <div className={style.Service}>
      <h2>{service.heading}</h2>
      <div className={style.Service_Item}>
        <ServiceItem />
      </div>
    </div>
  );
};

export default Service;
