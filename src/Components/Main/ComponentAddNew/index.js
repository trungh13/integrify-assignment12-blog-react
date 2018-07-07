import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/ComponentButton';
import styles from './index.css';

class ComponentAddNew extends Component {
  formRef = React.createRef();

  state = {
    blogTitle: '',
    blogContent: '',
    blogDescription: '',
    categories: [],
    id: { ...this.props }.newId,
  };

  handleChange = (event) => {
    const elName = event.target.name;
    const elValue = event.target.value;
    const { categories } = this.state;
    if (event.target.type !== 'checkbox') this.setState({ [elName]: elValue });
    else if (event.target.checked) this.setState({ [elName]: [...categories, elValue] });
    else this.setState({ [elName]: [...categories].filter(el => el !== elValue) });
  };

  handleSubmit = () => {
    const { addNewSubmit } = this.props;
    addNewSubmit({ ...this.state });
    this.handleClose();
  };

  handleClose = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { blogTitle, blogContent, blogDescription } = this.state;
    const { categoryList } = this.props;
    const rendercategoryList = categoryList.map(category => (
      <label key={category} htmlFor={category} className={styles.Category}>
        <input
          type="checkbox"
          id={category}
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
            {rendercategoryList}
          </div>
        </label>
        <Button buttonName="Submit" onClick={this.handleSubmit} />
        <Button buttonName="Close" onClick={this.handleClose} />
      </form>
    );
  }
}

ComponentAddNew.propTypes = {
  addNewSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  categoryList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default ComponentAddNew;
