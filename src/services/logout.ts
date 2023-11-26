import { IsLogged } from "../helpers/isLogged";
import { Token } from "../helpers/token";

export const logout = async () => {
    Token.set('');
    IsLogged.set(false);
}