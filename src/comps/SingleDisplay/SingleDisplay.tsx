import React from 'react';

interface Itodo {
  id: number;
  isDone: boolean;
  title: string;
  desc: string;
}

const singleDisplay = (todo) => {
  return <div>Hello from single {todo.todo.title}</div>;
};

export default singleDisplay;
