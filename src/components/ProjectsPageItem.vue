<template>
  <v-card class="mx-auto" max-width="500">
    <v-img :src="img" height="200px" cover>
      <v-card elevation="0" class="bg-transparent">
        <v-chip
          v-for="tech in techs"
          variant="flat"
          :key="tech.name"
          :color="tech.color"
          class="d-flex d-sm-none ma-2 text-uppercase text-caption"
          style="width: fit-content"
        >
          {{ tech.name }}
        </v-chip>
      </v-card>
    </v-img>

    <v-card-title class="text-uppercase">
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ feature }}
    </v-card-subtitle>

    <v-card-actions>
      <a :href="gitRipo">
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
      </a>

      <v-spacer></v-spacer>
      <v-chip
        v-for="tech in techs"
        :key="tech.name"
        variant="tonal"
        :color="tech.color"
        class="d-none d-sm-flex mr-2 text-uppercase text-caption"
      >
        {{ tech.name }}
      </v-chip>
      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="d-none d-sm-block">
          {{ description }}
        </v-card-text>
        <v-card-text class="d-sm-none">
          {{ shortDesc }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: [
    "id",
    "img",
    "title",
    "feature",
    "description",
    "shortDesc",
    "techs",
    "gitRipo",
  ],
  data: function () {
    return {
      show: false,
    };
  },
};
</script>
