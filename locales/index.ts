import LocaleEN from "./locale_EN.json";
import LocaleES from "./locale_ES.json";
import { ILocale } from "./ILocale";

export const getLocale = () => {
    const userLocale: ILocale = (window.navigator.languages && window.navigator.languages.length) ? window.navigator.languages[0] as ILocale : window.navigator.language as ILocale;
    let locale;

    switch (userLocale) {
        case "en-US":
            locale = LocaleEN
            break;
        case "es-ES":
            locale = LocaleES
            break;
    }

    return locale;
}
