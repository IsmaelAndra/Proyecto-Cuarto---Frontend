export class UserAuthModel {
    mail_user: string;
    password_user: string;

    constructor(mail_user: string, password_user: string) {
        this.mail_user = mail_user;
        this.password_user = password_user;
    }
}