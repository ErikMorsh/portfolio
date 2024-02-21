<template>
  <v-progress-circular
    class="mb-2 mb-sm-10"
    color="cPrimary"
    :model-value="percentage"
    :size="progressSize"
    :width="width"
  >
    <span class="text-cPrimary text-h5">{{ percentage }}%</span>
  </v-progress-circular>
  <span class="text-cPrimary text-h5 font-weight-medium">
    {{ caption }}
  </span>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["percentage", "progressSize", "width", "caption"]);
</script>
