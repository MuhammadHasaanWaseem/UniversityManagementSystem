import React, { useState } from "react";

export default function AuthForm() {
  const [tab, setTab] = useState("login");
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);
  const [registerPasswordVisible, setRegisterPasswordVisible] = useState(false);
  const [registerConfirmVisible, setRegisterConfirmVisible] = useState(false);
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirm, setRegisterConfirm] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerPassword !== registerConfirm) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    // Submit register data
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Submit login data
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md">
        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`w-1/2 py-3 text-center ${
              tab === "login"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-3 text-center ${
              tab === "register"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setTab("register")}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {tab === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-4 py-2 rounded"
                required
              />
              <div className="relative">
                <input
                  type="RollNumber"
                  placeholder="ROLL NUMBER"
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                type="NAME"
                placeholder="NAME"
                className="w-full border px-4 py-2 rounded"
                required
              />
              <div className="relative">
                <input
                  type="Roll Number"
                  placeholder="ROLL NUMBER"
                  className="w-full border px-4 py-2 rounded"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="Email"
                  placeholder="EMAIL"
                  className="w-full border px-4 py-2 rounded"
                  value={registerConfirm}
                  onChange={(e) => setRegisterConfirm(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}