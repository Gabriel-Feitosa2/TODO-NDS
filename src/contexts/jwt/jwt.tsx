import { DecodeToken } from './cryptography';

import jwt_decode from 'jwt-decode';

export const decodeToken: DecodeToken = ({ token }) => {
  const decodedToken = jwt_decode(token);
  return decodedToken;
};

export * as Cryptography from './jwt';
