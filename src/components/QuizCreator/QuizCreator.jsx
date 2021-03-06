import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import {
  createControl,
  validate,
  validateForm,
} from '../../lib/form/formFramework';
import { Select } from '../../UI/Select/Select';

import {
  finishCreateQuiz,
  createQuizQuestion,
} from '../../store/actions/create';

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
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false,
      formControls: createFormControls(),
      rightAnswerId: 1,
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
  };

  addQustionHandler = (event) => {
    event.preventDefault();

    const {
      question,
      option1,
      option2,
      option3,
      option4,
    } = this.state.formControls;

    const questionItem = {
      question: question.value,
      id: this.props.quiz.length + 1,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id },
      ],
    };

    this.props.createQuizQuestion(questionItem);

    this.setState({
      isFormValid: false,
      formControls: createFormControls(),
      rightAnswerId: 1,
    });
  };

  createQuizHandler = (event) => {
    event.preventDefault();

      // axios.post('quizes.json', this.state.quiz);

      this.setState({
        isFormValid: false,
        formControls: createFormControls(),
        rightAnswerId: 1,
      });

      this.props.finishCreateQuiz();


    // axios
    //   .post(
    //     'https://react-quiz-36466.firebaseio.com/quizes.json',
    //     this.state.quiz
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // console.log(this.state.quiz);
  };

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

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
    this.setState({ rightAnswerId: parseInt(event.target.value, 10) });
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
            <Button
              type='primary'
              onClick={this.addQustionHandler}
              disabled={!this.state.isFormValid}
            >
              Добавить вопрос
            </Button>
            <Button
              type='success'
              onClick={this.createQuizHandler}
              disabled={!this.props.quiz.length === 0}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  quiz: state.create.quiz,
});

const mapDispatchToProps = {
  createQuizQuestion: (item) => createQuizQuestion(item),
  finishCreateQuiz: () => finishCreateQuiz(),
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);
