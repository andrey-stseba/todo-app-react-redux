import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TasksList from '../../components/TasksList';
import TodoForm from '../../components/TodoForm';

import s from './TodoPage.module.scss';

function TodoPage (props) {
  const { length } = props;

  return (
    <div className={s.containerTodoPage}>
      <div className={s.containerHeader}>
        <h3>Todos ({length})</h3>
      </div>

      <TodoForm />
      <TasksList />
    </div>
  );
}

const mapStateToProps = state => ({
  length: state.task.tasks.length,
});

export default connect(mapStateToProps, null)(TodoPage);
