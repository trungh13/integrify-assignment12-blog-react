import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './index.css';

const ComponentBlogPost = ({ blogs, blogPostDelete, match }) => {
  const currentId = Number(match.params.id);
  const blogPost = blogs[currentId];
  const {
    blogTitle, blogContent, blogPhoto, categories,
  } = blogPost;
  let blogPhotoURL = '';
  if (Object.keys(blogPhoto).length !== 0) {
    blogPhotoURL = `https:${blogPhoto.fields.file.url}`;
  }
  const renderCategories = categories.map(category => (
    <div key={category.fields.category} className={styles.blogCategory}>
      {category.fields.category}
    </div>
  ));
  return (
    <div className={styles.blogPost}>
      <h1 className={styles.blogHeading}>{blogTitle}</h1>
      {blogPhotoURL !== '' && <img className={styles.blogPhoto} src={blogPhotoURL} alt="" />}
      <div className={styles.blogBody}>
        <div className={styles.blogContent}>{blogContent}</div>
        {categories.length !== 0 && <div className={styles.blogCategories}>{renderCategories}</div>}
        <Link to="/">
          <button type="button" onClick={() => blogPostDelete(currentId)}>
            Delete
          </button>
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
