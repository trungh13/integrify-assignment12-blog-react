import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './App.css';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

const App = () => (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
);
export default withRouter(App);
