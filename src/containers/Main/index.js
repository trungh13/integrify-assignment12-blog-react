import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './index.css';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Form from './Form';

const Main = () => (
  <div className={styles.Main}>
    <Switch>
      <Route exact path="/new-post" component={Form} />
      <Route exact path="/posts/:id" component={BlogPost} />
      <Route exact path="/edit-post/:id" component={Form} />
      <Route exact path="/" component={BlogList} />
    </Switch>
  </div>
);

export default Main;
