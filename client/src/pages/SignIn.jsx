import { set } from 'mongoose';
import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        setLoading(true);
        const res= await fetch('/api/auth/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        if(data.success==false){
          setLoading(false); 
          setError(data.message);
          return;
        }
        setLoading(false);
        setError(null);
        navigate('/ ');
    }
    catch(err){
      setLoading(false);
      setError(err.message);
    } 
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-8'>Sign In</h1>
      <form  className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="email" placeholder='email' className='p-3 border rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password' className='p-3 border rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading? 'Loading...': 'Sign In'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-center'>Do not have an account? 
        <Link to={'/sign-up'}>
          <span className='text-blue-700 '>Sign up</span>
        </Link>
        </p>
      </div>
      {error && <p className='text-red-500 text-center'>{error}</p>}
    </div>
  )
}

export default SignIn
