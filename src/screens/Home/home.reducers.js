import Actions from './Home.actions';
// import { filter, map } from 'lodash';

const initialState = {
  data: {}
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_COVID_RESPONSE:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default HomeReducer;
