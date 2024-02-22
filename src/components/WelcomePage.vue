<template>
  <div id="home" class="home observe box" v-resize="onResize">
    <v-row class="bg-cPrimary pa-0 ma-0 d-flex justify-space-between">
      <v-col cols="3" class="d-flex justify-start">
        <v-btn width="40" height="40" @click="handleThemeClick" icon>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-col>
      <v-col
        cols="8"
        class="pa-0 d-flex justify-start flex-row-reverse"
        v-if="navVisibility"
      >
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-btn
              class="h-100 rounded-0"
              :class="isHovering ? 'hover-btn' : ''"
              variant="text"
              v-bind="props"
              link
              @click="handleNavClick('info')"
            >
              <v-icon :class="isHovering ? 'hover-icon' : ''"
                >mdi-account</v-icon
              >
            </v-btn>
          </template>
        </v-hover>
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-btn
              class="h-100 rounded-0"
              :class="isHovering ? 'hover-btn' : ''"
              variant="text"
              v-bind="props"
              link
              @click="handleNavClick('skills')"
            >
              <v-icon :class="isHovering ? 'hover-icon' : ''"
                >mdi-information-variant</v-icon
              >
            </v-btn>
          </template>
        </v-hover>
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-btn
              class="h-100 rounded-0"
              :class="isHovering ? 'hover-btn' : ''"
              variant="text"
              v-bind="props"
              link
              @click="handleNavClick('projects')"
            >
              <v-icon :class="isHovering ? 'hover-icon' : ''"
                >mdi-sitemap</v-icon
              >
            </v-btn>
          </template>
        </v-hover>
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-btn
              class="h-100 rounded-0"
              :class="isHovering ? 'hover-btn' : ''"
              variant="text"
              v-bind="props"
              link
              @click="handleNavClick('contact')"
            >
              <v-icon :class="isHovering ? 'hover-icon' : ''">mdi-phone</v-icon>
            </v-btn>
          </template>
        </v-hover>
      </v-col>
    </v-row>

    <v-container class="w-100 h-100 pt-0">
      <v-responsive class="align-center text-center fill-height">
        <h1
          class="moveUpfadeIn opacity-0 text-h5 text-sm-h2 text-sm-h1 text-white"
          style="margin-top: -100px"
        >
          Hi, I'm Erfan
        </h1>
        <v-hover>
          <template #default="{ isHovering, props }">
            <div class="w-100 d-flex justify-center">
              <div
                class="hero-avatar mt-15"
                :class="{
                  moveUpfadeIn: timer > 300 && timer < 1600,
                  'opacity-0': timer < 300,
                }"
                v-bind="props"
                @click="handleNavClick('contact')"
              >
                <div
                  class="hero-avatar-img"
                  :class="isHovering ? 'hero-avatar-img-hover' : ''"
                ></div>
                <div
                  class="hero-avatar-link"
                  :class="isHovering ? 'hero-avatar-link-hover' : ''"
                >
                  <v-icon size="40" class="link-icon">mdi-link-variant</v-icon>
                </div>
              </div>
            </div>
          </template>
        </v-hover>
        <p
          class="opacity-0 text-button text-sm-h5 text-white mt-5 font-weight-medium"
          style="text-transform: uppercase !important"
          :class="timer > 500 ? 'moveUpfadeIn' : ''"
        >
          as a Web developer
        </p>

        <v-hover>
          <template #default="{ isHovering, props }">
            <div class="explore-container">
              <v-row
                class="opacity-0 pa-0 ma-0 ml-16 cursor-pointer"
                :class="timer > 900 ? 'moveUpfadeIn' : ''"
                v-bind="props"
                @click="handleNavClick('info')"
              >
                <v-col class="d-flex align-end pa-0" style="position: relative">
                  <div
                    class="explore-more"
                    :class="isHovering ? 'explore-more-animation' : ''"
                  >
                    <v-icon
                      icon="mdi-arrow-down"
                      color="white"
                      size="x-large"
                    ></v-icon>
                  </div>
                </v-col>
                <v-col>
                  <div
                    class="explore-text text-white text-uppercase d-flex flex-column align-start ml-5"
                    :class="isHovering ? 'explore-text-hover' : ''"
                  >
                    <span>explore</span>
                    <span>more</span>
                  </div>
                </v-col>
              </v-row>
            </div>
          </template>
        </v-hover>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>
// import { ref } from "vue";

// import { useTheme } from "vuetify";

// const theme = useTheme();

// // toggle theme
// function toggleTheme() {
//   theme.global.name.value = theme.global.current.value.dark
//     ? "customLight"
//     : "customDark";
// }

export default {
  data: function () {
    return {
      navVisibility: true,
      timer: null,
      endOfAnimation: 3000,
    };
  },
  methods: {
    onResize: function () {
      if (window.innerWidth <= 760) this.navVisibility = false;
      else this.navVisibility = true;
    },
    handleNavClick: function (to) {
      document.querySelector(`#${to}`).scrollIntoView({
        behavior: "smooth",
      });
    },
    handleThemeClick: function () {
      this.$vuetify.theme.global.name = this.$vuetify.theme.global.current.dark
        ? "customLight"
        : "customDark";
    },
  },
  created() {
    let timer = Date.now();
    const timeInterval = setInterval(() => {
      this.timer = Date.now() - timer;
    }, 100);

    setTimeout(() => {
      clearInterval(timeInterval);
    }, this.endOfAnimation);
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
}

.box {
  position: relative;
  background-image: linear-gradient(to bottom, #000000c2, #0000007d),
    url(../assets/mountain.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

i {
  transition: transform 0.2s ease-in;
}

.hover-icon {
  transform: scale(1.5);
}

button {
  transition: border 0.2s ease-in;
}

.hover-btn {
  border-bottom: 4px solid #1de9b6;
}

.hero-avatar {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 0 25px white;
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
}

@media (max-width: 600px) {
  .hero-avatar {
    width: 160px;
    height: 160px;
  }
}
@media (max-width: 450px) {
  .hero-avatar {
    width: 120px;
    height: 120px;
  }
}

.hero-avatar:hover {
  box-shadow: 0 0 15px white;
  cursor: pointer;
}

.hero-avatar-img {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(../assets/hero-avatar.jpg);
  background-position: center;
  background-size: cover;

  transition: all 0.3s ease-out;
}

.hero-avatar-img-hover {
  filter: blur(2px) brightness(0.8);
}

.hero-avatar-link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  border: 3px solid #ffffffa6;
  border-radius: 15px;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.hero-avatar-link-hover {
  opacity: 1;
}

.link-icon {
  color: #ffffffa9;
}

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
/* @keyframes heartbeat {
  0% {
    transform: scale(0);
  }

  40% {
    transform: scale(1.2);
  }

  60% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
} */

.explore-container {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 600px) {
  .explore-container {
    bottom: 120px;
  }
}

.explore-text {
  transition: all 0.3s ease-out;
  opacity: 0;
}

.explore-text-hover {
  opacity: 1;
}

.explore-more {
  position: absolute;
  bottom: 10px;
  left: 0;
}

.explore-more-animation {
  animation: explore 1.6s ease-out infinite;
}

@keyframes explore {
  0% {
    bottom: 10px;
  }

  10% {
    bottom: 10px;
  }

  50% {
    bottom: 30px;
  }

  90% {
    bottom: 10px;
  }

  100% {
    bottom: 10px;
  }
}
</style>
