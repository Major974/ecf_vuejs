import { defineStore } from "pinia";

export const useConverterStore = defineStore({
  id: "Converter",
  state: () => ({
    ConverterEuros: 0,   
    ConverterRoubles: 0,  
    symbRoubles: "₽",
    symbEuros: "€",
  }),
  getters: {
    getConverterEuros: (state) => state.ConverterEuros * 72.8192,
    getConverterRoubles: (state) => state.ConverterRoubles * 0.0137,
  },
  actions: {
    persist: true,
  },
});
