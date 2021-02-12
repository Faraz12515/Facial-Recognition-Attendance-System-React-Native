import {act} from 'react-test-renderer';
import * as Actions from './../Action/Actions';

const initialState = {
  user: null,
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

  if (action.type === Actions.UPDATE_USER) {
    return {
      ...state,
      user: {
        ...action.payload,
      },
    };
  }

  return state;
}
