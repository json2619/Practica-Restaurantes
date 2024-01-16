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