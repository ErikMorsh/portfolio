<template>
  <router-view />
</template>

<script setup>
//
</script>

<style>
/* setting input warnings to left */
.v-messages__message {
  float: left;
}

a {
  text-decoration: none;
}

body {
  background-color: rgb(var(--v-theme-surface));
}

/* decreasing timeline content distance from line from 24px to 12px */
.v-timeline-item__body,
.v-timeline-item__opposite {
  padding: 12px !important;
}
</style>
