import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { ImHome2 } from "react-icons/im";
import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top__wrapper">
          <div className="header__address">
            <IoLocationSharp className="header__address--logo" />

            <p className=" header__address--line">
              آدرس: تهران، آدرس مورد نظر شما در اینجا قرار میگیرد..
            </p>

            <IoCall className="header__address--logo" />

            <p className="header__address--text">۰۲۱-۱۲۳۴۵</p>
          </div>
          <div className="header-top__logo">
            <FaWifi className="header__logo-item header__logo-item--wifi" />
            <FaLinkedinIn className="header__logo-item" />
            <FaTwitter className="header__logo-item" />
            <ImInstagram className="header__logo-item" />
            <FaTelegramPlane className="header__logo-item" />
          </div>
        </div>
      </div>

      <nav className="nav-header">
        <div className="container nav-header__wrapper">
          <div className="nav__logo">
            <ImHome2 />
          </div>
          <div className="nav_list">
            <ul className="nav_list-items">
              <li className="nav_list-item nav_list-item--active">صفحه نخست</li>
              <li className="nav_list-item">درباره ما</li>
              <li className="nav_list-item">خدمات</li>
              <li className="nav_list-item">پروژه ها</li>
              <li className="nav_list-item">تماس با ما</li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="header-banner">
        <div className="header-banner__overlay">
          <p className="header-banner__title">
            از شروع تا پایان <br /> در کنار شما هستیم
          </p>

          <a  className="header-banner__link">
            جدید ترین پروژه های ما
          </a>
        </div>
      </div>
    </header>
  );
}
