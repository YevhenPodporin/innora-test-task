import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";

const NavItems = [
  {title: "All", path: "/"},
  {title: "Deleted", path: "/deleted"},
];

const Navigation = () => {
  const {pathname} = useLocation();
  const itemClassName = "nav-list_item";

  return (
    <header className={"nav-list"}>
      {NavItems.map((item, index) => {
        return (
          <Link
            key={index}
            className={
              pathname === item.path
                ? itemClassName + ' active'
                : itemClassName
            }
            to={item.path}
          >
            {item.title}
          </Link>
        );
      })}
    </header>
  );
};

export default Navigation;
