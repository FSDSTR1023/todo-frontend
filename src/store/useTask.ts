import { create } from 'zustand';

interface State {
    changed: boolean
    somethingChanged: () => void
}

export const useGlobalChange = create<State>((set) => {
    return ({
        changed: false,
        somethingChanged: () => {
            set(prev => ({
                changed: !prev.changed
            }))
        }
    })
});
