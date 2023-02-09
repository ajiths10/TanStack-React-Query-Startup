import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="grid grid-cols-6 bg-slate-600 text-slate-400 p-3 min-h-10">
      <div className=" col-span-1">
        <Link to="/">Home</Link>
      </div>
      <div className=" col-span-4">
        <Link to="/normal-superheros">N-Super Heros</Link>
        <Link to="/rq-superheros" className="ml-5">
          RQ-Super Heros
        </Link>
        <Link to="/parallel-route" className="ml-5">
          Parallel routes
        </Link>
        <Link to="/dependent-querry" className="ml-5">
          Dependent querry
        </Link>
        <Link to="/pagination-querry" className="ml-5">
          Pagination querry
        </Link>
      </div>
      <div className=" col-span-1">Logout</div>
    </div>
  );
};

export default NavBar;
