import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/movie-logo.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]); 
    
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const navigationHandler = (type) => {
        if (type === "movie") {
            navigate("/explore/movie");
        } else {
            navigate("/explore/tv");
        }
        setMobileMenu(false);
    };


    return (
        <header className={`header ${mobileMenu ? "mobile-view" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="" /> <span className="logo-name">@nyMovies</span>
                </div>
                <ul className="menu-items">
                    <li className="menu-item" onClick={() => navigationHandler("movie")}>Movies</li>
                    <li className="menu-item" onClick={() => navigationHandler("tv")}>TV Shows</li>
                    <li className="menu-item"><HiOutlineSearch onClick={openSearch}/></li>
                </ul>
                <div className="mobile-menu-items">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu 
                    ? (<VscChromeClose onClick={() => setMobileMenu(false)} /> ) 
                    : ( <SlMenu onClick={openMobileMenu} /> )}
                </div>
            </ContentWrapper>
            {showSearch && ( <div className="search-bar">
                <ContentWrapper>
                    <div className="search-input">
                        <input type="text" placeholder="Search for Movie or TV Show" onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler} />
                        <VscChromeClose onClick={()=> setShowSearch(false)} />
                    </div>
                </ContentWrapper>
            </div> )}
        </header>
    )
};

export default Header;