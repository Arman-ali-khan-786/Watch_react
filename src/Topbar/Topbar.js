import React from "react";
import classes from './Topbar.module.css';

const Topbar = () => {
    return (
        <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://static.businessworld.in/article/article_extra_large_image/1590571015_oiei4u_Amazon.png" alt="Amazon logo" />
        </nav>
      </header>
    )
}

export default Topbar;