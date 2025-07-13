"use client";

import React, { useEffect, useState } from "react";
import style from "../price/price.module.scss";


const PriceTable = () => {

  return (
    <>
          <div className={style.priceItem}>
            <h3>{item.acf.price_acf_heading}</h3>
            <p>{item.acf.price_acf_text}</p>
            <div className={style.table}></div>
          </div>
    </>
  );
};

export default PriceTable;
