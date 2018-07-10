import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.css';

const Header = () => (
  <div className={styles.Header}>
    <NavLink className={styles.Heading} activeClassName={styles.activeNavLink} exact to="/">
      <h1>React-blog</h1>
    </NavLink>

    <ul className={styles.ulNavLink}>
      <li className={styles.liNavLink}>
        <NavLink activeClassName={styles.activeNavLink} exact to="/">
          Blog List
        </NavLink>
      </li>
      <li className={styles.liNavLink}>
        <NavLink activeClassName={styles.activeNavLink} exact to="/new-post">
          Add new blog post
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
