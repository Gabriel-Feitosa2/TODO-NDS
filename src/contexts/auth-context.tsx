import { createContext } from 'react';

import { Account } from './jwt/types';

type Props = {
  getCurrentAccount: () => Account | undefined;
};

export const AuthContext = createContext({} as Props);
