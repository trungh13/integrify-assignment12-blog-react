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
    isTouch: {
      blogTitle: false,
      blogContent: false,
      blogDescription: false,
      categories: true,
      id: false,
    },
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
    const {
      blogTitle, blogContent, blogDescription, categories, id,
    } = this.state;
    submitHandler({
      blogTitle,
      blogContent,
      blogDescription,
      categories,
      id,
    });
    this.handleClose();
  };

  handleClose = () => {
    const { history } = this.props;
    history.push('/');
  };

  validation = (blogTitle, blogContent, blogDescription, categories) => {
    const textareaRegex = /^[A-Za-z0-9.[$&+,:;=?@#|'<>.^*()%!-\] \n\r]{5,10000}$/;
    const textRegex = /^[A-Za-z0-9.[$&+,:;=?@#|'<>.^*()%!-\] \n]{5,100}$/;
    const errors = {
      blogTitle: textRegex.test(blogTitle),
      blogContent: textRegex.test(blogContent),
      blogDescription: textareaRegex.test(blogDescription),
      categories: categories.length !== 0,
    };
    return errors;
  };

  isTouch = (event) => {
    const elName = event.target.name;
    if (event.target.type !== 'checkbox') {
      this.setState(prevState => ({
        ...prevState,
        isTouch: { ...prevState.isTouch, [elName]: true },
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        isTouch: { ...prevState.isTouch, categories: true },
      }));
    }
  };

  render() {
    const {
      blogTitle, blogContent, blogDescription, categories, isTouch,
    } = this.state;
    const errors = this.validation(blogTitle, blogContent, blogDescription, categories);
    const { categories: categoriesList, formHeading } = this.props;

    const renderCategoryList = categoriesList.map(category => (
      <label key={category} htmlFor={category} className={styles.Category}>
        <input
          type="checkbox"
          id={category}
          checked={categories.includes(category)}
          name="categories"
          value={category}
          onChange={this.handleChange}
          onFocus={this.isTouch}
        />{' '}
        {category}
      </label>
    ));

    return (
      <form className={styles.FormAddNew}>
        <h2 className={styles.FormHeading}>{formHeading}</h2>
        <div>
          {' '}
          <label htmlFor="blogTitle">
            Blog Title
            <input
              type="text"
              id="blogTitle"
              name="blogTitle"
              value={blogTitle}
              onChange={this.handleChange}
              onFocus={this.isTouch}
            />
            {!errors.blogTitle
              && isTouch.blogTitle && (
                <p className={styles.falseMessage}>Blog title required 5-100 characters </p>
            )}
          </label>
          <label htmlFor="blogDescription">
            Blog Description
            <input
              type="text"
              id="blogDescription"
              name="blogDescription"
              value={blogDescription}
              onChange={this.handleChange}
              onFocus={this.isTouch}
            />
            {!errors.blogDescription
              && isTouch.blogDescription && (
                <p className={styles.falseMessage}>Blog description required 5-100 characters </p>
            )}
          </label>
          <label htmlFor="blogContent">
            Blog Content
            <textarea
              rows="1"
              cols="50"
              type="text"
              id="blogContent"
              name="blogContent"
              value={blogContent}
              onChange={this.handleChange}
              onFocus={this.isTouch}
            />
            {!errors.blogContent
              && isTouch.blogContent && (
                <p className={styles.falseMessage}>Blog content required 5-1000 characters </p>
            )}
          </label>
          <div className={styles.BlogCategory}>
            Categories
            <br />
            <React.Fragment>{renderCategoryList}</React.Fragment>
            {!errors.categories
              && isTouch.categories && (
                <p className={styles.falseMessage}>Please select at least 1 categories</p>
            )}
          </div>
        </div>
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
  formHeading: PropTypes.string.isRequired,
};

export default ComponentForm;
