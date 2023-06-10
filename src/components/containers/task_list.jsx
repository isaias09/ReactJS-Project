import React from 'react'
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

  return (
    <div>
        <div>
            <h1>Your Tasks:</h1>
        </div>
        <TaskComponent task={defaultTask}></TaskComponent> 
    </div>
  )
}


export default TaskListComponent