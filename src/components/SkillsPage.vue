import SkillsPageOption from './SkillsPageOption.vue';
<template>
  <div id="skills" class="skills observe box">
    <div class="w-100 h-75 px-sm-15">
      <v-row class="pa-0 pt-sm-10 px-sm-10 ma-0 h-100">
        <v-col
          id="skill-title-0"
          cols="12"
          sm="5"
          class="opacity-0 pt-15"
          :class="elementIsIn[0] ? 'moveUpfadeIn' : ''"
          v-intersect="onIntersect"
        >
          <div
            id="intro-row-10"
            class="scale-0 h-75 d-flex flex-column justify-space-between text-sm-start"
          >
            <h1
              class="text-h6 text-sm-h4 text-cError"
              style="text-transform: uppercase !important"
            >
              Let's know me better
            </h1>
            <p class="mt-5 mt-sm-0 text-cDark">
              I embarked programing from first year of colleg and obtained many
              experiences through my jurney.<span class="d-none d-sm-inline"
                >The quality of work and better pace to solve the problems are
                my utilities in programing towards reaching my aims.</span
              >
            </p>
            <v-btn
              class="w-75 d-none d-sm-block"
              variant="tonal"
              color="cSecondary"
              >download resume (.pdf file)</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" sm="7" class="pt-5 pt-sm-15">
          <v-col
            class="options-container w-100 h-25 ma-0 pa-0 d-flex align-center justify-space-evenly"
          >
            <BaseOption
              v-for="option in optionsData"
              :key="option.id"
              :id="option.id"
              :toolTipText="option.toolTipText"
              :color="option.color"
              :iconName="option.iconName"
              :selected="activeInfoOption === option.id"
              @setActiveOption="handleOptionClick(option.id)"
            />
          </v-col>
          <v-col class="w-100 ma-0 pa-0 pt-sm-5">
            <v-window v-model="activeInfoOption" hide-arrows>
              <v-window-item v-for="data in optionsData" :key="data.id">
                <SkillsPageSlide
                  :id="data.id"
                  :title="data.title"
                  :info="data.info"
                />
              </v-window-item>
            </v-window>
          </v-col>
        </v-col>
      </v-row>
    </div>
    <div class="w-100 h-25 px-10">
      <div class="w-100 h-100 pa-0 px-sm-15 mt-2 mt-sm-0 text-cDark-lighten-1">
        <v-timeline direction="horizontal" style="margin-top: -20px">
          <v-timeline-item dot-color="cError-lighten-2">
            <template v-slot:opposite>2018</template>
            <div>
              <p>Urmia</p>
            </div>
          </v-timeline-item>

          <v-timeline-item dot-color="cInfo-lighten-2">
            <template v-slot:opposite> Tabriz </template>
            <div>
              <p>2020</p>
            </div>
          </v-timeline-item>

          <v-timeline-item dot-color="cSecondary-lighten-2">
            <template v-slot:opposite> 2024 </template>
            <div>
              <p>Tehran</p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import SkillsPageSlide from "./SkillsPageSlide.vue";
import BaseOption from "./BaseOption.vue";
export default {
  components: {
    SkillsPageSlide,
    BaseOption,
  },
  data: function () {
    return {
      elementIsIn: [],
      activeInfoOption: 0,
      skillsLength: null,
      skillsInterval: null,
      optionsData: [
        {
          id: 0,
          toolTipText: "personal  info",
          color: "cSecondary",
          iconName: "account-tie",

          title: "Personal Details",
          info: [
            {
              infoTitle: "name",
              content: "Erfan Morshedzade",
            },
            {
              infoTitle: "age",
              content: "26",
            },
            {
              infoTitle: "experience",
              content: "2 + years till date",
            },
          ],
        },
        {
          id: 1,
          toolTipText: "Educations",
          color: "cWarning",
          iconName: "school",

          title: "Educational Profile",
          info: [
            {
              infoTitle: "techinical",
              content: "Bonab (softwear enginearing)",
            },
            {
              infoTitle: "skills",
              content: "html, css, ts, vue, vuetify",
            },
            {
              infoTitle: "softwares",
              content: "photoshop, vscode",
            },
          ],
        },
        {
          id: 2,
          toolTipText: "Experience",
          color: "cInfo",
          iconName: "road-variant",

          title: "Experience Details",
          info: [
            {
              infoTitle: "urmia",
              content: "2018 - 2019 Parasay",
            },
            {
              infoTitle: "tabriz",
              content: "2020 - 2021 fayatech",
            },
          ],
        },
        {
          id: 3,
          toolTipText: "Location",
          color: "red",
          iconName: "map-marker",

          title: "Present Location",
          info: [
            {
              infoTitle: "laocality",
              content: "tehran - shahrake koohsar",
            },
            {
              infoTitle: "country",
              content: "iran",
            },
          ],
        },
        {
          id: 4,
          toolTipText: "Contact me",
          color: "brown-lighten-3",
          iconName: "forum-outline",

          title: "Contact Me",
          info: [
            {
              infoTitle: "email",
              content: "erfanmorshedzade1376@gmail.com",
            },
            {
              infoTitle: "call",
              content: "+98903 757 9839",
            },
            {
              infoTitle: "whatsapp",
              content: "same number",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOptionClick: function (index) {
      this.activeInfoOption = index;
      clearInterval(this.skillsInterval);
      this.skillsInterval = setInterval(() => {
        this.activeInfoOption += 1;
        if (this.activeInfoOption === 5) this.activeInfoOption = 0;
      }, 15000);
    },
    onIntersect: function (isIntersecting, entries, observer) {
      if (!isIntersecting) return;

      if (entries[0].target.id === "skill-title-0") this.elementIsIn[0] = true;
    },
  },

  created() {
    this.skillsLength = this.optionsData.length;
    this.handleOptionClick(0);
  },
};
</script>

<style scoped>
.opacity-0 {
  transform: scale(1);
  transform: translateY(100px);
  opacity: 0;
}

.moveUpfadeIn {
  animation: moveUpfadeIn 1.3s ease forwards;
}

@keyframes moveUpfadeIn {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.skills {
  width: 100%;
  height: 100vh;
}

/* .box {
    background-position: center;
    background-size: cover;
    display: table;
    background-attachment: fixed;
    background-image: linear-gradient(to top, #ffffffbc, rgba(0, 128, 128, 0.435)), url(../assets/waterfall-2.jpg)
} */

.options-container {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.316);
}
</style>
