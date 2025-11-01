import { NavLink, useNavigate } from "react-router";
import { AuthApi } from "~/api/auth";
import { useState } from 'react';




export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(e: React.FromEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await AuthApi.login({ username: username, password: password });
      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-5 items-center">
      <form onSubmit={handleLogin} className="outline-1 outline-gray-600 rounded-4xl flex flex-col gap-2 m-2 p-10 items-center max-w-2xl" >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <div className="text-red-400 text-center">{error}</div>}
        <label className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Username"
            disabled={loading}
            className="outline-1 outline-gray-600 rounded-4xl m-2 p-2 max-w-2xl"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label className="flex flex-col gap-1">
          <div className="relative w-full">
            <input
              type={showPassword ? "password" : "text"}
              disabled={loading}
              placeholder="Password"
              className="outline-1 outline-gray-600 rounded-4xl m-2 p-2 max-w-2xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2a -translate-y-1/2"
            >
              {showPassword ? "Show" : "Hide"}

            </button>
          </div>
        </label>

        <button
          type="submit"
          disabled={loading}
          className={`outline-1 outline-gray-600 rounded-4xl  m-2 p-2 max-w-2xl
          ${loading
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-900 hover:bg-gray-700 transition"
            }`}>
          {loading ? "Loggin in..." : "Login"}
        </button>
      </form>
      <div className="outline-1 outline-gray-600 rounded-4xl m-2 p-2 flex flex-col gap-2">
        <NavLink className="outline-1 outline-gray-600 rounded-4xl  m-2 p-2 text-center" to="/register">Register</NavLink>
        <NavLink className="outline-1 outline-gray-600 rounded-4xl  m-2 p-2 text-center" to="/reset-password">Forgot Password</NavLink>
      </div>

    </div>
  );
}
