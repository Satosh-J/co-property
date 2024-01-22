import React, {useState, useCallback} from "react"
import { Table, Button } from "components/Base"
import TaskPriority from "components/TaskPriority"
import { Task } from "types"
import { date2str } from "helpers/utils"

interface TaskListProps {
    tasks: Task[],
}

export const TaskList = ({tasks} : TaskListProps)  => {
	const renderTaskStatus = useCallback((row : Task) => (
        <Button className="secondary" icon="check" size="xs" circle tooltip="Completed the task" tooltipPlacement="top-start" />
	), [tasks] )
	const renderTaskName = useCallback((row : Task) => (
		<div>
            <TaskPriority task={row} />
            <div className="text-large text-semibold mt-2">
                {row.title}
            </div>
        </div>		
	), [tasks] )
	const renderTaskDescription = useCallback((row : Task) => (
		<div className="co-today-task-desc">{row.description}</div>		
	), [tasks] )
	const renderTaskDue = useCallback((row : Task) => (
		<div className="co-today-task-date">{date2str(row.due_date)}</div>
	), [tasks] )

	return (
		<>
            <Table 
                className="flex-1"
                column={[
                    {title: '', render: renderTaskStatus, width: 55},
                    {title: 'Task name', render: renderTaskName, minWidth: 320},
                    {title: 'Task description', render: renderTaskDescription, minWidth: 320},
                    {title: 'Due', render: renderTaskDue, width: 145},
                ]}
                data={tasks}
            />
		</>
	)
}

export default TaskList