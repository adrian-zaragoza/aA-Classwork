export const RECEIVE_STEP = 'RECEIVE_STEP';
export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const REMOVE_STEP = 'REMOVE_STEP';

export const receiveStep = (stepPayload) => {
  return {
    type: RECEIVE_STEP,
    step: stepPayload
  }
}

export const removeStep = (stepPayload) => {
  return {
    type: REMOVE_STEP,
    step: stepPayload
  };
};

export const receiveSteps = (stepsPayload) => { //action creators
  return {
    type: RECEIVE_STEPS,
    steps: stepsPayload
  }
}