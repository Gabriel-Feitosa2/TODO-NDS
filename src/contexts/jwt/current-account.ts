import { Account } from './types';
import { Cryptography } from './jwt';
import { LocalStorage } from './local-storage';

export const getCurrentAccount = (): Account | undefined => {
  const accessToken = LocalStorage.get({ key: 'accessToken' });
  if (accessToken) {
    const decodedToken = Cryptography.decodeToken({ token: accessToken });

    const dateNow = new Date();
    const expirationToken = decodedToken.exp * 1000;

    if (expirationToken < dateNow.getTime()) {
      LocalStorage.remove({ key: 'accessToken' });
      return;
    }

    return decodedToken as Account;
  }
};
