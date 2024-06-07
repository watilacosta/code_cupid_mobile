const snakeToCamel = (str: string): string => {
  return str.replace(/(_\w)/g, (matches) => matches[1].toUpperCase());
};

const convertKeysToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(v => convertKeysToCamelCase(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((result, key) => {
      const newKey = snakeToCamel(key);
      (result as any)[newKey] = convertKeysToCamelCase(obj[key]);
      return result;
    }, {} as { [key: string]: any });
  }
  return obj;
};

export default convertKeysToCamelCase;