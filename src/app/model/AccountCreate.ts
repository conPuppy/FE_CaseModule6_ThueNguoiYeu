export  class AccountCreate{
username!:String;
email!:String;
password!:String;
birthday!:Date

    constructor(username: String, email: String, password: String, birthday: Date) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
    }
}