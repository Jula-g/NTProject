export class LoginResponseDto {
    token : string;
    userId : string;

    constructor(token : string, userId : string) {
        this.token = token;
        this.userId = userId;
    }

}

