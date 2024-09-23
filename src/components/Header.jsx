import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

function Header() {
  const [popUp, setPopUp] = useState(false);
  return (
    <header className="flex justify-between items-center py-4 md:px-8 px-4 shadow-md">
      <img src={reactLogo} alt="" />
      <ul className="flex space-x-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500 underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-red-500 underline" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "text-red-500 underline" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <button onClick={() => setPopUp(true)}>Sign In</button>
          {popUp && (
            <Modal
              setPopUp={setPopUp}
              header={<div className="text-xl font-bold">Sign In</div>}
              footer={
                <div className="flex justify-end gap-4">
                  <button
                    className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
                    onClick={() => setPopUp(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
                    onClick={() => setPopUp(false)}
                  >
                    Sign In
                  </button>
                </div>
              }
            >
              <input
                placeholder="Username"
                className="grow rounded border border-gray-600 px-2 py-1"
                type="text"
              />
              <input
                placeholder="Password"
                className="grow rounded border border-gray-600 px-2 py-1"
                type="password"
              />
            </Modal>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
