import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../molecules/MoleculesButton";
import { InputFields } from "../../molecules/MoleculesForm";
import { login } from "../../../services/auth";
const AuthLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [e, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!username || !password) {
      console.log('username dan password tidak boleh kosong')
    }
    try {
      await login(username, password);
      navigate('/cms/dashboard')
    } catch (e) {
      setError('Login Gagal, Periksa Kembali Username dan Passwordnya')
      console.log(e)
    }
  }
  return (
    <>
      <div className="bg-[#F1F0E9] sm:mb-20 rounded-xl">
        <div className="text-center py-5">
          <h1 className="font-semibold text-3xl"> Sign In</h1>
          <i>Welcome, To Home Hadi</i>
          {e && <div className="error">{e}</div>}
        </div>
        <div className=" py-5 mx-5">
          <form className="mx-5" onSubmit={handleLogin}>
            <InputFields
              label="Username"
              placeholder="Your UserName"
              isCurrent
              type="text"
              className={"my-3 focus:outline-none"}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputFields
              label="Password"
              placeholder="Your Password"
              isCurrent
              type="password"
              className={"my-3 focus:outline-none"}
              onChange={(e) => setPassword(e.target.value)}

            />
            <div className="flex justify-center py-2">
              <Button label="Sign In" isCurrent />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;
