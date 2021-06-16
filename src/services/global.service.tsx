class GlobalService {

    static setLoggedUser() {
        const user  = {
            "id": 101,
            "name": "Fabio Weydson",
            "username": "fabioweydson",
            "email": "fabioweydson@gmail.com",
            "picture":"https://avatars.githubusercontent.com/u/11513557?v=4",
            "address": {},
            "phone": "",
            "website": "",
            "company": {"name": "Foursys"}
        } ;
        localStorage.setItem("loggedUser",JSON.stringify(user))
        return user;
    }
    
    static getLoggedUser(){
        return JSON.parse(localStorage.getItem("loggedUser")||'')
    }

}

export default GlobalService;