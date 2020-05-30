const Actions = {
  GET_COVID_REQUEST: 'GET_COVID_REQUEST',
  GET_COVID_RESPONSE: 'GET_COVID_RESPONSE',

  getTotalCovidAction: () => ({
    type: Actions.GET_COVID_REQUEST
  }),
};
export default Actions;