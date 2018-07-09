import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../Components/ComponentButton';
import styles from './index.css';

class ComponentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogTitle: '',
      blogContent: '',
      blogDescription: '',
      categories: [],
      id: 0,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.getData(match.params.id);
  }

  getData = (id) => {
    const { blogs } = this.props;
    if (id) {
      const currentId = Object.keys(blogs).find(blogId => blogId === id);
      this.setState({ ...blogs[currentId] });
    }
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
    const { handleSubmit, blogs } = this.props;
    const newId = blogs[Object.keys(blogs).length - 1].id + 1;
    const data = { ...this.state, id: newId };
    handleSubmit(data);
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
  match: PropTypes.shape({
    params: PropTypes.shape({}).isRequired,
  }).isRequired,
  blogs: PropTypes.shape(PropTypes.shape({}).isRequired).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = state => ({
  blogs: state.blogs,
  categories: state.categories,
});
const mapDispatchToProps = dispatch => ({
  handleSubmit: data => dispatch({ type: 'ADD_BLOG', data }),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentForm);
