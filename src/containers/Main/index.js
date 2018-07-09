import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './index.css';
import ComponentBlogList from './ComponentBlogList';
import ComponentBlogPost from './ComponentBlogPost';
import ComponentForm from './ComponentForm';

const Main = () => (
  <div className={styles.Main}>
    <Switch>
      <Route exact path="/new-post" component={ComponentForm} />
      <Route exact path="/posts/:id" component={ComponentBlogPost} />
      <Route exact path="/edit-post/:id" component={ComponentForm} />
      <Route exact path="/" component={ComponentBlogList} />
    </Switch>
  </div>
);

export default Main;
