'use client'
import styles from '@/app/auth/auth.module.css'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "@/app/auth/authManager";

const AuthForm = () =>{
  const router = useRouter();

  const [name, setName] =useState('');
  const [password, setPassword] = useState('');

  const handleChangeSetName =(e) =>{
    setName(e.target.value)
  };
  const handleChangeSetPassword =(e) =>{
    setPassword(e.target.value)
  }


  const handleSubmit =(event) =>{
    event.preventDefault();
    auth.setToken(name + password);
    router.push('/photos')
  }

  return (
    <div className={styles.authWrapper}>
      <h2 className={'text-xl font-bold italic text-center mb-6'}>Log in</h2>
      <form className={'w-44 my-0 mx-auto '} onSubmit={handleSubmit}>
        <fieldset className={'mb-5'}>
          <input type='text' id='name' name='name' required minLength="4"
                 maxLength="8" placeholder="Enter name" value={name} onChange={handleChangeSetName}/>
          <label htmlFor='name' className={'text-xs'}>Min 4 max 8 characters</label>
        </fieldset>

        <fieldset>
          <input type='password' id='password' name='password' required
                 minLength="4" maxLength="8" placeholder="Enter password" value={password} onChange={handleChangeSetPassword}/>
          <label htmlFor='password' className={'text-xs'}>Min 4 max 8 characters</label>
        </fieldset>


          <button className={'border-2 border-blue-300 w-full mt-6 p-1.5 px-2  hover:bg-blue-50'} >Enter</button>

      </form>
    </div>

  )
}
export default AuthForm;
