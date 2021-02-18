const i = {
  Email: "",
  Senha: "",
  Authenticated: false,
};

export default function reducer(state = i, action) {
  switch (action.type) {
    case "CHANGE_EMAIL":
     state.Email =  action.Email;
     return state
     
    case "CHANGE_SENHA":
      state.Senha =  action.Senha 
      return state
      case "AUTHENTICATED":
      state.Authenticated = true
      return state
     case "LOGOUT":
        state.Authenticated= false 
        return state
        default:
      return state;
  }
}
