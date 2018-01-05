import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class NewPost extends Component {
  renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
         />
         <p style={{"color": "red", "fontStyle": "italic"}}>{touched && error}</p>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render(){
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
        />
        <Field
          name="categories"
          component={this.renderField}
          label="Catagories"
        />
        <Field
          name="content"
          component={this.renderField}
          label="Post Content"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger" > Cancel </Link>
      </form>
    );
  }
}


const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!"
  }
  if (!values.catagories) {
    errors.catagories = "Enter catagories!"
  }
  if (!values.content) {
    errors.content = "Enter content!"
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'NewPostForm'
})(
  connect(null, {createPost})(NewPost)
);
