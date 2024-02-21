<template>
  <v-tooltip
    :disabled="toolTipText ? false : true"
    :text="toolTipText"
    location="top"
  >
    <template v-slot:activator="{ props }">
      <div
        class="d-flex flex-column align-center mb-2 pb-3"
        v-bind="props"
        @click="$emit('setActiveOption', id)"
      >
        <div
          class="icon-marker mb-2"
          :class="selected ? 'icon-marker-selected' : ''"
        ></div>

        <div class="icon-cover">
          <v-btn
            :variant="selected ? 'flat' : 'outlined'"
            class="w-100 h-100 rounded-circle"
            icon
            :color="color"
          >
            <v-icon :icon="`mdi-${iconName}`"></v-icon>
          </v-btn>
        </div>
      </div>
    </template>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
    toolTipText: {
      required: false,
      type: String,
      default: null,
    },
    color: {
      required: true,
      type: String,
    },
    iconName: {
      required: true,
      type: String,
    },
    selected: {
      required: false,
      type: Boolean,
    },
  },
  emits: ["setActiveOption"],
  computed: {
    finalColor: function () {
      if (this.selected) {
      }
    },
  },
};
</script>

<style scoped>
.options-container {
  padding-bottom: 5px;
  border-bottom: 1px solid grey;
}

.icon-cover {
  width: 55px;
  height: 55px;

  transition: all 0.3s ease-out;
}

.icon {
  width: 65px;
  height: 65px;
  border-radius: 100%;

  transition: all 0.3s ease-out;
}

@media (max-width: 600px) {
  .icon {
    width: 50px;
    height: 50px;
  }
}

.icon-marker {
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom: 0;
  border-top: 10px solid rgb(var(--v-theme-cDark));
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.icon-marker-selected {
  opacity: 1;
  animation: littlePuls 2s ease-in-out infinite forwards;
}

@keyframes littlePuls {
  0% {
    transform: scale(1);
  }

  10% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  90% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
