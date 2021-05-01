import * as Actions from './../Action/Actions';

const initialState = {
  Attendance: null,
};

export default function (state = initialState, action) {
  const {paylaod, type} = action;
  if (type === Actions.SET_IMAGE) {
    return {
      ...state,
      Attendance: paylaod,
    };
  }

  return state;
}
