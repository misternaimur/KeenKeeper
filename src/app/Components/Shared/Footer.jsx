/** @format */

import React from "react";
import logoxl from "../../../../assets/logo-xl.png"
import fb from "../../../../assets/facebook.png"
import ig from "../../../../assets/instagram.png"
import x from "../../../../assets/twitter.png"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-base-content rounded p-10">
      <nav className=" text-white">
         <Image src={logoxl} alt="Keen Keeper Logo" width={500} priority />
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          <br />
          nurture the relationships that matter most.
        </p>
      </nav>
      <nav className="text-white">
        <p>Social Media</p>
        <div className="grid grid-flow-col gap-4">
             <Image src={ig} alt="Keen Keeper Logo" width={50} priority />
             <Image src={x} alt="Keen Keeper Logo" width={50} priority />
             <Image src={fb} alt="Keen Keeper Logo" width={50} priority />
        </div>
      </nav>
      <aside className="text-white">
        <p>{new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;
