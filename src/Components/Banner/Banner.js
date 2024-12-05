import React from "react";
import "./Banner.css";
export default function Banner() {
  return (
    <section className="banner">
      <div className="container banner_content">
        <h2 className="banner_text">خدمات سریع و قابل اعتماد برای پروژه شما!</h2>
        <a className="banner_link" href="#">بیشتر بدانید</a>
      </div>
    </section>
  );
}
