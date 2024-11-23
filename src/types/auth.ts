export interface User {
  email: string;
  id?: string;
  name?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
