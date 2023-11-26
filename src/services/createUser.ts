import { IsLogged } from "../helpers/isLogged";
import { Token } from "../helpers/token";
import fetcher from "./fetcher"

interface DataCreateUser {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export const createUser = async (dataCreateUser: DataCreateUser) => {
    try {
        const { data } = await fetcher.post('/user', dataCreateUser);
        Token.set(data.token);
        IsLogged.set(true);
        return data;
    } catch (error) {
        console.log('createUser: ', (error as unknown as any).response.data.errors);
        return {
            error: true,
            errors: (error as unknown as any).response.data.errors
        }
    }
}
