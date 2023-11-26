import { IsLogged } from "../helpers/isLogged";
import { Token } from "../helpers/token";
import fetcher from "./fetcher"

interface DataLogin {
    email: string;
    password: string;
}

export const loginFetcher = async (dataLogin: DataLogin) => {
    try {
        const { data } = await fetcher.post('/user/login', dataLogin);
        Token.set(data.token);
        IsLogged.set(true);
        return data;
    } catch (error) {
        console.log('loginFetcher: ', (error as unknown as any).response.data)
    }
}


