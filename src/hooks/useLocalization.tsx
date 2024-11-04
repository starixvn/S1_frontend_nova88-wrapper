import {
  CombinedOptions,
  DefaultParamType,
  TolgeeProvider,
  TolgeeStaticData,
  TranslationKey,
  TreeTranslationsData,
  useTranslate,
} from "@tolgee/react";
import { Scope, TranslateOptions } from "i18n-js";
import { tolgee } from "intergrations/tolgee";
import en from "assets/locale/en/en.json";
import React, { useCallback } from "react";
import store, { useAppSelector } from "store";
import { localizationApi } from "store/rtk/localizationApi";
import { sleep } from "utilities/helper";
import { LANGUAGE_CODE } from "utilities/languages";

export type Translate = (scope: Scope, options?: TranslateOptions) => string;

interface LocalizationProviderProps {
  locale: LANGUAGE_CODE;
  i18n: {
    translate: Translate;
  };
}

export function getLanguageFetcher(
  locale: LANGUAGE_CODE,
  fallbackTranslation: TreeTranslationsData
) {
  return async () => {
    // This is to ensure redux provider run 1 frame first before executing api
    await sleep(0);
    try {
      const resp = await store
        .dispatch(
          localizationApi.endpoints.translations.initiate({
            locale,
          })
        )
        .unwrap();

      return resp[locale];
    } catch (e) {
      console.log("Failed to get language", e);
      return fallbackTranslation;
    }
  };
}

function useTolgeeTranslate() {
  const { t: tolgeeT, isLoading } = useTranslate();

  const t = useCallback(
    (
      key: TranslationKey,
      placeholders?: CombinedOptions<DefaultParamType>,
      defaultValue?: string
    ) => {
      return tolgeeT(
        key,
        isLoading ? " " : defaultValue ?? key, // render empty string if no translation available / while being downloaded
        placeholders
      );
    },
    [isLoading, tolgeeT]
  );

  return { t };
}

export function prepareTolgeeStaticDataByNamespace(
  fallbackTranslation: TreeTranslationsData
): TolgeeStaticData {
  const staticData = { en: fallbackTranslation };

  // Object.values(LANGUAGE_CODE).forEach((locale) => {
  //   staticData[`en`] = getLanguageFetcher(locale, fallbackTranslation);
  // });

  return staticData;
}

tolgee.addStaticData(prepareTolgeeStaticDataByNamespace(en));

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  return <TolgeeProvider tolgee={tolgee}>{children}</TolgeeProvider>;
};

export default function useLocalization() {
  return useTolgeeTranslate();
}

export const LocalizationProviderRedux = ({ children }) => {
  const locale = "en";
  if (!tolgee.isRunning()) {
    tolgee.changeLanguage(locale); // load initial language
  }

  return (
    <TolgeeProvider
      tolgee={tolgee}
      options={{
        useSuspense: false, // prevents render blocking before tolgee done downloading translation
      }}
    >
      {children}
    </TolgeeProvider>
  );
};
