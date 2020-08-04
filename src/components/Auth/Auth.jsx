import React, { Component } from 'react';
import { connect } from 'react-redux';

import is from 'is_js';

import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';

import { auth } from '../../store/actions/auth';
class Auth extends Component {
  constructor(props) {
<<<<<<< HEAD
    super(props);

=======
    super(props)
  
>>>>>>> f631dd952dcd93e2e84701f8e253ec0e227e0ee0
    this.state = {
      formControls: {
        email: {
          value: '',
          type: 'email',
          label: 'Э-почта',
          errorMessage: 'Введите корректный адрес э-почты',
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true,
          },
        },
        password: {
          value: '',
          type: 'password',
          label: 'Пароль',
          errorMessage: 'Введите корректный пароль',
          valid: false,
          touched: false,
          validation: {
            required: true,
            // password: true,
            minLength: 6,
          },
        },
      },
    };
  }

  loginHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    );
  };
  
  registerHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      false
    );
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.trim().length >= validation.minLength && isValid;
      // isValid = value.length >= validation.minLength.trim() && isValid;
    }

    return isValid;
  };

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({ formControls, isFormValid });
  };

  renderInputs = () =>
    Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(event) => this.onChangeHandler(event, controlName)}
        />
      );
    });

  render() {
    return (
      <section className='Section Auth'>
        <div className='w-full max-w-xl py-0 px-5'>
          <h1 className='text-white align-center'>Авторизация</h1>
          <form onSubmit={this.submitHandler} className='Form bg-indigo-100'>
            {this.renderInputs()}

            <Button
              type='success'
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Войти
            </Button>
            <Button
              type='primary'
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = {
  auth: (email, password, isLogin) => auth(email, password, isLogin),
};

export default connect(null, mapDispatchToProps)(Auth);
