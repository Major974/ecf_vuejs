<template>
  <div>
    <h1>Convertiseur d'Euros et Roubles</h1>
    <p>
      Cette application sert à convertire les euros en roubles et les rouble en
      euros le montant a inseret doit et un nombre entier ( ne pas contenir de '
      , ') et doit etre de valeur positive (pas de ' - ' avant).
    </p>
    <br />
    <form @submit.prevent="SubmitT">
      <h3>Montant en Euros</h3>
      <input
        type="number"
        placeholder="Montant en Euros"
        v-model="this.ConverterEuros"
        min="1.00"
        max="1 000 000 000.00"
      />
      <br />
      <input type="submit" value="calculer"/>
      <br />
    </form>
    <br />
    <div v-if="T">
      <ConverterEurosComponent />
    </div>
    <br />
    <form @submit.prevent="SubmitP">
      <h3>Montant en Roubles</h3>
      <input
        type="number"
        placeholder="Montant en Roubles"
        v-model="this.ConverterRoubles"
        min="1.00"
        max="1 000 000 000.00"
      />
      <br />
      <input type="submit" value="calculer" />
    </form>
    <br />
    <div v-if="P">
      <ConverterRoublesComponent />
    </div>
  </div>
</template>

<script lang="ts">
import ConverterEurosComponent from "../components/ConverterEurosComponent.vue";
import ConverterRoublesComponent from "../components/ComverterRoublesComponent.vue";
import { useConverterStore } from "../stores/ConverterStore";
import { mapWritableState } from "pinia";

export default {
  components: { ConverterEurosComponent, ConverterRoublesComponent },

    computed: {
        ...mapWritableState(useConverterStore, ["ConverterRoubles", "ConverterEuros"]),
    },
    data() {
        return {
            T: false,
            P: false,
        };
    },
    methods: {
        SubmitT() {
            this.T = true;
        },
        SubmitP() {
            this.P = true;
        },
    },
};
</script>