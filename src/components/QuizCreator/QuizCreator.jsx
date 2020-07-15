import React, { Component } from 'react';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import { createControl } from '../../lib/form/formFramework';
import { Select } from '../../UI/Select/Select';

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
    rightAnswerId: 1,
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
          {index === 0 ? <hr className='mb-2 border-orange-200' /> : null}
        </React.Fragment>
      );
    });
  }

  selectChangeHandler = (event) => {
    this.setState({rightAnswerId: parseInt(event.target.value, 10)});
  };

  render() {
    const select = (
      <Select
        label='Выберите правильный ответ'
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );

    return (
      <section className='Section QuizCreator'>
        <div>
          <h1 className='text-white'>Создание теста</h1>

          <form onSubmit={this.submitHandler} className='Form bg-orange-100'>
            {this.renderControls()}

            {select}
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
