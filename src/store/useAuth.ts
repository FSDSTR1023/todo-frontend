import { create } from 'zustand';
import { IsLogged } from '../helpers/isLogged';

interface State {
    isLogged: boolean
    setIsLogged: () => void
}



export const useIsLogged = create<State>((set) => {
    return ({
        isLogged: !!IsLogged.get(),
        setIsLogged: () => {
            return set(prev => ({
                ...prev,
                isLogged: !!IsLogged.get()
            }))
        }
    });
});