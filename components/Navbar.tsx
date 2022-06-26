import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-7xl border border-yellow-500 mx-auto">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">
            <span className="text-primary">~</span>
            <span className="text-accent ">{`${"["}`}</span>
            angelo<span className="text-error">@</span>longoria
            <span className="text-accent ">{`${"]"}`}</span>
          </a>
        </Link>
        <ul tabIndex={4} className="menu menu-horizontal p-0">
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <a>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
