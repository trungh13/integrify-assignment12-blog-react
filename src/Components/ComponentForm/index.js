import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../ComponentButton';
import styles from './index.css';

class ComponentForm extends Component {
  state = {
    blogTitle: '',
    blogContent: '',
    blogDescription: '',
    categories: [],
    id: 0,
  };

  componentDidMount() {
    const { blogPost } = this.props;
    this.setState({
      ...blogPost,
    });
  }

  handleChange = (event) => {
    const elName = event.target.name;
    const elValue = event.target.value;
    const { categories } = this.state;
    if (event.target.type !== 'checkbox') this.setState({ [elName]: elValue });
    else if (event.target.checked) this.setState({ [elName]: [...categories, elValue] });
    else this.setState({ [elName]: [...categories].filter(el => el !== elValue) });
  };

  handleSubmit = () => {
    const { submitHandler } = this.props;
    submitHandler(this.state);
    this.handleClose();
  };

  handleClose = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const {
      blogTitle, blogContent, blogDescription, categories,
    } = this.state;
    const { categories: categoriesList } = this.props;
    const renderCategoryList = categoriesList.map(category => (
      <label key={category} htmlFor={category} className={styles.Category}>
        <input
          type="checkbox"
          id={category}
          checked={categories.includes(category)}
          name="categories"
          value={category}
          onChange={this.handleChange}
        />{' '}
        {category}
      </label>
    ));
    return (
      <form className={styles.FormAddNew}>
        <h2 className={styles.FormHeading}>Add new Blogpost</h2>
        <label htmlFor="blogTitle">
          Blog Title
          <input
            type="text"
            id="blogTitle"
            name="blogTitle"
            value={blogTitle}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="blogDescription">
          Blog Description
          <input
            type="text"
            id="blogDescription"
            name="blogDescription"
            value={blogDescription}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="blogContent">
          Blog Content
          <textarea
            rows="4"
            cols="50"
            type="text"
            id="blogContent"
            name="blogContent"
            value={blogContent}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="BlogCategories">
          Categories
          <div id="BlogCategories" className={styles.CategoryList}>
            {renderCategoryList}
          </div>
        </label>
        <Button buttonName="Submit" onClick={this.handleSubmit} />
        <Button buttonName="Close" onClick={this.handleClose} />
      </form>
    );
  }
}

ComponentForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  blogPost: PropTypes.shape({
    blogTitle: PropTypes.string.isRequired,
    blogDescription: PropTypes.string.isRequired,
    blogContent: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default ComponentForm;
