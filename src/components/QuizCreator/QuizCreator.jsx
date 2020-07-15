import React, { Component } from 'react';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import { createControl } from '../../lib/form/formFramework';

function createOptionControl(number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: 'Значение не может быть пустым',
      id: number,
    },

    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Вопрос не может быть пустым',
    }),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}

class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createFormControls(),
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  addQustionHandler = () => {};

  createQuizHandler = () => {};

  changeHandler = (value, controlName) => {};

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <React.Fragment key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr className='mb-2' /> : null}
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <section className='Section QuizCreator'>
        <div>
          <h1 className='text-white'>Создание теста</h1>

          <form onSubmit={this.submitHandler} className='Form bg-orange-100'>
            {this.renderControls()}

            <select></select>
            <Button type='primary' onClick={this.addQustionHandler}>
              Добавить вопрос
            </Button>
            <Button type='success' onClick={this.createQuizHandler}>
              Создать тест
            </Button>
          </form>
        </div>
      </section>
    );
  }
}

export { QuizCreator };
