import React, { useState, useEffect } from 'react';
import TasksList from '../../components/TasksList';
import TodoForm from '../../components/TodoForm';

import s from './TodoPage.module.scss';

function TodoPage () {
  // const [counter, setCounter] = useState(tasks.length);

  // const getCounter = () => {
  //   setCounter(tasks.length);
  // };
  // useEffect(() => {
  //   getCounter();
  // }, [tasks.length]);

  return (
    <div className={s.containerTodoPage}>
      <div className={s.containerHeader}>
        <h3>Todos</h3>
      </div>

      <TodoForm />
      <TasksList />
    </div>
  );
}

export default TodoPage;
