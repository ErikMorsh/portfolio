<template>
  <div class="w-100 h-100">
    <v-col cols="12" class="h-100 d-flex flex-column justify-center">
      <h1
        class="mb-2 mb-sm-10 text-h6 text-sm-h4 text-uppercase text-cDark font-weight-regular"
      >
        {{ title }}
      </h1>
      <p
        class="keep-spaces mb-2 text-uppercase text-cDark-lighten-2"
        v-for="item of info"
        :key="item.infoTitle"
      >
        <span class="text-cError">{{ item.infoTitle }}: </span>
        <span> </span>
        {{ item.content }}
      </p>
    </v-col>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "info"],
  data: function () {
    return {
      spacer: "",
    };
  },
};
</script>

<style scoped>
.keep-spaces {
  white-space: pre-wrap;
  font-size: 18px;
}

@media (max-width: 600px) {
  .keep-spaces {
    font-size: 15px;
  }
}
</style>
