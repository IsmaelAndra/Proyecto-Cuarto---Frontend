export interface UserModel {
    id_user?: string;
    photo_user: string;
    name_user: string;
    lastname_user: string;
    mail_user: string;
    address_user: string;
    phone_user: string;
    date_of_birth_user: string;
    password_user: string;
    password_validation_user: string;
    status_user: boolean;
}

export interface CreateUserDto extends Omit<UserModel, 'id_user'>{
    rolId?: number;
}

export interface UpdateUserDto extends Partial<UserModel>{
    rolId?: number;
}