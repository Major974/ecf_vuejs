<template>
  <div>
    <h1>Convertiseur d'Euros ∞ Roubles</h1>
    <p>
      Cette application sert à convertire les euros en roubles et les rouble en
      euros le montant a inseret doit et un nombre avec un maximum de 2 décimal 
      ( 1.00 ) et doit etre de valeur positive (pas de symbole ' - ' avant).
    </p>
    <br />
    <form @submit.prevent="SubmitT">
      <h3>Montant en Euros</h3>
      <input
        type="number"
        placeholder="Montant en Euros"
        v-model="Euros"
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
        v-model="Roubles"
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
            Euros: Number,
            Roubles: Number,
        };
    },
    methods: {
        SubmitT() {
            this.T = true;
            this.ConverterEuros = this.Euros;
        },
        SubmitP() {
            this.P = true;
            this.ConverterRoubles = this.Roubles;
        },
    },
};
</script>