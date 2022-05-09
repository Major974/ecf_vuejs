<template>
<div>
  <table>
    <thead>
      <tr>
        <th scope="col">Euros</th>
        <th scope="col"></th>
        <th scope="col">Roubles</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{this.ConverterEuros}}  {{this.symbEuros}}</td>
        <td>=</td>
        <td>{{this.getConverterEuros}}  {{this.symbRoubles}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script lang="ts">

import { useConverterStore } from "../stores/ConverterStore";
import { mapState } from "pinia";

export default {
  
  computed: {
    ...mapState(useConverterStore, ["getConverterRoubles", "getConverterEuros", "ConverterEuros" ,"ConverterRoubles" ,"symbRoubles", "symbEuros"]),
  },
};
</script>