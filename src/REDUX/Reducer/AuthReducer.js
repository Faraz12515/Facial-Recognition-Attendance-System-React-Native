import {act} from 'react-test-renderer';
import * as Actions from './../Action/Actions';

const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  if (action.type === Actions.LOGIN) {
    return {
      ...state,
      user: {
        ...action.payload,
      },
    };
  }

  return state;
}
