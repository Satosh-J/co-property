import { AnyAction } from "redux"
import ActionTypes from "../constants/ActionTypes"
import { Task, Place, Activity } from "types"
import { fakeTasks, fakeVisits, fakeLinks, fakeActivities } from "fakes/dashboard"

interface AppState {
    tasks: Array<Task>,
    visits: Array<Place>,
    links: Array<Place>,
    activities: Array<Activity>
}

const INIT_STATE: AppState = {
    tasks: fakeTasks,
    visits: fakeVisits,
    links: fakeLinks,
    activities: fakeActivities
};
  
export default (state = INIT_STATE, action: AnyAction) => {
    switch (action.type) {
      default:
        return state;
    }
}
  