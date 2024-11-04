import dayjs from "dayjs";

export const EN =
  "data:image/jpeg;base64,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";

export const ZH =
  "data:image/jpeg;base64,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";

export const TH =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCABIAEgDAREAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAgKBQn/xAAaAQEBAQADAQAAAAAAAAAAAAAABggCBAcJ/9oADAMBAAIQAxAAAACYvF/pqAAABcFfnMAAAD0QucrAAAAZzNWQQAAAHC7PAAAAAAAAAaNMp3oAAAERwWnQAAAIHi9NgAAAf//EACEQAAAFBAMBAQAAAAAAAAAAAAADBVaUBhYZ0mem5DBA/9oACAEBAAE/APji4Xn6mwDNhi4Xn6mwDNhi4Xn6mwDNhi4Xn6mwDNhi4Xn6mwDNhi4Xn6mwDNhi4Xn6mwDNhi4Xn6mwDNhi4Xn6mwDNvlftTOJWnG7C/amcStON2F+1M4lacbsL9qZxK043YX7UziVpxuwv2pnErTjdhftTOJWnG7C/amcStON2F+1M4lacbt+OxaabyVCK1Fi003kqEVqLFppvJUIrUWLTTeSoRWosWmm8lQitRYtNN5KhFaixaabyVCK1Fi003kqEVqLFppvJUIrUZUeMOweYZUeMOweYZUeMOweYZUeMOweYZUeMOweYZUeMOweYZUeMOweYZUeMOweYZUeMOweb5f/EACARAAEDBAMBAQAAAAAAAAAAAAEAA5EUFlJTY6LhMED/2gAIAQIBAT8A+NuubBCt1zYIVuubBCt1zYIVuubBCt1zYIVuubBCt1zYIVuubBHypmNYgKmY1iAqZjWICpmNYgKmY1iAqZjWICpmNYgKmY1iAqZjWIH46l/MyVUv5mSql/MyVUv5mSql/MyVUv5mSql/MyVUv5mSql/MyVcfD28Vx8PbxXHw9vFcfD28Vx8PbxXHw9vFcfD28Vx8PbxXHw9vPl//xAAiEQAABQMFAQEAAAAAAAAAAAAAAhIXUQEEVGWSo9HjMED/2gAIAQMBAT8A+LzWmEbdToPNaYRt1Og81phG3U6DzWmEbdToPNaYRt1Og81phG3U6DzWmEbdToPNaYRt1Og81phG3U6+SzSFmkLNIWaQs0hZpCzSFmkLNP40FgILAQWAgsBBYCCwEFgILAQWAy2ocXoGW1Di9Ay2ocXoGW1Di9Ay2ocXoGW1Di9Ay2ocXoGW1Di9Ay2ocXp8v//Z";

export const ID =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wgARCABIAEgDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAcG/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAQFBgf/2gAMAwEAAhADEAAAAMjU9TAAAAAAAAAAAAAAAAAFKl5UAAAClS8sAAAAAAAAAAAAAAAAAP/EABkQAAIDAQAAAAAAAAAAAAAAABdlAKTiUP/aAAgBAQABPwDiCB1V3BA6q7ggdVdwQOqu4IHVXcEDqruCB1V3BA6q7ggdVd8X/8QAFxEAAwEAAAAAAAAAAAAAAAAAABRhUP/aAAgBAgEBPwDEVorRWitFaK0VorRW4v8A/8QAGREAAgMBAAAAAAAAAAAAAAAAFmMAouFQ/9oACAEDAQE/AOITKtkJlWyEyrZCZVshMq2QmVbITKtkJlWyEyrZxf/Z";

export const IN =
  "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMaaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUwRkY0RjM1RDQ5QTExRUI5REJCODU5MDkxQTQwOTcxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUwRkY0RjM0RDQ5QTExRUI5REJCODU5MDkxQTQwOTcxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMDIwIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMTk5OTdEMDgzNTI4NDBFNjVDRDJCNkRENzA4MTdCNTQiIHN0UmVmOmRvY3VtZW50SUQ9IjE5OTk3RDA4MzUyODQwRTY1Q0QyQjZERDcwODE3QjU0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB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";

export const GLOBAL = "https://banner.0814media.net/h5/img/gb.jpg";

export const MY = "https://banner.0814media.net/h5/img/ch.jpg";
export const BDT = "https://banner.0814media.net/h5/img/bd.jpg";
export const KH = "https://banner.0814media.net/h5/img/kh.jpg";
export const VN = "https://banner.0814media.net/h5/img/vn.jpg";

export enum LanguageCode {
  ENGLISH = "en",
  CHINESE = "cs",
  THAI = "th",
  INDONESIAN = "id",
  HINDI = "hi",
  MALAY = "my",
  BANGLADESH = "bd",
  CAMBODIA = "kh",
  VIETNAM = "vn",
}

export type LanguageKeyMappedType = {
  [key in `${LanguageCode}`]: string;
};

export enum Currency {
  MYR = 2,
  THB = 4,
  IDR = 15,
  VND = 51,
  INR = 61,
  BDT = 74,
  RMB = 13,
  USD = 3,
  KH = 72, //Cambodia Currency is 72 but is display as USD  https://jira.ailabpte.co/browse/MS-5245
}

export enum OS {
  IOS = "ios",
  ANDROID = "android",
}

export interface LanguageListItem {
  id: number;
  currency: string;
  image: string;
  order: number;
  countryName: string;
  languages: {
    label: string;
    code: string;
  }[];
}

export enum LANGUAGE_CODE {
  ENGLISH = "en",
  CHINESE = "cs",
  THAI = "th",
  INDONESIAN = "id",
  HINDI = "hi",
  MALAY = "my",
  BANGLADESH = "bd",
  CAMBODIA = "kh",
  VIETNAM = "vn",
}

export const LANGUAGES: {
  [index in Currency]?: LanguageListItem | undefined;
} = {
  [Currency.MYR]: {
    id: Currency.MYR,
    currency: "MYR",
    image: MY,
    order: 1,
    countryName: "Malaysia",
    languages: [
      {
        label: "English",
        code: LANGUAGE_CODE.ENGLISH,
      },
      {
        label: "简体中文",
        code: LANGUAGE_CODE.CHINESE,
      },
      {
        label: "Malay",
        code: LANGUAGE_CODE.MALAY,
      },
    ],
  },
  [Currency.THB]: {
    id: Currency.THB,
    currency: "THB",
    image: TH,
    order: 2,
    countryName: "Thailand",
    languages: [
      {
        label: "English",
        code: LANGUAGE_CODE.ENGLISH,
      },
      {
        label: "ภาษาไทย",
        code: LANGUAGE_CODE.THAI,
      },
    ],
  },
  [Currency.VND]: {
    id: Currency.VND,
    currency: "VND",
    image: VN,
    order: 3,
    countryName: "Vietnam",
    languages: [
      {
        label: "English",
        code: LANGUAGE_CODE.ENGLISH,
      },
      {
        label: "Tiếng Việt",
        code: LANGUAGE_CODE.VIETNAM,
      },
    ],
  },
  [Currency.IDR]: {
    id: Currency.IDR,
    currency: "IDR",
    image: ID,
    order: 4,
    countryName: "Indonesia",
    languages: [
      {
        label: "English",
        code: LANGUAGE_CODE.ENGLISH,
      },
      {
        label: "Bhs Indonesia",
        code: LANGUAGE_CODE.INDONESIAN,
      },
    ],
  },
  [Currency.INR]: {
    id: Currency.INR,
    currency: "INR",
    image: IN,
    order: 5,
    countryName: "India",
    languages: [
      {
        label: "English",
        code: LANGUAGE_CODE.ENGLISH,
      },
      {
        label: "हिंदी",
        code: LANGUAGE_CODE.HINDI,
      },
    ],
  },
  [Currency.BDT]: {
    id: Currency.BDT,
    currency: "BDT",
    image: BDT,
    order: 6,
    countryName: "Bangladesh",
    languages: [
      {
        label: "English",
        code: LANGUAGE_CODE.ENGLISH,
      },
      {
        label: "বাংলা",
        code: LANGUAGE_CODE.BANGLADESH,
      },
    ],
  },
  [Currency.KH]: {
    id: Currency.KH,
    currency: "KH",
    image: KH,
    order: 7,
    countryName: "Cambodia",
    languages: [
      {
        label: "English",
        code: LANGUAGE_CODE.ENGLISH,
      },
      {
        label: "ខ្មែរ",
        code: LANGUAGE_CODE.CAMBODIA,
      },
    ],
  },
  [Currency.RMB]: {
    id: Currency.RMB,
    currency: "RMB",
    image: ZH,
    order: 8,
    countryName: "China",
    languages: [
      {
        label: "English",
        code: LANGUAGE_CODE.ENGLISH,
      },
      {
        label: "简体中文",
        code: LANGUAGE_CODE.CHINESE,
      },
    ],
  },
  [Currency.USD]: {
    id: Currency.USD,
    currency: "USD",
    image: GLOBAL,
    order: 9,
    countryName: "Global",
    languages: [
      {
        label: "English",
        code: LANGUAGE_CODE.ENGLISH,
      },
      {
        label: "简体中文",
        code: LANGUAGE_CODE.CHINESE,
      },
    ],
  },
};

export function isLocaleInCurrency(
  excludeList: Currency[],
  currentLocale: string,
  selectedCurrencyId: number
) {
  let excluded = false;
  excludeList.forEach((c) => {
    if (excluded) return;
    const matchedLang = LANGUAGES[c]?.languages.find(
      (l) => l.code === currentLocale
    );
    const matchedCountry = LANGUAGES[c]?.id === selectedCurrencyId;

    if (matchedLang && matchedCountry) excluded = true;
  });

  return excluded;
}

/**
 * Values of object can be obtained from XCode > Project > nova > Info > Localizations
 */
export const IOS_LANGUAGE_CODE: Record<LanguageCode, string> = {
  [LanguageCode.BANGLADESH]: "bn",
  [LanguageCode.CAMBODIA]: "km",
  [LANGUAGE_CODE.CHINESE]: "zh-Hans",
  [LanguageCode.ENGLISH]: "en-GB",
  [LanguageCode.HINDI]: "hi",
  [LanguageCode.INDONESIAN]: "id",
  [LANGUAGE_CODE.MALAY]: "ms",
  [LanguageCode.THAI]: "th",
  [LanguageCode.VIETNAM]: "vi",
};

/**
 * Values of objects can be obtained from dayjs locale end of path
 * eg: `dayjs/locales/en`, then the value would be `en`
 */
export const DAYJS_LOCALE_LANGUAGE_CODE: Record<LanguageCode, string> = {
  [LanguageCode.BANGLADESH]: "bn",
  [LanguageCode.CAMBODIA]: "km",
  [LANGUAGE_CODE.CHINESE]: "zh-cn",
  [LanguageCode.ENGLISH]: "en",
  [LanguageCode.HINDI]: "hi",
  [LanguageCode.INDONESIAN]: "id",
  [LANGUAGE_CODE.MALAY]: "ms",
  [LanguageCode.THAI]: "th",
  [LanguageCode.VIETNAM]: "vi",
};

export const getDayJSLocale = (lang: LanguageCode | (string & {})) => {
  let langCode = "en";

  switch (lang) {
    case LanguageCode.BANGLADESH: {
      langCode = "bn";
      require("dayjs/locale/bn");
      break;
    }
    case LanguageCode.CAMBODIA: {
      langCode = "km";
      require("dayjs/locale/km");
      break;
    }
    case LanguageCode.CHINESE: {
      langCode = "zh-cn";
      require("dayjs/locale/zh-cn");
      break;
    }
    case LanguageCode.ENGLISH: {
      require("dayjs/locale/en");
      break;
    }
    case LanguageCode.HINDI: {
      langCode = "hi";
      require("dayjs/locale/hi");
      break;
    }
    case LanguageCode.INDONESIAN: {
      langCode = "id";
      require("dayjs/locale/id");
      break;
    }
    case LanguageCode.MALAY: {
      langCode = "ms";
      require("dayjs/locale/ms");
      break;
    }
    case LanguageCode.THAI: {
      langCode = "th";
      require("dayjs/locale/th");
      break;
    }
    case LanguageCode.VIETNAM: {
      langCode = "vi";
      require("dayjs/locale/vi");
      break;
    }
    default: {
      break;
    }
  }

  return langCode;
};
