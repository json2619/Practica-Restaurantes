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