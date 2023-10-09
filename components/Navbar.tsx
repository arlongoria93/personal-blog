import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-base-300 font-raleway">
      <div className="bg-base-300 max-w-3xl lg:max-w-5xl mx-auto">
        <div className="navbar bg-base-300">
          <div className="navbar-start">
            <Link href="/">
              <a className="btn btn-ghost normal-case text-2xl">
                <span className="text-accent ">{`${"["}`}</span>
                angelo<span className="text-error">@</span>longoria
                <span className="text-accent ">{`${"]"}`}</span>
              </a>
            </Link>
          </div>
          <div className="navbar-end dropdown-end">
            <div className="dropdown font-bold">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content  mt-3 p-4 shadow-md bg-base-300 rounded-box w-52"
              >
                <Link href="/projects">
                  <li>
                    <a className="text-lg">Projects</a>
                  </li>
                </Link>
                <li>
                  <a
                    className="text-lg"
                    href="/Angelo-Longoria-Resume.pdf"
                    target="blank"
                  >
                    Resume
                  </a>
                </li>
                <li className="text-base-content mt-4 menu menu-horizontal">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/arlongoria93"
                  >
                    <BsGithub size={23} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/angelo-longoria/"
                  >
                    <BsLinkedin size={23} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/angelo_longoria"
                  >
                    <BsTwitter size={23} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
