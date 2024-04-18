import axios from "axios";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";

const Navbar = ({ search }) => {
  function onsearch(word) {
      search(word);
  }

  return (
    <div className="mynavbar ">
      <div className="container col-10">
        <div className="logo">
          <div className="fathimg">
            <img src="../../public/assets/img/logo.png" alt="" />
          </div>
        </div>
        <div className="mx-3 searchbar col-11">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              onsearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
