import { Buffer } from 'buffer';
/**
 * Establece un valor en el almacenamiento local o de sesión.
 * @param {string} name - El nombre bajo el cual se almacenará el valor.
 * @param {string} value - El valor que se almacenará
 * @param {boolean} [session=false] - Indica si el valor debe almacenarse en sessionStorage o en localStorage. Por defecto, es falso.
 */
/* istanbul ignore next */
export const setValue = (name: string, value: string, session = false) => {
  const valueCf = Buffer.from(value).toString('base64');
  if (session) {
    sessionStorage.setItem(name, valueCf);
  } else {
    localStorage.setItem(name, valueCf);
  }
};

/**
 * Obtiene un valor en el almacenamiento local o de sesión
 * @param {string} name - El nombre bajo el cual se obtendra el valor.
 * @param {boolean} [session=false] - Indica si el valor debe almacenarse en sessionStorage o en localStorage. Por defecto, es falso.
 * * @param {boolean} [toJson=false] - Indica si el valor debe transformarse a json o no. Por defecto, es falso.
 */
export function getValue(name: string, session?: boolean): string | null;
export function getValue<T>(name: string, session?: boolean, toJson?: true): T;
/* istanbul ignore next */
export function getValue<T>(name: string, session = false, toJson = false) {
  const encryptedValue = session ? (sessionStorage.getItem(name) as any) : (localStorage.getItem(name) as any);
  if (encryptedValue) {
    const data = Buffer.from(encryptedValue, 'base64').toString('utf-8');
    return toJson ? (JSON.parse(data) as T) : data;
  }
  return null as T;
}
