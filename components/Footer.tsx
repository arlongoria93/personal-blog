import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/arlongoria93"
          >
            <AiFillGithub size={33} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/angelo-longoria/"
          >
            <AiFillLinkedin size={33} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/angelo_longoria"
          >
            <AiOutlineTwitter size={33} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
