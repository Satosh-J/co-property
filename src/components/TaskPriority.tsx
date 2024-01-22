import React, {useState, useCallback} from "react"
import { Task } from "types"

interface TaskPriorityProps {
    task: Task
}

export const TaskPriority = ({task} : TaskPriorityProps) => {

	return (
        <div className="co-today-task-status d-flex align-items-center">
            <div className={`co-today-task-status-dot flex-0 ${task.priority}`}></div>
            <div className={`co-today-task-status-text ${task.priority}`}>{task.priority}</div>
        </div>
	)
}

export default TaskPriority