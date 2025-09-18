export type LoginProps = {
  handleLogin: (email: string, password: string) => void;
};

// header page
export type LoggedInEmployee = {
  email: string;
  password: string;
};