import React from "react";
import Header from ".//Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import "./App.css";
import MainLayout from "./Components/Layout/MainLayout";
export default function App() {
  return (
    <div>
      <MainLayout>
        <Banner />
      </MainLayout>
    </div>
  );
}
