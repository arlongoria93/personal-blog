import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-base-300">
      <div className="bg-base-300 max-w-3xl lg:max-w-5xl mx-auto">
        <div className="navbar bg-base-300">
          <div className="navbar-start">
            <Link href="/">
              <a className="btn btn-ghost normal-case text-xl">
                <span className="text-primary">~</span>
                <span className="text-accent ">{`${"["}`}</span>
                angelo<span className="text-error">@</span>longoria
                <span className="text-accent ">{`${"]"}`}</span>
              </a>
            </Link>
          </div>
          <div className="navbar-end dropdown-end">
            <div className="dropdown">
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
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Resume</a>
                </li>
                <li className="text-white menu menu-horizontal">
                  <a>
                    <AiFillGithub size={23} />
                  </a>
                  <a>
                    <AiFillLinkedin size={23} />
                  </a>
                  <a>
                    <AiOutlineTwitter size={23} />
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
