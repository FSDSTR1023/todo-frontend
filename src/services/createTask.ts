import { Token } from "../helpers/token";
import fetcher from "./fetcher"

interface DataCreateTask {

    dateEnd?: string,
    dateStart?: string,
    description: string,
    title: string,
}

export const createTask = async (dataCreateTask: DataCreateTask) => {
    try {
        const { data } = await fetcher.post('/task', dataCreateTask, {
            headers: {
                token: Token.get(),
            }
        });
        return data;
    } catch (error) {
        console.log('createTask: ', (error as unknown as any).response.data.errors);
        return {
            error: true,
            errors: (error as unknown as any).response.data.errors
        }
    }
}
