// for defining the data type

export interface user_signup {
    phoneNumber: any;
    firstName: string,
    lastName: string,
    email: string,
    phone_No: string,
    username: string,
    password: string,
    id: string,
    // username:string
}

export interface admin_signup {
    phoneNumber: any;
    firstName: string,
    lastName: string,
    email: string,
    phone_No: string,
    username: string,
    password: string,
    id: string
}
export interface admin_login {
    username: string,
    password: string,
}

export interface user_login {
    username: string,
    password: string,
}

export interface books {
    user_name: string;
    id: string;
    Bookname: string,
    BookAuthor: string,
    Dateofpublishing: Date,
    Rating: number,
    Review: string,
    picture: string,
    bookid:string
}

export interface addedbooks {
    bookid: string,
    username?: string; 
    id: string;
    Bookname: string,
    BookAuthor: string,
    Dateofpublishing: Date,
    Rating: number,
    Review: string,
    picture: string,
    user_name:string
    
}

export interface recomendation {
    Bookname: string,
    BookAuthor: string,
    Rating: string,
    Dateofpublishing: Date,
}