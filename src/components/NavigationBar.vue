<template>
  <transition>
    <div class="nav-container" v-scroll="onScroll" v-show="sideNavVisibility">
      <nav v-resize="onResize">
        <v-tooltip
          text="Home"
          color="secondary"
          :location="smallScreen ? 'top' : 'end'"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              link
              @click="handleNavClick('home')"
              :ripple="false"
              v-bind="props"
              :class="currentNav === 'home' ? 'active-nav' : ''"
            >
              <v-icon icon="mdi-home"></v-icon>
            </v-list-item>
          </template>
        </v-tooltip>
        <v-tooltip
          text="About Me"
          color="secondary"
          :location="smallScreen ? 'top' : 'end'"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              link
              @click="handleNavClick('info')"
              :ripple="false"
              v-bind="props"
              :class="currentNav === 'info' ? 'active-nav' : ''"
            >
              <v-icon icon="mdi-account"></v-icon>
            </v-list-item>
          </template>
        </v-tooltip>
        <v-tooltip
          text="Skills"
          color="secondary"
          :location="smallScreen ? 'top' : 'end'"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              link
              @click="handleNavClick('skills')"
              :ripple="false"
              v-bind="props"
              :class="currentNav === 'skills' ? 'active-nav' : ''"
            >
              <v-icon icon="mdi-information-variant"></v-icon>
            </v-list-item>
          </template>
        </v-tooltip>
        <v-tooltip
          text="Pojects"
          color="secondary"
          :location="smallScreen ? 'top' : 'end'"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              link
              @click="handleNavClick('projects')"
              :ripple="false"
              v-bind="props"
              :class="currentNav === 'projects' ? 'active-nav' : ''"
            >
              <v-icon icon="mdi-sitemap"></v-icon>
            </v-list-item>
          </template>
        </v-tooltip>
        <v-tooltip
          text="Contact Me"
          color="secondary"
          :location="smallScreen ? 'top' : 'end'"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              link
              @click="handleNavClick('contact')"
              :ripple="false"
              v-bind="props"
              :class="currentNav === 'contact' ? 'active-nav' : ''"
            >
              <v-icon icon="mdi-phone"></v-icon>
            </v-list-item>
          </template>
        </v-tooltip>
      </nav>
    </div>
  </transition>
</template>

<script>
export default {
  data: function () {
    return {
      currentNav: "home",
      smallScreen: false,

      screenSize: null,
      screenScroll: null,
    };
  },
  watch: {
    currentNav: function (newVal) {
      return newVal;
    },
  },
  computed: {
    sideNavVisibility: function () {
      // changes smallScreen
      if (this.screenSize <= 600) this.smallScreen = true;
      else this.smallScreen = false;

      // always on side nav when page is small
      if (this.screenSize <= 760) return true;

      // close side nav when page is on top and size is big
      if (this.screenScroll >= 100) return true;
      else return false;
    },
  },
  methods: {
    onScroll: function () {
      this.screenScroll = window.scrollY;
    },
    onResize: function () {
      this.screenSize = window.innerWidth;
    },
    intersection: function () {
      let options = {
        // null sets root to viewport
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      };

      let callback = (entries, observer) => {
        entries.forEach((entry) => {
          // Each entry describes an intersection change for one observed
          if (entry.isIntersecting) {
            this.currentNav = entry.target.id;
          }
          // target element:
          //   entry.boundingClientRect
          //   entry.intersectionRatio
          //   entry.intersectionRect
          //   entry.isIntersecting
          //   entry.rootBounds
          //   entry.target
          //   entry.time
        });
      };

      let observer = new IntersectionObserver(callback, options);

      const navElements = document.querySelectorAll(".observe");
      navElements.forEach((el) => {
        observer.observe(el);
      });
    },
    handleNavClick: function (to) {
      document.querySelector(`#${to}`).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  created() {
    this.screenScroll = 0;
  },
  // life cycles
  mounted() {
    this.intersection(null);
    this.onResize();
  },
};
</script>

<style scoped>
.nav-container {
  position: fixed;
  left: 1%;
  top: 50%;
  width: 90px;
  height: 60vh;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
}

nav {
  width: 70%;
  height: 90%;
  background-color: rgb(var(--v-theme-cPrimary));
  border-radius: 50px;
  box-shadow: 0 0 15px 2px rgb(var(--v-theme-cPrimary));

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}

.v-list-item {
  padding: 0;
}

.v-list-item--link {
  width: 40px;
  height: 40px;
  border-radius: 100px;
  color: rgb(var(--v-theme-cPrimary-darken-4));
  transition: all 0.2s ease-in-out;
  font-size: large;
  min-height: 0;
}

.v-list-item--link:hover {
  color: #fff;
  background-color: rgb(var(--v-theme-cPrimary-darken-3));
  box-shadow: 0 0 10px 5px rgb(var(--v-theme-cPrimary-darken-3));
}

.active-nav {
  color: #fff;
  background-color: rgb(var(--v-theme-cPrimary-darken-3));
  box-shadow: 0 0 10px 5px rgb(var(--v-theme-cPrimary-darken-3));
}

.v-enter-from,
.v-leave-to {
  transform: translate(-100px, -50%);
}

.v-enter-active {
  transition: transform 0.3s ease-out;
}

.v-leave-active {
  transition: transform 0.3s ease-in;
}

.v-enter-to,
.v-leave-from {
  transform: translate(0, -50%);
}

@media (max-width: 760px) {
  .nav-container {
    width: 80px;
    height: 50vh;
  }

  .v-list-item--link {
    width: 40px;
    height: 40px;
  }
}

/* @media (max-width: 480px) {
  .nav-container {
    width: 65px;
    height: 40vh;
  }

  .v-list-item--link {
    width: 25px;
    height: 25px;
    font-size: smaller;
  }
} */
@media (max-width: 600px) {
  .nav-container {
    top: auto;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 50px;

    flex-direction: row;
  }

  nav {
    width: 80%;
    flex-direction: row;
    box-shadow: 0 0 15px 2px rgb(var(--v-theme-cPrimary));
  }

  .v-list-item--link {
    width: 30px;
    height: 30px;
    font-size: small;
  }

  .v-enter-from,
  .v-leave-to {
    transform: translate(-50%, 100px);
  }

  .v-enter-to,
  .v-leave-from {
    transform: translate(-50%, 0);
  }
}
</style>
