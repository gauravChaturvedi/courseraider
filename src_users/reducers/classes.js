// users reducer
export default function classes(state = {}, action) {
  switch (action.type) {
    case 'CLASS_LIST':
      return action.classes;

    case 'SET_SELECTED_CLASS':
      const classId = {
          id: action.classes.class_Id
      };
      return classId;
    // initial state
    default:
      return state;
  }
}
