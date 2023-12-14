class Auth {
  setToken(token:string){
    localStorage.setItem('accessToken', token)
  }
}

export const auth = new Auth();
