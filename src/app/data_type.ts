// for defining the data type

export interface user_signup{
     firstname:string ,
     lastname:string ,
     email:string ,
     phone_No:string ,
     username:string ,
     password:string,
}

export interface user_login{
    userlogin(data: user_login): unknown;
    username:string ,
    password:string,
}