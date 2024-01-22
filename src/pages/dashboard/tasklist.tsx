import React, {useState} from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import { Card } from "components/Base";
import TaskPriority from "components/TaskPriority";
import { date2str } from "helpers/utils"
import { Task } from "types"

interface TaskProps {
    task: Task
}

const TaskItem = ({task}: TaskProps) => (
    <div className="co-today-task-list-item">
        <div className="d-flex justify-content-between align-items-center">
            <TaskPriority task={task} />
            <div className="co-today-task-date">
                {date2str(task.due_date)}
            </div>            
        </div>
        <div className="co-today-task-list-item-title">
            {task.title}
        </div>
    </div>
)

export const TaskList = () => {
	const tasks = useAppSelector(store => store.app.tasks);
	const dispatch = useAppDispatch();	
	const history = useHistory();

	return (
        <Card className="mb-3" title="Todays task" action={() => <Link to="#">See all</Link>}>
            <div className="co-today-task-list">
            {tasks.map((task: Task, idx) => (
                <TaskItem task={task} key={`task-list-${idx}`}/>
            ))}
            </div>
        </Card>
	)
}

export default TaskList