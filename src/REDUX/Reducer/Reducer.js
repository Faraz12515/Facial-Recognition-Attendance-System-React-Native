import * as Action from './../Action/Actions';
const initialState = {
  program: '',
  year: '',
  semester: '',
  section: '',
  course: '',
  class_type: '',
};

export default function (state = initialState, action) {
  if (action.type === Action.PROGRAM) {
    return {
      ...state,
      program: action.payload,
    };
  }

  if (action.type === Action.YEAR) {
    return {
      ...state,
      year: action.payload,
    };
  }

  if (action.type === Action.SEMESTER) {
    return {
      ...state,
      semester: action.payload,
    };
  }
  if (action.type === Action.SECTION) {
    return {
      ...state,
      section: action.payload,
    };
  }
  if (action.type === Action.COURSE) {
    return {
      ...state,
      course: action.payload,
    };
  }
  if (action.type === Action.CLASS_TYPE) {
    return {
      ...state,
      class_type: action.payload,
    };
  }

  return state;
}
