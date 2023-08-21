import { ExceptionBase, ExceptionCode, ExceptionName } from "@vinstacore/commons/exceptions.base"

class UserExceptionCodes {
    static notRegistered = 0
    static invalidLogin = 1
    static invalidEmail = 2
    static invalidPassword = 3
    static invalidPhone = 5
}

export class InvalidLogin extends ExceptionBase {
    constructor() {
        super(
            new ExceptionCode(UserExceptionCodes.invalidLogin),
            new ExceptionName("invalid-login")
        )
    }
}

export class NotRegistered extends ExceptionBase {
    constructor() {
        super(
            new ExceptionCode(UserExceptionCodes.notRegistered),
            new ExceptionName("not-registered")
        )
    }
}

export class InvalidEmail extends ExceptionBase {
    constructor() {
        super(
            new ExceptionCode(UserExceptionCodes.invalidEmail),
            new ExceptionName("invalid-email")
        )
    }
}

export class InvalidPassword extends ExceptionBase {
    constructor() {
        super(
            new ExceptionCode(UserExceptionCodes.invalidPassword),
            new ExceptionName("invalid-password")
        )
    }
}

export class InvalidPhone extends ExceptionBase {
    constructor() {
        super(
            new ExceptionCode(UserExceptionCodes.invalidPhone),
            new ExceptionName("phone-exception")
        )
    }
}