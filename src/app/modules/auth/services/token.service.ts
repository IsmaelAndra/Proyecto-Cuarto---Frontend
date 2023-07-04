import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    isLogged(): boolean {
        if (this.getToken()) {
            return true;
        }
        return false;
    }

    setToken(accessToke: string): void {
        localStorage.setItem('accessToke', accessToke);
        console.log('accessToke', accessToke);
    }

    getToken(): string {
        return localStorage.getItem('accessToke')!;
    }

    getUserNameFromToken(): string | null {
        const nombreToke = this.getToken();

        if (!this.isLogged()) {
            return null
        }

        const payload = nombreToke.split('.')[1];
        const values = atob(payload);
        const valuesJson = JSON.parse(values);
        const name = valuesJson.name;
        console.log('nombre:', name);
        return name;
    }

    getUserIdFromToken(): string | null {
        const idToke = this.getToken();

        if (!this.isLogged()) {
            return null
        }

        const payload = idToke.split('.')[1];
        const values = atob(payload);
        const valuesJson = JSON.parse(values);
        const sub = valuesJson.sub;
        console.log('id:', sub);
        return sub;
    }

    getUserMailFromToken(): string | null {
        const mailToke = this.getToken();

        if (!this.isLogged()) {
            return null
        }

        const payload = mailToke.split('.')[1];
        const values = atob(payload);
        const valuesJson = JSON.parse(values);
        const mail = valuesJson.mail;
        console.log('Correo:', mail);
        return mail;
    }

    getUserPhotoFromToken(): string | null {
        const photoToke = this.getToken();

        if (!this.isLogged()) {
            return null
        }

        const payload = photoToke.split('.')[1];
        const values = atob(payload);
        const valuesJson = JSON.parse(values);
        const photo = valuesJson.photo;
        console.log('Correo:', photo);
        return photo;
    }

}

function jwt_decode(accessToke: string): any {
    throw new Error('Function not implemented.');
}