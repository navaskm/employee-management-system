"use client";
import { useState } from "react";

type LoginProps = {
  handleLogin: (email: string, password: string) => void;
};

function Login({handleLogin}:LoginProps) {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitHandler = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    handleLogin(email,password);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-100 to-emerald-300 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-8">Welcome Back</h2>
        
        <form 
          onSubmit={submitHandler}
          className="flex flex-col gap-6"
        >
          <input 
            type="email" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email} 
            required 
            placeholder="Enter your email"
            className="w-full px-5 py-3 border border-emerald-500 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-800 placeholder-gray-400"
          />
          
          <input 
            type="password" 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            required
            placeholder="Enter your password"
            className="w-full px-5 py-3 border border-emerald-500 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-800 placeholder-gray-400"
          />
          
          <button 
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account? <a href="#" className="text-emerald-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;