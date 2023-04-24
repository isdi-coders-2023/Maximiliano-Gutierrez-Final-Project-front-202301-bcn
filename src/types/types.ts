export interface User {
  email: string;
  id: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}
