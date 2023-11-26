import { Token } from "../helpers/token";
import fetcher from "./fetcher"

interface DataEditTask {
    id: string,
    status: string
}

export const editTask = async (dataEditTask: DataEditTask) => {
    try {
        const { data } = await fetcher.put(`/task/${dataEditTask.id}`,
            { status: dataEditTask.status },
            {
                headers: {
                    token: Token.get(),
                }
            });
        return data;
    } catch (error) {
        console.log('editTask: ', (error as unknown as any).response.data.errors);
        return {
            error: true,
            errors: (error as unknown as any).response.data.errors
        }
    }
}
