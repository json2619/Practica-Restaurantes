function BaseException(message = "Default Message", fileName, lineNumber) {
    let instance = new Error(message, fileName, lineNumber);
    instance.name = "MyError";
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, BaseException);
    }
    return instance;
}

BaseException.prototype = Object.create(Error.prototype, {
    constructor: {
        value: BaseException,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

function InvalidConstructorException() {
    let instance = BaseException.call(this, "No se ha instanciado el objeto con new");
    instance.name = "EmptyValueException";
    return instance;
}

InvalidConstructorException.prototype = Object.create(BaseException.prototype);
InvalidConstructorException.prototype.constructor = InvalidConstructorException;

function EmptyValueException() {
    let instance = BaseException.call(this, "No se puede dejar ningún valor vacío");
    instance.name = "EmptyValueException";
    return instance;
}

EmptyValueException.prototype = Object.create(BaseException.prototype);
EmptyValueException.prototype.constructor = EmptyValueException;

function InvalidObjectException() {
    let instance = BaseException.call(this, "No es posible añadir el objeto");
    instance.name = "InvalidObjectException";
    return instance;
}

InvalidObjectException.prototype = Object.create(BaseException.prototype);
InvalidObjectException.prototype.constructor = InvalidObjectException;


function RegisteredObjectException() {
    let instance = BaseException.call(this, "El objeto ya existe");
    instance.name = "RegisteredObjectException";
    return instance;
}

RegisteredObjectException.prototype = Object.create(BaseException.prototype);
RegisteredObjectException.prototype.constructor = RegisteredObjectException;

function NonRegisteredObjectException() {
    let instance = BaseException.call(this, "El objeto no está registrado");
    instance.name = "NonRegisteredObjectException";
    return instance;
}

NonRegisteredObjectException.prototype = Object.create(BaseException.prototype);
NonRegisteredObjectException.prototype.constructor = NonRegisteredObjectException;

function NotFunctionException() {
    let instance = BaseException.call(this, "El objeto no está registrado");
    instance.name = "NotFunctionException";
    return instance;
}

NotFunctionException.prototype = Object.create(BaseException.prototype);
NotFunctionException.prototype.constructor = NotFunctionException;