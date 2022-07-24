type Date = {
    day: string;
    month: string;
    year: string;
}

export interface IState {
    email: string;
    username: string;
    password: string;
    isSendEmailAndNotification: boolean;
    date: Date;
}