import { defineStore } from "pinia";

export const useConverterStore = defineStore({
  id: "Converter",
  state: () => ({
    ConverterRoubles: 0,
    ConverterEuros: 0,
    symbRoubles: "₽",
    symbEuros: "€",
  }),
  getters: {
    getConverterRoubles: (state) => state.ConverterRoubles * 0.0137,
    getConverterEuros: (state) => state.ConverterEuros * 72.82,
  },
  actions: {
    persist: true,
  },
});
