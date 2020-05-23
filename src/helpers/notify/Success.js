import {showMessage} from 'react-native-flash-message';

const notySucess = mess => {
  return showMessage({
    message: mess,
    type: 'success',
    autoHide: true,
    duration: 3000,
  });
};

export default notySucess;
