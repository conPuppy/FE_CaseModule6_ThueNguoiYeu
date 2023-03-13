import {FormControl, FormGroup} from "@angular/forms";
import {Role} from "./Role";

export class AccountForChange {
    id!: number;
    fullName!:String;
    username!: String;
    email!:String;
    birthday!:Date;
    city!:String;
    country!:String;
    gender!:String;

    avatar!:String;
    dateOfRegister!:String;
    description!:String;
    height!:number;
    weight!:number;
    hobby!:String;
    logoutTime!:Date;
    password!:String;
    statusAccount!:number;
    statusComment!:number;
    statusVip!:number
    view!:number;
    wallet!:number;
    role!:Role


    constructor(id: number, fullName: String, username: String, email: String, birthday: Date, city: String, country: String, gender: String, avatar: String, dateOfRegister: String, description: String, height: number, weight: number, hobby: String, logoutTime: Date, password: String, statusAccount: number, statusComment: number, statusVip: number, view: number, wallet: number, role: Role) {
        this.id = id;
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.birthday = birthday;
        this.city = city;
        this.country = country;
        this.gender = gender;
        this.avatar = avatar;
        this.dateOfRegister = dateOfRegister;
        this.description = description;
        this.height = height;
        this.weight = weight;
        this.hobby = hobby;
        this.logoutTime = logoutTime;
        this.password = password;
        this.statusAccount = statusAccount;
        this.statusComment = statusComment;
        this.statusVip = statusVip;
        this.view = view;
        this.wallet = wallet;
        this.role = role;
    }
}