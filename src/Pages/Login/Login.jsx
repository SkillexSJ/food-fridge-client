import React from "react";
import { NavLink } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login functionality coming soon!");
  };
  const handleGoogleLogin = () => {
    alert("Google Login functionality coming soon!");
  };

  return (
    <div className="flex min-h-full flex-col justify-center bg-gray-50 px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4">
            <button
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
            >
              <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L19.5403 3.61C17.4803 1.69 14.9303 0.5 12.0003 0.5C7.49526 0.5 3.54526 3.235 1.58026 7.035L4.85526 9.485C5.71026 6.815 8.59526 4.75 12.0003 4.75Z"
                  fill="#EA4335"
                ></path>
                <path
                  d="M23.49 12.275C23.49 11.49 23.415 10.73 23.28 9.99H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.355 20.555C21.585 18.52 23.015 15.64 23.49 12.275Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M5.71026 14.51C5.52026 13.99 5.43026 13.45 5.43026 12.875C5.43026 12.3 5.52026 11.76 5.71026 11.24L2.43526 8.795C1.46026 10.64 0.915258 12.83 0.915258 15.125C0.915258 17.42 1.46026 19.61 2.43526 21.455L5.71026 18.995C5.52026 18.47 5.43026 17.93 5.43026 17.355C5.43026 16.78 5.52026 16.24 5.71026 15.66L5.71026 14.51Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12.0003 24C14.9303 24 17.4803 22.89 19.5403 20.95L16.2653 18.5C15.0153 19.36 13.6103 19.85 12.0003 19.85C8.62026 19.85 5.73526 17.79 4.85026 15.12L1.57526 17.57C3.54026 21.36 7.49526 24 12.0003 24Z"
                  fill="#34A853"
                ></path>
              </svg>
              <span className="text-sm font-semibold leading-6">Google</span>
            </button>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <NavLink to="/auth/register">
            <button className="font-semibold leading-6 text-teal-600 hover:text-teal-500">
              Register now
            </button>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
