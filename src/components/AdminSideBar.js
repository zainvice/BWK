import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./AdminSideBar.module.css";

const AdminSideBar = () => {
  const isActive = ({ isActive }) => {
    return isActive === true
      ? styles.sideNavlink + " " + styles.activeLink
      : styles.sideNavlink;
  };
  return (
    <div className={styles.adminSibarContainer}>
      <div className={styles.adminSidebarLogo}>
        <div className={styles.bwk}>BWK</div>
        <div className={styles.betWiseKenya}>Bet Wise Kenya</div>
      </div>

      <div className={styles.adminSidebarNav}>
        <ul className={styles.sideNavigation}>
          <li>
            <NavLink to="/admin-homepage" className={isActive}>
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-usrmngpage" className={isActive}>
              <span className="material-symbols-outlined">person</span>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-submngpage" className={isActive}>
              <span className="material-symbols-outlined">credit_card</span>
              Subscriptions
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-contentmngpage" className={isActive}>
              <span className="material-symbols-outlined">library_books</span>
              Content
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-bettingtipspage" className={isActive}>
              <span className="material-symbols-outlined">
                tips_and_updates
              </span>
              Betting Tips
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-reportspage" className={styles.sideNavlink}>
              <span className="material-symbols-outlined">insights</span>
              Reports and Analytics
            </NavLink>
          </li>

          <li>
            <a className={styles.sideNavlink}>
              <span className="material-symbols-outlined">logout</span>
              Logout
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.adminSidebarFoot}>
        <p>BWK &copy; Copyright 2023</p>
      </div>
    </div>
  );
};

export default AdminSideBar;
