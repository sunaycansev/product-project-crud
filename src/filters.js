import Vue from "vue";

export const FILTERS = {
  currencyFormat: (value) => {
    return (
      parseFloat(value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
      }) + "TL"
    );
  },
};

export const registerFilters = function () {
  Object.keys(FILTERS).forEach((key) => {
    Vue.filter(key, FILTERS[key]);
  });
};
