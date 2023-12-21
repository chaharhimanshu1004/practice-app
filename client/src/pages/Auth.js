import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth=()=>{
    return(
        <div className="auth">
            <Login></Login>
            {/* <Register></Register> */}
        </div>
    )
};

const Login= ()=>{
    const [_, setCookies] = useCookies(["access_token"]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            const result = axios.post("http://localhost:3003/auth/login",{
                username,
                password,
            })
            setCookies("access_token", result.data.token);
            window.localStorage.setItem("userID", result.data.userID);
            navigate("/");
            

        }catch(err){
            console.error(err);
        }
        

    }
    return(
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event)=>setUsername(event.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>

    );

}