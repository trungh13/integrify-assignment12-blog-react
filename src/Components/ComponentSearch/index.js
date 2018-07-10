import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentSearch extends Component {
  state = {
    query: '',
    displaying: {},
  };

  componentDidMount() {
    const { data } = this.prop;
    this.setState(prevState => ({ prevState, displaying: data }));
  }

  handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    const { data, displayingBlogs } = this.props;
    const { displaying } = this.state;
    if (input === '') {
      this.setState(prevState => ({
        prevState,
        displaying: data.filter(blog => blog.blogTitle.toLowerCase().includes(input)),
      }));
    }
    this.setState({ query: input });
    displayingBlogs(displaying);
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleInput} />
      </div>
    );
  }
}
ComponentSearch.propTypes = {
  data: PropTypes.shape(PropTypes.shape({})).isRequired,
  displayingBlogs: PropTypes.func.isRequired,
};
export default ComponentSearch;
