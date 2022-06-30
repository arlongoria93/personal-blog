import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <AiFillGithub size={23} />
          </a>
          <AiFillLinkedin size={23} />
          <AiOutlineTwitter size={23} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
