// users reducer
export default function perfornamce(state = {}, action) {
  switch (action.type) {
    case 'SET_PERFORMANCE_DATA':
      const performance_data = {
          data: action.classes.data
      };
      return performance_data;

    // initial state
    default:
      return state;
  }
}
