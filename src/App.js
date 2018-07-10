import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.css';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

const App = () => (
  <Router basename="/integrify-assignment12-blog-react">
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  </Router>
);
export default App;
