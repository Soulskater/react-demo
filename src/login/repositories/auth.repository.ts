import { ILoginData } from '../models/login-data.interface';
import { IUser } from '../models/user.interface';

export const AuthRepository = (function () {
  return {
    login: _login
  };

  function _login(loginData: ILoginData): Promise<IUser> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ email: 'test@test.com', firstName: 'Gabor', lastName: 'Meszaros' }), 5000);
    });
  }
})();