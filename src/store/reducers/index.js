import { combineReducers } from 'redux';

const blogsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BLOG': {
      return { ...state, [action.data.id]: action.data };
    }
    case 'EDIT_BLOG': {
      return { ...state, [action.data.id]: action.data };
    }
    case 'DEL_BLOG': {
      const { [action.currentId.toString()]: deletedBlog, ...rest } = state;
      return rest;
    }

    default:
      return state;
  }
};

const categoriesReducer = (state = []) => state;

export default combineReducers({ blogs: blogsReducer, categories: categoriesReducer });
