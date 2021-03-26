import { RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions"
import { RECEIVE_STEPS } from "../actions/step_actions"




const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_STEP:
      nextState[action.step.id] = action.step;
      return nextState;
    case RECEIVE_STEPS:
      let obj = {};
      action.steps.forEach((step) => {
        obj[step.id] = step;
      })
      return obj;
    case REMOVE_STEP:
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }

}

export default stepsReducer;