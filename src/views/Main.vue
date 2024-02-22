<template>
  <v-container class="fill-height pt-0">
    <v-responsive class="align-center text-center fill-height">
      <WelcomePage />
      <InformationPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <div :style="{ width: '100%', height: '65px' }"></div>
      <NavigationBar />
    </v-responsive>
  </v-container>
</template>

<script setup>
import ContactPage from "@/components/ContactPage.vue";
import InformationPage from "@/components/InformationPage.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import ProjectsPage from "@/components/ProjectsPage.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import WelcomePage from "@/components/WelcomePage.vue";
</script>

<style>
.v-progress-circular__underlay {
  color: #00bfa630;
}

.theme {
  position: fixed;
  bottom: 10px;
  left: 10px;
}
</style>
