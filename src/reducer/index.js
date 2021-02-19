const INITIAL_STATE = {
  Email: "",
  Senha: "",
  Authenticated: false,
  Nome: "",
  Idade: "",
  EmailDoCliente: "",
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
    case "INPUT_NOME":
      return { ...state, Nome: action.Nome };
    case "INPUT_IDADE":
      return { ...state, Idade: action.Idade };
    case "INPUT_EMAIL":
      return { ...state, EmailDoCliente: action.EmailDoCliente };
    default:
      return state;
  }
}
