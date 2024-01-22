
import { time2str, truncate } from "helpers/utils"
import { Activity } from "types"
import Icon from "components/Icon";

interface ActivityProps {
    activity: Activity,
    isFirst?: boolean,
    isLast?: boolean,
    shorted?: boolean
}

const ActivityListItem = ({activity, isFirst, isLast, shorted}: ActivityProps) => (
    <div className="co-recent-act-item d-flex">
        <div className="co-recent-act-item-left d-flex flex-column justify-content-center align-items-center">
            <div className={`co-recent-act-item-line flex-1 ${isFirst ? 'hidden' : ''}`}></div>
            <div className="co-recent-act-item-icon flex-0 d-flex align-items-center justify-content-center">
                <Icon className="co-recent-act-item-icon-img" icon={activity.type} size="md" />
            </div>
            <div className={`co-recent-act-item-line flex-1 ${isLast ? 'hidden' : ''}`}></div>
        </div>
        <div className="co-recent-act-item-right flex-1">
            <div className="co-recent-act-item-title ">{activity.title}</div>
            {shorted ? (
                <div>{time2str(activity.date)}</div>
            ) : (
                <div>{truncate(activity.description, 30)}</div>
            )}            
        </div>
        {!shorted &&
        <div className="co-recent-act-item-right text-small text-desc">
            {time2str(activity.date)}
        </div>
        }
    </div>
)

export default ActivityListItem