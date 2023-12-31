export interface UserData {
    username: string;
    name: string;
    phone: Number;
    email: string;
    password: string;
}

export interface Id {
    id?: string;
}

export interface Ids {
    id1?: string;
    id2?: string;
}

export interface MessageTypes {
    chatId?: string;
    senderId?: string;
    text?: string;
}
