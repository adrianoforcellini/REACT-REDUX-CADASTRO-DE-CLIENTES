const INITIAL_STATE = {
  Email: "",
  Senha: "",
  Authenticated: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return { ...state, Email: action.Email };
    case "CHANGE_SENHA":
      return { ...state, Senha: action.Senha };
    case "AUTHENTICATED":
      return { ...state, Authenticated: true };
      case "LOGOUT":
      return { ...state, Authenticated: false };
    default:
      return state;
  }
}
