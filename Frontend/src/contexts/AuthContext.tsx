import React, { createContext, useContext, useState } from 'react';
import users from '../mock/users.json';
import { UserType } from '../types/user';

type AuthContextProps = {
  user: UserType;
  LoginUser: (entry_email: string, entry_password: string) => boolean;
};

const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, SetUser] = useState<UserType>({} as UserType);

  const LoginUser = (entry_email: string, entry_password: string) => {
    const loggedUser = users.admins.find(
      (user) => user.email == entry_email && user.password == entry_password
    );

    if (loggedUser) {
      SetUser(loggedUser);
      return true;
    }

    return false;
  };

  return (
    <AuthContext.Provider value={{ user, LoginUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthentication = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error('Auth context must be used within AuthProvider');
  return context;
};
