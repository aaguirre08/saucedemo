
class People {
    constructor(user, password) {
        this._user = user;
        this._password = password;
    }
    get user() {
        return this._user;
    }
    get password() {
        return this._password;
    }
}


class Credentials extends People {
    constructor(data) {
        super(data.user, data.password);
    }
}

export default { Credentials };
