export class IsLogged {

    static get = () => localStorage.getItem('isLogged');
    static set = (value: boolean) => {
        if (!value) {
            localStorage.removeItem('isLogged')
            return;
        }
        localStorage.setItem('isLogged', value.toString());
    }
}