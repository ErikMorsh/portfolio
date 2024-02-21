<template>
  <div id="info" class="info observe box" v-resize="onResize">
    <div class="w-100 h-50">
      <v-sheet class="h-100">
        <v-row class="about-row-1 h-100 ma-0 py-5 px-0 px-sm-15 mx-auto">
          <v-col
            cols="12"
            sm="6"
            class="px-0 px-sm-5 pt-10 pl-0 pl-sm-10 d-flex flex-column justify-center align-center align-sm-start"
          >
            <h1
              id="intro-row-1"
              style="text-transform: uppercase !important"
              class="opacity-0 text-center text-sm-left text-uppercase text-h5 text-sm-h3 font-weight-bold text-cError"
              v-intersect="onIntersect"
              :class="titleInters[0] ? 'moveUpfadeIn' : ''"
            >
              What to know about me?
            </h1>
            <div
              id="intro-row-2"
              class="title-border opacity-0 mt-5 d-flex justify-center justify-sm-start"
              v-intersect="onIntersect"
              :class="titleInters[1] ? 'moveUpfadeIn' : ''"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              id="intro-row-3"
              class="opacity-0 w-100 mt-5 d-flex justify-center"
              v-intersect="onIntersect"
              :class="{
                moveUpfadeIn: titleInters[2],
                'w-75': screenSize < 600,
              }"
            >
              <div style="width: 90%" class="d-flex justify-space-around">
                <BaseOption
                  :id="1"
                  toolTipText="Instagram"
                  color="pink"
                  iconName="instagram"
                  :selected="false"
                />
                <a
                  style="text-decoration: none"
                  href="http://www.linkedin.com/in/erfan-morshedzade-65a363177"
                >
                  <BaseOption
                    :id="2"
                    toolTipText="Linked in"
                    color="blue-darken-2"
                    iconName="linkedin"
                    :selected="false"
                  />
                </a>
                <BaseOption
                  :id="3"
                  toolTipText="WhatsApp"
                  color="green-accent-3"
                  iconName="whatsapp"
                  :selected="false"
                />
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="py-sm-10 px-5 d-flex flex-column justify-space-evenly"
          >
            <p
              id="intro-row-4"
              class="mb-2 text-center text-sm-left text-subtitle-1 text-cDark"
              v-intersect="onIntersect"
              :class="titleInters[3] ? 'moveUpfadeIn' : ''"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              esse molestias vero suscipit facilis magni dicta eos, tempora
            </p>
            <p
              id="intro-row-5"
              class="text-center text-sm-left text-subtitle-1 text-cDark"
              v-intersect="onIntersect"
              :class="titleInters[4] ? 'moveUpfadeIn' : ''"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              esse molestias vero suscipit facilis magni dicta eos,
            </p>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <div class="w-100 h-50">
      <v-row class="h-100 ma-0">
        <v-col
          cols="12"
          :sm="screenSize <= 850 ? 12 : 8"
          class="grid-lines d-sm-flex justify-space-evenly"
          :class="screenSize <= 850 && screenSize > 600 ? 'pa-10' : ''"
        >
          <v-col cols="12" sm="6" class="pa-0 d-flex justify-space-evenly">
            <div
              id="intro-row-6"
              class="opacity-0 d-flex flex-column align-center justify-center"
              v-intersect="onIntersect"
              :class="titleInters[5] ? 'moveUpfadeIn' : ''"
            >
              <BaseProgress
                :percentage="progresses[0].perecentage"
                :progressSize="progressSize"
                :width="12"
                :caption="'Html & Css'"
              />
            </div>
            <div
              id="intro-row-7"
              class="opacity-0 d-flex flex-column align-center justify-center"
              v-intersect="onIntersect"
              :class="titleInters[6] ? 'moveUpfadeIn' : ''"
            >
              <BaseProgress
                :percentage="progresses[1].perecentage"
                :progressSize="progressSize"
                :width="12"
                :caption="'Type Script'"
              />
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="pa-0 mt-5 mt-sm-0 d-flex justify-space-evenly"
          >
            <div
              id="intro-row-8"
              class="opacity-0 d-flex flex-column align-center justify-center"
              v-intersect="onIntersect"
              :class="titleInters[7] ? 'moveUpfadeIn' : ''"
            >
              <BaseProgress
                :percentage="progresses[2].perecentage"
                :progressSize="progressSize"
                :width="12"
                :caption="'Vue JS'"
              />
            </div>
            <div
              id="intro-row-9"
              class="opacity-0 d-flex flex-column align-center justify-center"
              v-intersect="onIntersect"
              :class="titleInters[8] ? 'moveUpfadeIn' : ''"
            >
              <BaseProgress
                :percentage="progresses[3].perecentage"
                :progressSize="progressSize"
                :width="12"
                :caption="'Vuetify'"
              />
            </div>
          </v-col>
        </v-col>
        <v-col
          cols="12"
          :sm="screenSize <= 850 ? 12 : 4"
          class="info-text d-flex align-center"
          :class="{
            'pr-5': screenSize > 850,
            'justify-center': screenSize <= 850,
          }"
        >
          <div
            id="intro-row-10"
            class="opacity-0 h-75 d-flex flex-column justify-space-evenly text-center text-white"
            :class="{
              moveUpfadeIn: titleInters[9],
              'text-start': screenSize >= 850,
              'align-center': screenSize < 850,
            }"
            v-intersect="onIntersect"
          >
            <h1
              style="text-transform: uppercase !important"
              class="text-h5 text-sm-h4 text-cError"
            >
              Checkout my skill set
            </h1>
            <p class="text-cLight">
              For more information about my knowledge, skill set and experiences
              you can download the .pdf file from here.
            </p>
            <v-btn
              class="w-75 mt-5 text-caption text-uppercase text-cLight"
              variant="outlined"
              color="white"
              >download resume (.pdf file)</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import BaseOption from "./BaseOption.vue";
import BaseProgress from "./BaseProgress.vue";
export default {
  components: {
    BaseProgress,
    BaseOption,
  },
  data: () => ({
    screenSize: null,
    titleInters: [],
    progresses: [
      {
        state: false,
        perecentage: 0,
        max: 90,
      },
      {
        state: false,
        perecentage: 0,
        max: 80,
      },
      {
        state: false,
        perecentage: 0,
        max: 85,
      },
      {
        state: false,
        perecentage: 0,
        max: 95,
      },
    ],
  }),
  computed: {
    progressSize: function () {
      let size = 150;
      if (this.screenSize < 600) size = 110;
      else if (this.screenSize < 850) size = 120;
      else if (this.screenSize < 960) size = 100;
      else if (this.screenSize < 1280) size = 120;
      return size;
    },
  },
  methods: {
    onIntersect(isIntersecting, entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      if (!isIntersecting) return;
      if (entries[0].target.id === "intro-row-1") this.titleInters[0] = true;
      else if (entries[0].target.id === "intro-row-2")
        this.titleInters[1] = true;
      else if (entries[0].target.id === "intro-row-3")
        this.titleInters[2] = true;
      else if (entries[0].target.id === "intro-row-4")
        this.titleInters[3] = true;
      else if (entries[0].target.id === "intro-row-5")
        this.titleInters[4] = true;
      else if (entries[0].target.id === "intro-row-6") {
        this.titleInters[5] = true;
        if (!this.progresses[0].state)
          this.startProgress(0, this.progresses[0].max);
      } else if (entries[0].target.id === "intro-row-7") {
        this.titleInters[6] = true;
        if (!this.progresses[1].state)
          this.startProgress(1, this.progresses[1].max);
      } else if (entries[0].target.id === "intro-row-8") {
        this.titleInters[7] = true;
        if (!this.progresses[2].state)
          this.startProgress(2, this.progresses[2].max);
      } else if (entries[0].target.id === "intro-row-9") {
        this.titleInters[8] = true;
        if (!this.progresses[3].state)
          this.startProgress(3, this.progresses[3].max);
      } else if (entries[0].target.id === "intro-row-10")
        this.titleInters[9] = true;
    },
    startProgress: function (id, max) {
      this.progresses[id].state = true;
      this.progresses[id].max = max;
      const interval = setInterval(() => {
        if (this.progresses[id].perecentage < this.progresses[id].max)
          this.progresses[id].perecentage += 3;
        else clearInterval(interval);
      }, 100);
    },
    onResize: function () {
      this.screenSize = window.innerWidth;
    },
  },
  created() {
    this.onResize();
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

.info {
  width: 100%;
  height: 100vh;
}

.box {
  background-position: center;
  background-size: cover;
  display: table;
  background-attachment: fixed;
  background-image: linear-gradient(
      to bottom,
      rgb(var(--v-theme-cDark)),
      rgba(var(--v-theme-cDark), 0.5),
      rgba(var(--v-theme-cDark), 0.3)
    ),
    url(../assets/flower.jpg);
}

.about-row-1 {
  width: 60%;
}

@media (max-width: 1900px) {
  .about-row-1 {
    width: 80%;
  }
}

@media (max-width: 1280px) {
  .about-row-1 {
    width: 100%;
  }
}

.title-border {
  width: 100%;
}

.title-border span {
  display: inline-block;
  width: 50px;
}

.title-border span:nth-child(1) {
  border-bottom: 3px solid #b9f6ca;
}

.title-border span:nth-child(2) {
  border-bottom: 3px solid #f4ff81;
}

.title-border span:nth-child(3) {
  border-bottom: 3px solid #ffe57f;
}

.title-border span:nth-child(4) {
  border-bottom: 3px solid #ff9e80;
}

.title-border span:nth-child(5) {
  border-bottom: 3px solid #ea80fc;
}

.title-border span:nth-child(6) {
  border-bottom: 3px solid #8c9eff;
}

.media-container {
  width: 90px;
  height: 90px;
  border-radius: 100%;
  cursor: pointer;
  font-size: 30px;
}

.media-size {
  font-size: 50px;
}

@media (max-width: 450px) {
  .media-size {
    font-size: 30px;
  }
  .media-container {
    width: 70px;
    height: 70px;
  }
}

/* skills info */
/* .grid-lines {
  /* background: url(../assets/grid-lines.png); */
/* } */

.info-text {
  background: linear-gradient(
    to bottom,
    rgba(var(--v-theme-cDark), 0.4),
    rgba(var(--v-theme-cDark), 0.4)
  );
}
</style>
