import React, { Component } from "react";
import { ActiveQuiz } from "./ActiveQuiz/ActiveQuiz";
import { state } from "../../data/data";

export const Quiz = () => {

  const onAnswerClickHandler = (answerId) => {
    console.log('answerId>>', answerId)
    
}

  return (
    <div
      className="flex justify-center flex-col flex-grow p-24"
      style={{ width: "700px" }}
    >
      <h1 className="text-white">Ответьте на все вопросы</h1>
      <div className="w-full">
        <ActiveQuiz
          answers={state.quiz[state.activeQuestion].answers}
          id={state.quiz[state.activeQuestion].id}
          question={state.quiz[state.activeQuestion].question}
          onAnswerClick={onAnswerClickHandler}
          quizLength={state.quiz.length}
          answerNumber={state.activeQuestion+1}
        />
      </div>
    </div>
  );
};
