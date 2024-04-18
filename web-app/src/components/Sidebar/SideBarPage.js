import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import styles from "./SideBarPage.module.css"; // Import the module.css file for styling

const SideBarPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [cardTitle, setCardTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Extract card title from query parameter
    const params = new URLSearchParams(location.search);
    const title = params.get("title");
    if (title) {
      setCardTitle(title);
    }
  }, [location.search]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // Function to handle clicking on the back button
  const handleBackButtonClick = () => {
    window.history.back(); // Go back to the previous page
  };

  return (
    <div className={styles.sideBarPage}>
      <Header />
      <div className={styles.header}>
        <button onClick={handleBackButtonClick} className={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {cardTitle && <div className={styles.cardTitle}>{cardTitle}</div>}
      </div>
      <div className={styles.contentWrapper}>
        <SideBar activeTab={activeTab} handleTabChange={handleTabChange} />
        <MainContent activeTab={activeTab} />
      </div>
      <Footer />
    </div>
  );
};

export default SideBarPage;
