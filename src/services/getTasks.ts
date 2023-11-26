import { Token } from "../helpers/token";
import fetcher from "./fetcher"

export const getTasks = async () => {
    try {
        const { data } = await fetcher.get('/task', {
            headers: {
                token: Token.get()
            }
        });
        return data;
    } catch (error) {
        console.log('getTasks: ', (error as unknown as any).response.data);
    }
}


