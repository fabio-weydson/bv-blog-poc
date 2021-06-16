import { useToasts, ToastProvider } from 'react-toast-notifications'

class GlobalService {
    static user = {
        "id": 11,
        "name": "Fabio Weydson",
        "username": "fabioweydson",
        "email": "fabioweydson@gmail.com",
        "picture":"https://avatars.githubusercontent.com/u/11513557?v=4",
        "address": {},
        "phone": "",
        "website": "",
        "company": {"name": "Foursys"}
    } ;
    static setLoggedUser() {
       
        //window.localStorage.setItem("loggedUser",JSON.stringify(user))
        return this.user;
    }
    
    static getLoggedUser(){
        return this.user;
       // return JSON.parse(window.localStorage.getItem("loggedUser")||'')
    }

    static emitToast(message,type):void {
        const {addToast} = useToasts()
        addToast(message, {  appearance: type?type:"info", autoDismiss: true,  placement:'bottom-right'})
        return;
    }

}

export default GlobalService;