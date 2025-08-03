import axios from "axios";
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();
    async function loginUser(event) {
      try{
        const response = await axios.post('http://localhost:5000/api/login', {
          email: event.get("email"),
          password: event.get("password"),
        }
      )
      console.log(response.data);
      localStorage.setItem('token', response.data.userToken)
      localStorage.setItem('email', event.get("email"));
      
        navigate('/dashboard'); 
      }catch(error) {
        console.error("Error logging in:", error);
      }
    }
    return (
        <>
       
      <section className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Lets find out just how much we can manage our finances
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form action={loginUser} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input"name="password" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  </div>
</section>
        </>
    )
}