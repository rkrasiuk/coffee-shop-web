export default (state = [], action) => {
  switch(action.type) {
    case 'LOAD_SECTIONS_SUCCESS':
      return action;
    default:
      return state;
  }
};