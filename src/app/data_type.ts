// for defining the data type

export interface user_signup{
phoneNumber: any;
firstName:string ,
lastName:string ,
     email:string ,
     phone_No:string ,
     username:string ,
     password:string,
     id:string
}

export interface user_login{
    userlogin(data: user_login): unknown;
    username:string ,
    password:string,
}

export interface books{
    id: string;
    bookname: string,
    Authorname: string,
    Dateofpublishing: Date,
    Rating: number,
    Review: string,
    picture: string
}