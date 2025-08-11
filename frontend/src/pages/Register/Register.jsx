// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { use } from 'react';
export default function Register() {
    const navigate = useNavigate();

    const createUser = async (event) => {
    try{
      const response = await axios.post('http://localhost:5000/api/register',{
        username: event.get("username"),
        email: event.get("email"),
        date_of_birth: event.get("DOB"),
        password: event.get("password"),
      })
      console.log(response.data)
       navigate('/login'); 
    }catch (error){
      console.error("Error creating user:", error);
    }
  }
    
    function register(event){
        const userPassword = event.get("password");
        const confirmPassword = event.get("confirm-password");

if (userPassword !== confirmPassword) {
    setTimeout(() => {
    }, 3000);

    } else {
 
        navigate('/login'); 
    }
}

  return (
    <>
      <section className='flex justify-center items-center h-screen'>
        <form action={createUser}  className="">
          
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
            <legend className="fieldset-legend">Register</legend>

            <label className="label">Username</label>
            <input type="text" className="input" name='username' placeholder="username" required/>

            <label className="label">Email</label>
            <input type="email" className="input" name='email' placeholder="Email" required/>

            <label className="label">Date of birth</label>
            <input type="date" className="input" name='DOB'  />

            <label className="label">Password</label>
            <input type="password" className="input" name='password' placeholder="Password" required/>

            <label className="label" htmlFor='confirm-password' name='lblPassword' >Confirm Password</label>
            <input type="password" className="input" name='confirm-password' placeholder="Confirm Password" required/>

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        <a className='flex justify-center' href="/login">Already have an account? <span className='underline'>Login here</span></a>
        </form>
      </section>
    </>
  );
}
