class AuthManager {
  setToken(token:string){
    localStorage.setItem('accessToken', token);
  }
  logOut(){
    localStorage.removeItem('accessToken')
  }
  isAuth(){
    if(localStorage.getItem('accessToken')){
      return true
    }else {
      return false
    }
  }
}

export const auth = new AuthManager();
