import styles from '@/app/auth/auth.module.css'

const AuthForm = () =>{
  return (
    <div className={styles.authWrapper}>
      <form className={'w-44 m-auto '}>
        <fieldset className={'mb-5'}>
          <input type='text' id='name' name='name' required minLength="4"
                 maxLength="8" placeholder="Enter name" />
          <label htmlFor='name' className={'text-xs'}>Min 4 max 8 characters</label>
        </fieldset>

        <fieldset>
          <input type='password' id='password' name='password' required
                 minLength="4" maxLength="8" placeholder="Enter password" />
          <label htmlFor='password' className={'text-xs'}>Min 4 max 8 characters</label>
        </fieldset>

      </form>
    </div>

  )
}
export default AuthForm;
