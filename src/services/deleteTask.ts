import { Token } from "../helpers/token";
import fetcher from "./fetcher"

interface DataDeleteTask {
    id: string,
}

export const deleteTask = async (dataDeleteTask: DataDeleteTask) => {
    try {
        const { data } = await fetcher.delete(`/task/${dataDeleteTask.id}`, {
            headers: {
                token: Token.get(),
            }
        });
        return data;
    } catch (error) {
        console.log('deleteTask: ', (error as unknown as any).response.data.errors);
        return {
            error: true,
            errors: (error as unknown as any).response.data.errors
        }
    }
}
