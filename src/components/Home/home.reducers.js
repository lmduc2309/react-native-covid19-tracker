import Actions from './Home.actions';

const initialState = {
  data: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_DISH_RESPONSE:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default HomeReducer;
