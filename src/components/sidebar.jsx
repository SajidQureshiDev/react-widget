// Sidebar.js
import React from "react";

const sidebarItems = [
  {
    title: "Immobilienlexikon",
    title2: "Immobilienwissen für alle Fälle.",
    icon: "📚",
    label: "KI",
  },
  {
    title: "Preisschätzung",
    title2: "Immobilienwissen für alle Fälle.",
    icon: "💰",
    label: "LINK",
  },
  {
    title: "Checklisten",
    title2: "Immobilienwissen für alle Fälle.",
    icon: "📋",
    label: "PDF",
  },
  {
    title: "Immobilienlexikon",
    title2: "Immobilienwissen für alle Fälle.",
    icon: "📚",
    label: "KI",
  },
  {
    title: "Preisschätzung",
    title2: "Immobilienwissen für alle Fälle.",
    icon: "💰",
    label: "LINK",
  },
  {
    title: "Checklisten",
    title2: "Immobilienwissen für alle Fälle.",
    icon: "📋",
    label: "PDF",
  },
  // Add the other sidebar items similarly...
];

const Sidebar = () => (
  <div className="sidebar">
    <div className="setting-icon">
      <svg
        width="24"
        height="19"
        viewBox="0 0 24 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_180)">
          <path
            d="M8.36391 8.58011C8.86374 8.51297 9.36356 8.68455 9.71792 9.0389L10.6131 9.93411L11.4598 9.09112L10.2364 7.8714C10.0462 7.68117 10.0462 7.37157 10.2364 7.18134C10.4266 6.99111 10.7362 6.99111 10.9265 7.18134L12.1499 8.40479L12.9966 7.5618L12.0977 6.66286C11.7433 6.30851 11.5717 5.80495 11.6389 5.30886C11.7881 4.17492 11.4263 2.98877 10.5572 2.11594C9.66943 1.22819 8.45343 0.870105 7.30085 1.04169C7.11808 1.0678 7.04348 1.29533 7.17403 1.42588L8.32661 2.57847C8.87493 3.12678 8.87493 4.01453 8.32661 4.55912L7.6179 5.26783C7.06959 5.81614 6.18184 5.81614 5.63725 5.26783L4.48094 4.11524C4.35038 3.98469 4.12658 4.05929 4.09674 4.24206C3.92516 5.39465 4.28324 6.61064 5.17099 7.49839C6.04382 8.36749 7.22998 8.72931 8.36391 8.58011Z"
            fill="#003F52"
          />
          <path
            d="M15.533 10.0982L14.6863 10.9412L19.7144 15.9693C19.9046 16.1595 19.9046 16.4691 19.7144 16.6594C19.5242 16.8496 19.2146 16.8496 19.0244 16.6594L13.9963 11.6313L13.1495 12.4742L18.3306 17.6553C18.9871 18.3118 20.0501 18.308 20.7066 17.6515C21.3631 16.9951 21.3631 15.932 20.7103 15.2755L15.533 10.0982Z"
            fill="#003F52"
          />
          <path
            d="M17.4764 6.74122H19.7107L21.945 2.27635L20.8297 1.16107L16.3611 3.39164V5.62593L10.2886 11.6798L9.19572 10.5906L4.79427 14.9921C3.87668 15.9097 3.87668 17.3942 4.79427 18.3118C5.71186 19.2294 7.19642 19.2294 8.11401 18.3118L12.5155 13.9104L11.4002 12.7951L17.4764 6.74122Z"
            fill="#003F52"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_180">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(4 1)"
            />
          </clipPath>
        </defs>
      </svg>

      <div className="badge">
        <span className="badge-text">NACHTMODUS</span>
      </div>
    </div>

    <div className="logo-sidebar">
      <img className="logo" src="./logo.png" alt="" />
    </div>

    <ul className="ul-nav">
      {sidebarItems.map((item, index) => (
        <li key={index} className="sidebar-item">
          <div className="icon-item">
            <span className="icon">{item.icon}</span>
            <div className="title-container">
              <span className="title">{item.title}</span>
              {item.title2 && <span className="subtitle">{item.title2}</span>}
            </div>
          </div>

          <span className="label badge">
            <span className="badge-text">{item.label}</span>
            {item.label === "PDF" && (
              <div className="dropdown">
                <span className="dropdown-icon">▼</span>
                <div className="dropdown-content">
                  <a href="#option1">Option 1</a>
                  <a href="#option2">Option 2</a>
                  <a href="#option3">Option 3</a>
                </div>
              </div>
            )}
          </span>
        </li>
      ))}
    </ul>

    <div className="sidebar-footer">
      <div className="userProfile">
        <img src="./lori.jpg" alt="Profile" className="userProfile__image" />
        <h1 className="userProfile__heading">Immotrust AG</h1>
        <h2 className="userProfile__subheading">Vertrauensvolle</h2>
        <h3 className="userProfile__subSubheading">
          Immobilienberatung seit 2008.
        </h3>
        <button className="userProfile__button">Carlos Kuk - Eigentümer</button>
      </div>
    </div>
  </div>
);

export default Sidebar;
