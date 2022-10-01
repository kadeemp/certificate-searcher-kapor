

import React from "react";
import styles from './App.css';
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div>
      <div>
        <img
          alt="" style={{width:300, height:60, padding: 20}}
          className={styles.kaporCenterBannerLogo}
          src="https://static.overlay-tech.com/assets/40e7b355-00e3-48dd-9c03-d2d5ac8196eb.png"
        />
        <div style={{ float:'right', display: 'flex', padding:20}}>
          <Link to="/"  style={{padding:20}} >Home</Link>
            <a href="https://www.kapordeibcertificate.com/" style={{padding:20}} >DEIB Certificate Program</a>
            <a  href="https://www.kaporcenter.org/" style={{padding:20}}>Kapor Center</a>
            <Link to="/login"  style={{padding:20}} >Login</Link>
            <Link to="/search" >
            <img style={{height: 20, width: 20, padding: 10}}
              alt=""
              className={styles.searchButton}
              src="https://static.overlay-tech.com/assets/d5810a98-a83d-4625-a3dc-690a550bb1d0.png"
            />
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Header;
