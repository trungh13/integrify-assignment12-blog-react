import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ComponentForm from '../../../Components/ComponentForm';

const Form = (props) => {
  const {
    blogs,
    match: {
      params: { id },
    },
    handleEdit,
    handleSubmit,
  } = props;
  let blogPost = {
    blogTitle: '',
    blogContent: '',
    blogDescription: '',
    categories: [],
    id: blogs[Object.keys(blogs).length - 1].id + 1,
  };
  let submitHandler = handleSubmit;
  let formHeading = 'Create new blogpost';
  if (id) {
    blogPost = { ...blogs[id] };
    submitHandler = handleEdit;
    formHeading = 'Edit blogpost';
  }
  return (
      <ComponentForm
        {...props}
        blogPost={blogPost}
        submitHandler={submitHandler}
        formHeading={formHeading}
      />
  );
};

Form.propTypes = {
  match: PropTypes.shape(PropTypes.shape(PropTypes.string).isRequired).isRequired,
  blogs: PropTypes.shape(PropTypes.shape().isRequired).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  blogs: state.blogs,
  categories: state.categories,
});
const mapDispatchToProps = dispatch => ({
  handleSubmit: data => dispatch({ type: 'ADD_BLOG', data }),
  handleEdit: data => dispatch({ type: 'EDIT_BLOG', data }),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
