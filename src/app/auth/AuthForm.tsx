const AuthForm = () =>{
  return (
    <form>
      <fieldset>
        <input type='text' id='name' name='name' required minLength="4"
               maxLength="8" placeholder="Enter name" />
        <label htmlFor='name'>Min 4 max 8 characters</label>
      </fieldset>

      <fieldset>
        <input type='password' id='password' name='password' required
               minLength="4" maxLength="8" placeholder="Enter password" />
        <label htmlFor='password'>Min 4 max 8 characters</label>
      </fieldset>

    </form>
  )
}
export default AuthForm;
