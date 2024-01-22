import React, {useState} from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import { Card } from "components/Base";
import ActivityListItem from "components/ActivityListItem";

export const Activities = () => {
	const activities = useAppSelector(store => store.app.activities);
	const dispatch = useAppDispatch();	
	const history = useHistory();

	return (
        <Card title="Recent Activity" className="co-recent-activity-card flex-1" action={() => <Link to="#">See all</Link>}>
            {activities.map((activity, idx) => (
                <ActivityListItem activity={activity} isFirst={idx === 0} isLast={idx === (activities.length - 1)} key={`recent-activiy-${idx}`} shorted/>
            ))}
        </Card>
	)
}

export default Activities