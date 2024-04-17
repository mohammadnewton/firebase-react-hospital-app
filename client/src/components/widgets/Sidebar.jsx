import React from 'react';
import Text from '../elements/Text';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="text-white md:block hidden">
            <ul>
            <Text className="pl-4 text-2xl mt-6 font-bold mb-12">
              Shem<span className="text-tertiary">Hospital</span>
            </Text>

            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                  : "mr-2 text-sm py-3 "
              }
            >
              <li className="p-4 ">Home</li>
            </NavLink>

            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                isActive
                  ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                  : "mr-2 text-sm py-3 pl-4"
              }
            >
              <li className="p-4 ">Doctors</li>
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                  : "mr-2 text-sm py-3 pl-4"
              }
            >
              <li className="p-4 ">Services</li>
            </NavLink>

            <NavLink
              to="/chatbot"
              className={({ isActive }) =>
                isActive
                  ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                  : "mr-2 text-sm py-3 pl-4"
              }
            >
              <li className="p-4 ">Chat With Our Bot</li>
            </NavLink>
            </ul>
        </aside>
    )
}

export default Sidebar