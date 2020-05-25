import React, { Component } from 'react';
import propTypes from 'prop-types';
import './styles.scss';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    contactToAdd: propTypes.func.isRequired,
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({
      [name]: value,
    });

  handleSubmit = e => {
    e.preventDefault();
    const prevValue = this.props.contacts.find(
      contact => contact.name === this.state.name,
    );
    if (!prevValue) {
      this.props.contactToAdd({ ...this.state });
      this.setState({
        name: '',
        number: '',
      });
      return;
    }

    alert(`${this.state.name} is already in contacts`);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="contactForm" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className="contactFormInput"
            type="text"
            required
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            className="contactFormInput"
            type="number"
            name="number"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className="contactFormButton" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}