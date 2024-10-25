// Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h3>Beginnen Sie Ihre Verkaufsreise 👋</h3>
        <p>Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.</p>
      </div>
      <div className="reload-icon">
        <FontAwesomeIcon icon={faCircleQuestion} size="2x" />
        <small>Reload</small>
      </div>
    </header>
  );
};

export default Header;
