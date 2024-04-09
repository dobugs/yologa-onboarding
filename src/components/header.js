import React from "react";
import "../styles/header.css";
import logo from "../assets/images/logo.png";
import download from "../assets/images/download.png";

const Header = () => {

    return (
        <div className="header">
            <div className="left-header">
                <a href="/" className="header-a"><img className="header-logo-img" src={logo} alt="Company Logo" /></a>
                <div className="header-menu">프로젝트 소개</div>
                <div className="header-menu">팀 소개</div>
                <div className="header-menu">문의하기</div>
            </div>
        </div>
    );
};

export default Header;