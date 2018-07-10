import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './index.css';
import Blog from '../../../Components/ComponentBlog';

class ComponentBlogList extends React.Component {
  state = {
    query: '',
    displayingBlogs: {},
  };

  componentDidMount = () => {
    const { blogs } = this.props;
    this.setState(prevState => ({ prevState, displayingBlogs: blogs }));
  };

  handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    const { blogs } = this.props;
    let displayingBlogs;
    if (input[0] === '#') {
      displayingBlogs = Object.values(blogs).reduce((acc, blog) => {
        if (blog.categories.includes(input.substr(1))) acc[blog.id] = blog;
        return acc;
      }, {});
    } else {
      displayingBlogs = Object.values(blogs).reduce((acc, blog) => {
        if (blog.blogTitle.toLowerCase().includes(input)) acc[blog.id] = blog;
        return acc;
      }, {});
    }
    this.setState({
      query: input,
      displayingBlogs,
    });
  };

  render() {
    const { query, displayingBlogs } = this.state;
    let renderBlogPost;
    if (Object.keys(displayingBlogs).length !== 0) {
      renderBlogPost = Object.keys(displayingBlogs).map(id => (
        <Link className={styles.BlogLink} to={`/posts/${id}`} key={id}>
          <Blog {...displayingBlogs[id]} />
        </Link>
      ));
    }
    return (
      <div className={styles.BlogsListContainer}>
        <input
          type="text"
          onChange={this.handleInput}
          value={query}
          placeholder="Search blog title or #hashtag"
        />
        {renderBlogPost ? (
          <div className={styles.BlogList}>{renderBlogPost}</div>
        ) : (
          <h1>No posts </h1>
        )}
      </div>
    );
  }
}
ComponentBlogList.propTypes = {
  blogs: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  blogs: state.blogs,
});

export default connect(mapStateToProps)(withRouter(ComponentBlogList));
