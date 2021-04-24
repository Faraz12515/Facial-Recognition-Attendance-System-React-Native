import * as Actions from './../Action/Actions';

const initialState = {
  iamge: null,
};

export default function (state = initialState, action) {
  const {paylaod, type} = action;
  if (type === Actions.SET_IMAGE) {
    return {
      ...state,
      image: paylaod,
    };
  }

  return state;
}
