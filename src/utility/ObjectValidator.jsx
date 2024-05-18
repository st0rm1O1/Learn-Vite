export function isObjectValid(obj) {
    return obj && obj.id;
}

export function replaceNullWithUndefined(obj) {
    if (obj && typeof obj === "object" && !Array.isArray(obj)) {
      Object.keys(obj).forEach((key) => {
        if (obj[key] === null) {
          obj[key] = undefined;
        }
      });
    }

    return obj;
}

export function isEmptyFunction(func) {
    return typeof func === 'function' && func.toString().trim() === 'function() {}';
}

