import { IsLogged } from "../helpers/isLogged";
import { Token } from "../helpers/token";
import fetcher from "./fetcher"

export const getUserInfo = async () => {
    try {
        const { data } = await fetcher.get('/user', {
            headers: {
                token: Token.get()
            }
        });
        IsLogged.set(true);
        return data;
    } catch (error) {
        IsLogged.set(false);
        console.log('getUserInfo: ', (error as unknown as any).response.data);
    }
}


