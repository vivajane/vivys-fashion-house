import React, { useContext } from "react";
import Logo from "../images/ten.jpeg";
import "./component.css";
import Button from "../Assets/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { ContextProvider } from "./context/Context";

const lists = [
  {
    id: 1,
    link: "/rtw",
    name: "Ready to Wear",
  },
  {
    id: 2,
    link: "/kid",
    name: "Kids",
  },
  {
    id: 3,
    link: "/bespoke",
    name: "Bespoke",
  },
];

const Header = () => {
  const [active, setActive] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const { totalCartDisplay } = useContext(ContextProvider);

  const newShowmenu = showMenu;

  const onClickHandler = (id) => {
    setActive(id !== active ? id : null);
  };

  const clickShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const clickCloseMenu = () => {
    setShowMenu(false);
  };
  return (
    <div>
      <div className="overall">
        <div className="home-container">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
            {/* <p>Vivy's Fashion House</p> */}
          </div>
          <div className="menu" onClick={clickShowMenu}>
            {showMenu ? (
              <FaTimes size="30px" />
            ) : (
              <GiHamburgerMenu size="30px" className="menu-main" />
            )}
          </div>

          <ul className={showMenu ? "list-item active" : "list-item"}>
            {lists.map((list) => (
              <List
                key={list.id}
                list={list}
                setActive={setActive}
                active={active}
                onClickHandler={onClickHandler}
                clickCloseMenu={clickCloseMenu}
              />
            ))}
          </ul>

          <div
            className={newShowmenu ? "login-btn active" : "login-btn"}
            onClick={clickCloseMenu}
          >
            <NavLink to="login">
              <Button onClick={window.scrollTo(0, 0)} variant="primary">
                Login
              </Button>
            </NavLink>
            <div>
              <NavLink to="cart">
                <FaShoppingCart />
              </NavLink>
            </div>
            <div className="no">{totalCartDisplay()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
const List = ({ list, clickCloseMenu }) => {
  return (
    <li key={list.id} onClick={clickCloseMenu}>
      <NavLink
        to={list.link}
        style={({ isActive }) => ({
          color: isActive ? "green" : "",
        })}
      >
        {list.name}
      </NavLink>
    </li>
  );
};
