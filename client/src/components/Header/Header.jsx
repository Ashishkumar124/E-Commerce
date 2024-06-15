import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const { cartCount } = useContext(Context);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();

    const handleScroll = () => {
        setScrolled(window.scrollY > 200);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const toggleCart = () => {
        setShowCart(prevState => !prevState);
    };

    const openSearchModal = () => {
        setSearchModal(true);
    };

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => handleNavigation("/")}>Home</li>
                        <li onClick={() => handleNavigation("/about")}>About</li>
                        <li onClick={() => handleNavigation("")}>Categories</li>
                    </ul>
                    <div className="center" onClick={() => handleNavigation("/")}>
                        [|] SUP<span>E</span>R M<span>A</span>RT
                    </div>
                    <div className="right">
                        <TbSearch onClick={openSearchModal} />
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={toggleCart}>
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart setShowCart={setShowCart} />}
        </>
    );
};

export default Header;
