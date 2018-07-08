import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './index.css';
import Button from '../../../Components/ComponentButton';

const ComponentBlogPost = ({ blogs, blogPostDelete, match }) => {
  const currentId = Number(match.params.id);
  const blogPost = blogs[currentId];
  const {
    blogTitle, blogContent, categories, id,
  } = blogPost;
  const renderCategories = categories.map(category => (
    <div key={id} className={styles.blogCategory}>
      {category}
    </div>
  ));
  return (
    <div className={styles.blogPost}>
      <h1 className={styles.blogHeading}>{blogTitle}</h1>
      <div className={styles.blogBody}>
        <div className={styles.blogContent}>{blogContent}</div>
        {categories.length !== 0 && <div className={styles.blogCategories}>{renderCategories}</div>}
        <Link to="/">
          <Button onClick={() => blogPostDelete(currentId)} buttonName="Delete" />
        </Link>
      </div>
    </div>
  );
};

ComponentBlogPost.propTypes = {
  blogs: PropTypes.shape(PropTypes.shape({}).isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  blogPostDelete: PropTypes.func.isRequired,
};

export default ComponentBlogPost;
