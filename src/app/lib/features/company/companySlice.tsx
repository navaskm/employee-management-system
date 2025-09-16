import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  email: string;
  password: string;
};

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

type Employee = {
  id: number;
  firstName: string;
  email: string;
  password: string;
  taskCount: TaskCount;
  tasks: Task[];
};

export const initialState = {
  employees : [
  {
    id: 1,
    firstName: "Alice",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page with Tailwind CSS.",
        taskDate: "2025-06-25",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve the overlapping issue in mobile view.",
        taskDate: "2025-06-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Design a PPT for upcoming team meeting.",
        taskDate: "2025-06-18",
        category: "Management",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Review UI Design",
        taskDescription: "Check new UI components for the dashboard and give feedback.",
        taskDate: "2025-07-04",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team Sync Preparation",
        taskDescription: "Prepare talking points for the Monday sync meeting.",
        taskDate: "2025-07-05",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Bob",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        taskTitle: "Build API Endpoint",
        taskDescription: "Create REST endpoint for user authentication.",
        taskDate: "2025-06-15",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "UI Audit",
        taskDescription: "Check for UI inconsistencies across pages.",
        taskDate: "2025-06-26",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Deploy Project",
        taskDescription: "Push final version to production server.",
        taskDate: "2025-06-24",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Create Style Guide",
        taskDescription: "Draft a brand style guide for the design team.",
        taskDate: "2025-07-04",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Security Testing",
        taskDescription: "Test application for vulnerabilities using OWASP ZAP.",
        taskDate: "2025-07-05",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Charlie",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Write Test Cases",
        taskDescription: "Unit test all major components.",
        taskDate: "2025-06-20",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Docs",
        taskDescription: "Update readme and API documentation.",
        taskDate: "2025-06-19",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Fix Deployment Script",
        taskDescription: "Resolve broken build pipeline error.",
        taskDate: "2025-06-23",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Discuss new feature roadmap.",
        taskDate: "2025-06-27",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Database Optimization",
        taskDescription: "Refactor queries for better performance.",
        taskDate: "2025-07-03",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Customer Feedback Analysis",
        taskDescription: "Review user feedback to plan next sprint.",
        taskDate: "2025-07-04",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Diana",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Design Landing Page",
        taskDescription: "Create layout and banner design for homepage.",
        taskDate: "2025-06-22",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve console warnings in console.",
        taskDate: "2025-06-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Accessibility Audit",
        taskDescription: "Ensure all pages meet WCAG standards.",
        taskDate: "2025-06-25",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Improve Page Speed",
        taskDescription: "Optimize assets and lazy load images.",
        taskDate: "2025-07-03",
        category: "Performance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review pull requests for latest features.",
        taskDate: "2025-07-04",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Ethan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Backend Refactor",
        taskDescription: "Refactor outdated Express.js routes.",
        taskDate: "2025-06-19",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Setup Monitoring",
        taskDescription: "Integrate error tracking tool.",
        taskDate: "2025-06-21",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Research OAuth",
        taskDescription: "Explore OAuth2 flow for authentication.",
        taskDate: "2025-06-23",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Create Wireframes",
        taskDescription: "Mock up UI wireframes for settings page.",
        taskDate: "2025-06-26",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Mobile Responsiveness",
        taskDescription: "Resolve issues on small devices.",
        taskDate: "2025-06-25",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Database Migration",
        taskDescription: "Move from MongoDB to PostgreSQL.",
        taskDate: "2025-07-03",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Security Review",
        taskDescription: "Review app security vulnerabilities.",
        taskDate: "2025-07-04",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
  ],

  admin : [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ],

  user : {
    email : '',
    password: '',
  },

  wrongEmployee : false,
};

const companySlice = createSlice({
  name : 'Employees',
  initialState,
  reducers:{

    hydrateUser(state, action: PayloadAction<User>){
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
    // login and logout
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      // set in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("loginLogOut", JSON.stringify(state.user));
      }

    },

    hydrateAddTaskToEmployee(state, action: PayloadAction<Employee[]>){
      state.employees = action.payload;
    },
    // add task to an employee
    addTaskToEmployee(state, action) {
      const { firstName, task, id } = action.payload;

      if(id){
        const employee = state.employees.find(e => e.id === id);
        if (employee) {
          taskAssignToEmployee(employee)
        }
      }else{
        const employee = state.employees.find(e => e.firstName === firstName);
        if (employee) {
          taskAssignToEmployee(employee)
        }
      };

      function taskAssignToEmployee(employee:Employee) {
        employee.tasks.push(task);
        employee.taskCount.newTask ++;

        // set in localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("employeesData", JSON.stringify(state.employees));
        }
      };
      
    },

    // admin wrong write to employee name
    removeWrongEmployee(state){
      state.wrongEmployee = false;
    },

    // handle accept button click
    handleAcceptButton(state,action){
      const heading = action.payload;
      for(const employee of state.employees){
        // Find the matching task
        const matchedTask = employee.tasks.find(task => task.taskTitle === heading);

        if (matchedTask) {
          matchedTask.active = true;
          matchedTask.newTask = false;
          employee.taskCount.active ++;
          employee.taskCount.newTask --;

          // set in localStorage
          if (typeof window !== "undefined") {
            localStorage.setItem("employeesData", JSON.stringify(state.employees));
          }
          break;
        }
      }
    },

    // handle complete button click
    handleMarkAsCompletedButton(state,action){
      const heading = action.payload;
      for(const employee of state.employees){
        // Find the matching task
        const matchedTask = employee.tasks.find(task => task.taskTitle === heading);

        if (matchedTask) {
          matchedTask.active = false;
          matchedTask.completed = true;
          employee.taskCount.active --;
          employee.taskCount.completed ++;

          // set in localStorage
          if (typeof window !== "undefined") {
            localStorage.setItem("employeesData", JSON.stringify(state.employees));
          }
          break;
        }
      }
    },

    // handle failed button click
    handleMarkAsFailedButton(state,action){
      const heading = action.payload;
      for(const employee of state.employees){
        // Find the matching task
        const matchedTask = employee.tasks.find(task => task.taskTitle === heading);

        if (matchedTask) {
          matchedTask.active = false;
          matchedTask.failed = true;
          employee.taskCount.active --;
          employee.taskCount.failed ++;

          // set in localStorage
          if (typeof window !== "undefined") {
            localStorage.setItem("employeesData", JSON.stringify(state.employees));
          }
          break;
        }
      }
    }

  }
});

export default companySlice.reducer;
export const {
  setUser,
  hydrateUser,
  addTaskToEmployee,
  hydrateAddTaskToEmployee,
  removeWrongEmployee,
  handleAcceptButton,
  handleMarkAsCompletedButton,
  handleMarkAsFailedButton,
} = companySlice.actions;