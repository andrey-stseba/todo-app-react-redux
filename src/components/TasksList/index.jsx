import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import s from './TackList.module.scss';
import { deleteTask, updateTask } from '../../actions';
import { connect } from 'react-redux';

function TasksList (props) {
  const { tasks, deleteTaskAction, updateTaskAction } = props;

  const mapTask = ({ id, body, isDone }, index) => {
    const changeDone = () => {
      updateTaskAction({ id: id, isDone: !isDone });
    };

    const deleteTask = () => {
      deleteTaskAction(id);
    };

    return (
      <li key={id} className={s.itemContainer}>
        <input type='checkbox' checked={isDone} onClick={changeDone} />
        <span>{body}</span>
        <button onClick={deleteTask}>
          <DeleteOutlineIcon />
        </button>
      </li>
    );
  };
  return (
    <div>
      <ul className={s.itemsContainer}>{tasks.map(mapTask)}</ul>
    </div>
  );
}

const mapStateToProps = state => state.task;
const mapDispatchToProps = dispatch => {
  return {
    deleteTaskAction: id => {
      dispatch(deleteTask(id));
    },
    updateTaskAction: newTaskInfo => {
      dispatch(updateTask(newTaskInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
