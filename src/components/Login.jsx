import React from "react";

const Login = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center">Tizimga Kirish</h2>
      <form className="mt-6">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-primary w-full mb-4"
        />
        <input
          type="password"
          placeholder="Parol"
          className="input input-bordered input-primary w-full mb-6"
        />
        <button type="submit" className="btn btn-primary w-full">
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;
