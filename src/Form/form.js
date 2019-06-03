import React, { Component } from 'react';
import { errorForm } from './errorForm.js';
import './styles.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      errorForms: {firstname: '', lastname: '', email: '', password: ''},
      firstnameValid: false,
      lastnameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleInputField = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
    () => { this.fieldValidation(name, value) });

  }

  fieldValidation(fieldName, value) {

    let errorFieldValidation = this.state.errorForms;
    let firstnameValid = this.state.firstnameValid;
    let lastnameValid = this.state.lastnameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'firstname':
        firstnameValid = value.length > 0;
        errorFieldValidation.firstname = firstnameValid ? '' : ' is required';
        break;
      case 'lastname':
        lastnameValid = value.length > 0;
        errorFieldValidation.lastname = lastnameValid ? '' : ' is required';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errorFieldValidation.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 8;
        errorFieldValidation.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }

    this.setState({errorForms: errorFieldValidation,
      firstnameValid: firstnameValid,
      lastnameValid: lastnameValid,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.formValidation);

  }

  formValidation() {

    this.setState({formValid: this.state.firstnameValid && this.state.lastnameValid && this.state.emailValid && this.state.passwordValid});

  }

  errorClass(error) {

    return(error.length === 0 ? '' : 'has-error');

  }

  render () {
    return (
      <form className="form--validation">
        <div className="headline">
          <h2>Form with Validation</h2>
        </div>
        <div className="panel panel-default error--status">
          <errorForm errorForms={this.state.errorForms} />
        </div>
        <div className={`field--info ${this.errorClass(this.state.errorForms.lastname)}`}>
          <div>
            <label htmlFor="firstname">First Name:</label>
          </div>
          <div>
            <input type="firstname" required className="form-control" name="firstname" placeholder="Firstname" value={this.state.firstname} onChange={this.handleInputField} />
          </div>
        </div>
        <div className={`field--info ${this.errorClass(this.state.errorForms.lastname)}`}>
          <div>
            <label htmlFor="lastname">Last Name:</label>
          </div>
          <div>
            <input type="lastname" required className="form-control" name="lastname" placeholder="Lastname" value={this.state.lastname} onChange={this.handleInputField} />
          </div>
        </div>
        <div className={`field--info ${this.errorClass(this.state.errorForms.email)}`}>
          <div>
            <label htmlFor="email">E-Mail:</label>
          </div>
          <div>
            <input type="email" required className="form-control" name="email" placeholder="E-Mail" value={this.state.email} onChange={this.handleInputField} />
          </div>
        </div>
        <div className={`field--info ${this.errorClass(this.state.errorForms.password)}`}>
          <div>
            <label htmlFor="password">Password:</label>
          </div>
          <div>
          <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputField} />
          </div>
        </div>
        <button type="submit" className="button--info btn btn-success" disabled={!this.state.formValid}>Submit</button>
      </form>
    )
  }
}

export default Form;