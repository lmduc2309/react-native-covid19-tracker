import {showMessage} from 'react-native-flash-message';

const notyError = mess => {
  return showMessage({
    message: mess,
    type: 'danger',
    autoHide: true,
    duration: 3000,
  });
};

export default notyError;
