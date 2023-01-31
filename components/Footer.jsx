import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <p>2022 HNPSTORE All rights reservesed</p>
      <p className="icons">
        <Link href={"https://instagram.com/hnpstore"}>
          <AiFillInstagram />
        </Link>
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
