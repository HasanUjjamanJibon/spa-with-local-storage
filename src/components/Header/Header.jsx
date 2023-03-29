import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="navbar  container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">MOVIE</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
