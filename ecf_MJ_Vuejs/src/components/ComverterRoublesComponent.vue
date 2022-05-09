<template>
<div>
    <table>
    <thead>
        <tr>
        <th scope="col">Roubles</th>
        <th scope="col"></th>
        <th scope="col">Euros</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>{{this.ConverterRoubles}}  {{this.symbRoubles}}</td>
        <td>=</td>
        <td>{{this.getConverterRoubles}}  {{this.symbEuros}}</td>
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