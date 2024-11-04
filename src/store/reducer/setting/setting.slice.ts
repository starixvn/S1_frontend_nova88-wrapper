import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tolgee } from "intergrations/tolgee";
import { subscribeToCurrencyOnly } from "utilities/helper";
import { Currency } from "utilities/languages";

type SettingState = {
  locale: string;
  currency: Currency;
};

const initialState: SettingState = {
  locale: "en",
  currency: Currency.MYR,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      tolgee.changeLanguage(action.payload);
      state.locale = action.payload;
    },
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
      subscribeToCurrencyOnly({
        locale: state.locale,
        currencyId: state.currency,
      });
    },
  },
});

const { reducer, actions } = settingSlice;
export const SettingActions = actions;
export const settingReducer = reducer;
