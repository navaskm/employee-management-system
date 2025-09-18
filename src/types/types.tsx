export type LoginProps = {
  handleLogin: (email: string, password: string) => void;
};

// user type
export type LoggedInEmployee = {
  email: string;
  password: string;
};


// employee page types

type Task = {
  taskTitle: string;
  taskDescription: string;
  taskDate: string;
  category: string;
  active: boolean;
  newTask: boolean;
  completed: boolean;
  failed: boolean;
};

type TaskCount = {
  active: number;
  newTask: number;
  completed: number;
  failed: number;
};

export type Employee = {
  id: number;
  firstName: string;
  email: string;
  password: string;
  taskCount: TaskCount;
  tasks: Task[];
};