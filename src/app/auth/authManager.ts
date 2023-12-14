class AuthManager {
  setToken(token:string){
    localStorage.setItem('accessToken', token);
  }
}

export const auth = new AuthManager();
