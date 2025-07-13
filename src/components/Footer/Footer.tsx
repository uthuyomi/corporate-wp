import React from 'react';
import Navi from '@/components/Navi/Navi';
import style from '@/components/Footer/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={style.footer}>
      <p>@ Kaisei Yasuzaki</p>
      <nav>
        <ul>
          <Navi />
        </ul>
      </nav>
    </footer>
  );
}

export default Footer