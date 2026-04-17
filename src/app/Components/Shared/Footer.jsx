/** @format */

import React from "react";
import logoxl from "../../../../assets/logo-xl.png";
import fb from "../../../../assets/facebook.png";
import ig from "../../../../assets/instagram.png";
import x from "../../../../assets/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white flex flex-col items-center justify-center p-6 sm:p-10 text-center gap-6">
      {/* Logo + Description */}
      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <Image
          src={logoxl}
          alt="Keen Keeper Logo"
          width={300}
          className="w-40 sm:w-64 md:w-72 h-auto"
          priority
        />

        <p className="text-sm sm:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>

      {/* Social */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm sm:text-base">Social Media</p>

        <div className="flex gap-4 items-center justify-center">
          <Image src={ig} alt="Instagram" width={32} height={32} />
          <Image src={x} alt="X" width={32} height={32} />
          <Image src={fb} alt="Facebook" width={32} height={32} />
        </div>
      </div>

      {/* Bottom */}
      <div className="text-xs sm:text-sm opacity-80">
        <p>{new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
