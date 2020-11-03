export function isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}

export function isArray(val) {
    return Array.isArray(val);
}

export function isNumber(val) {
    return typeof val === 'number' && !isNaN(val);
}

export function isString(val) {
    return typeof val === 'string';
}