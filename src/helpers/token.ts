export class Token {

    static get = () => localStorage.getItem('token');
    static set = (value: string) => localStorage.setItem('token', value);
}