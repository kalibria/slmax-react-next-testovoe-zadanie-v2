class AuthManager {
  setToken(token:string){
    localStorage.setItem('accessToken', token);
  }
  logOut(){
    localStorage.removeItem('accessToken')
  }
}

export const auth = new AuthManager();
