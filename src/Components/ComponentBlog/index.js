import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';

const ComponentBlog = (props) => {
  const { blogTitle, blogDescription, categories } = props;
  const renderCategories = categories.map(category => (
    <div key={category} className={styles.blogCategory}>
      {category}
    </div>
  ));
  return (
    <div className={styles.blogPost}>
      <div className={styles.blogBody}>
        <div className={styles.blogTitle}>{blogTitle}</div>
        <div className={styles.blogContent}>{blogDescription}</div>
      </div>
      {categories.length !== 0 && (
        <div className={styles.blogFooter}>
          <div className={styles.blogCategories}>{renderCategories}</div>
        </div>
      )}
    </div>
  );
};
ComponentBlog.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogDescription: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default ComponentBlog;
