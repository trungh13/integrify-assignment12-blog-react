import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';

const ComponentBlog = (props) => {
  const {
    blogTitle, blogDescription, categories, id,
  } = props;
  const renderCategories = categories.map(category => (
    <div key={id} className={styles.blogCategory}>
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
  blogTitle: PropTypes.string,
  blogDescription: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired),
  id: PropTypes.number.isRequired,
};
ComponentBlog.defaultProps = {
  blogTitle: '',
  blogDescription: '',
  categories: [],
};
export default ComponentBlog;
