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
    
}

export interface recomendation {
    Bookname: string,
    BookAuthor: string,
    Rating: string,
    Dateofpublishing: Date,
}