<template>
  <div id="projects" class="projects observe box" v-resize="onResize">
    <v-parallax src="../assets/cave.jpg" class="h-100">
      <div class="h-100 w-100 parallax-content d-flex flex-column align-center">
        <div
          class="mt-5 d-flex flex-column justify-center align-center"
          style="height: 30%; width: 80%"
        >
          <h1
            class="text-h6 text-sm-h4 text-cError"
            style="text-transform: uppercase !important"
          >
            recent projects
          </h1>
          <p class="mt-5 text-white">
            Here is some of the projects that I'm working on them and hope you
            like them.
            <span class="d-none d-sm-inline">
              These projects are considring bestpractices for veriety of
              circumstances and nice lookin and easy using apps.</span
            >
          </p>
        </div>
        <div class="w-100 h-75 px-15" style="height: 70%">
          <v-carousel
            v-model="currentProject"
            hide-delimiter-background
            :show-arrows="xs ? false : 'hover'"
            class="mb-5"
            height="475px"
          >
            <v-carousel-item v-for="project in projects" :key="project.id">
              <ProjectsPageItem
                :id="project.id"
                :img="project.img"
                :title="project.title"
                :feature="project.feature"
                :description="project.description"
                :shortDesc="project.shortDesc"
                :techs="project.techs"
                :gitRipo="project.gitRipo"
              />
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </v-parallax>
  </div>
</template>
<script setup>
import ProjectsPageItem from "./ProjectsPageItem.vue";
import { ref, reactive } from "vue";

const projects = reactive([
  {
    id: 1,
    img: "/src/assets/learn-fast.jpg",
    title: "learn fast",
    feature: "50+ features of wonder",
    description:
      "Learn fast is a platform that its main goal is to force the client learn whatever they want in 12 steps just like game.",
    shortDesc:
      "Learn fast is a platform that its main goal is to force the client learn. ",
    gitRipo: "https://github.com/ErikMorsh/learn-fast.git",
    techs: [
      {
        name: "vue js",
        color: "cSecondary",
      },
      {
        name: "vuetify",
        color: "cInfo",
      },
      {
        name: "vueX",
        color: "cSecondary",
      },
    ],
  },
  {
    id: 2,
    img: "/src/assets/portfolio.jpg",
    title: "portfolio",
    feature: "100+ implemented skills",
    description:
      "This project represents the power of Vue js and Vutify component styling tool in building a desirable and lovely looking landing pages.",
    shortDesc:
      "This project represents the power of Vue js and Vutify for landing pages. ",
    gitRipo: "https://github.com/ErikMorsh/portfolio.git",
    techs: [
      {
        name: "vue js",
        color: "cSecondary",
      },
      {
        name: "vuetify",
        color: "cInfo",
      },
    ],
  },
  {
    id: 3,
    img: "/src/assets/portfolio.jpg",
    title: "Admin Panel",
    feature: "Compound Implemented Techs",
    description:
      "This project has lunched but not has been finished yet. The main goal of this project is to benefit of Full Java Script power.",
    shortDesc: "The main goal of this project is to benefit of full JS power.",
    gitRipo: "https://github.com/ErikMorsh/admin-panel.git",
    techs: [
      {
        name: "vue js",
        color: "cSecondary",
      },
      {
        name: "vuetify",
        color: "cInfo",
      },
      {
        name: "vueX",
        color: "cSecondary",
      },
      {
        name: "type script",
        color: "cInfo-darken-3",
      },
    ],
  },
]);

const currentProject = ref(0);
const xs = ref(false);

function onResize() {
  xs.value = window.innerWidth <= 600;
}
</script>

<style scoped>
.projects {
  width: 100%;
  height: 100vh;
  background-color: #4db6ac;
}

.box {
  background-position: center;
  background-size: cover;
  display: table;
  background-attachment: fixed;
  background-image: url(../assets/cave.jpg);
}

.parallax-content {
  background: linear-gradient(rgba(0, 0, 0, 0.689), rgba(0, 0, 0, 0.735));
}
</style>
