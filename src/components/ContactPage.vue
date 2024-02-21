<template>
  <div id="contact" class="contact observe d-flex justify-center align-center">
    <div class="container h-100 w-100 text-blue-grey-darken-3">
      <h1
        class="mt-10 mt-sm-10 text-h5 text-sm-h3 text-cError"
        style="text-transform: uppercase !important"
      >
        Get In touch
      </h1>
      <v-row class="pa-0 ma-0 d-flex flex-column flex-sm-row">
        <v-col
          cols="12"
          sm="8"
          class="px-sm-15 d-flex align-center justify-center"
        >
          <v-form
            @submit.prevent="handleSubmit"
            class="w-100 d-flex flex-column justify-start"
          >
            <v-textarea
              class="w-100 text-cDark"
              color="cSecondary"
              label="Write your message here"
              variant="outlined"
              v-model="messageInput"
              no-resize
              rows="7"
              counter
              :maxlength="250"
              :rules="mRules"
              hide-details="auto"
            >
            </v-textarea>

            <div class="w-100 d-sm-flex mt-2 text-cDark">
              <v-text-field
                class="mr-sm-2"
                color="cSecondary"
                label="Your Name"
                v-model="nameInput"
                type="text"
                :rules="nRules"
                variant="outlined"
              ></v-text-field>
              <v-text-field
                class="mt-3 mt-sm-0 ml-sm-2 text-cDark"
                color="cSecondary"
                label="Your Email"
                v-model="emailInput"
                type="email"
                :rules="eRules"
                variant="outlined"
              ></v-text-field>
            </div>
            <v-text-field
              class="w-100 mt-2 text-cDark"
              color="cSecondary"
              label="Subject"
              v-model="subjectInput"
              type="email"
              :rules="sRules"
              variant="outlined"
            ></v-text-field>
            <div class="d-sm-flex mt-2 text-cDark align-center">
              <transition mode="out-in" name="delivery">
                <v-btn
                  class="submit-btn"
                  type="submit"
                  variant="outlined"
                  :color="formValidity ? 'cSecondary' : 'cError-darken-2'"
                  v-if="messageDeliveryStatus === 'clear'"
                  >send comment</v-btn
                >
                <v-progress-circular
                  v-else-if="messageDeliveryStatus === 'waiting'"
                  class="mt-2 mt-sm-0 ml-sm-2"
                  color="cInfo"
                  indeterminate
                  :width="1"
                  size="30"
                ></v-progress-circular>
                <v-btn
                  v-else-if="messageDeliveryStatus === 'recived'"
                  class="mt-2 mt-sm-0 ml-sm-2"
                  icon
                  variant="tonal"
                  color="cSecondary"
                  size="30"
                >
                  <v-icon>mdi-check-bold</v-icon>
                </v-btn>
              </transition>
            </div>
          </v-form>
        </v-col>
        <v-col cols="12" sm="4" class="d-none d-sm-flex align-center">
          <div
            class="w-100 h-75 d-flex justify-space-around flex-sm-column justify-sm-space-around text-cDark-lighten-2"
          >
            <div class="d-flex flex-column flex-sm-row align-sm-center mb-10">
              <div class="mr-sm-5">
                <v-icon size="50">mdi-home-outline</v-icon>
              </div>
              <div class="d-flex flex-column align-center align-sm-start">
                <h3 class="text-cDark-darken-1 font-weight-regular">
                  Location
                </h3>
                <p class="text-blue-grey-lighten-1">Tehran-Punak-Koohsar</p>
              </div>
            </div>
            <div class="d-flex flex-column flex-sm-row align-sm-center mb-10">
              <div class="mr-sm-5">
                <v-icon size="50">mdi-cellphone</v-icon>
              </div>
              <div class="d-flex flex-column align-start">
                <h3 class="text-cDark-darken-1 font-weight-regular">
                  (+98) 903 757 9839
                </h3>
                <p class="text-blue-grey-lighten-1">Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div
              class="d-none d-sm-flex flex-column flex-sm-row align-sm-center mb-10"
            >
              <div class="mr-sm-5">
                <v-icon size="50">mdi-email-outline</v-icon>
              </div>
              <div class="d-flex flex-column align-start">
                <h3 class="text-cDark-darken-1 font-weight-regular">
                  erfanmorshedzade1376@gmail.com
                </h3>
                <p class="text-blue-grey-lighten-1">
                  Send me your query anytime!
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      messageInput: "",
      nameInput: "",
      emailInput: "",
      subjectInput: "",
      messageDeliveryStatus: "clear",
      mRules: [
        (value) => {
          if (value && value.length >= 10) return true;
          else if (value && value.length < 10)
            return "Message can't be lower than 10 character";
          else return "Message is required";
        },
      ],
      nRules: [
        (value) => {
          if (value && value.length >= 3) return true;
          else if (value && value.length < 3)
            return "Name can't be lower than 3 character";
          else return "Name is required";
        },
      ],
      sRules: [
        (value) => {
          if (value && value.length >= 1) return true;
          else return "Subject is required";
        },
      ],
      eRules: [(v) => !!(v || "").match(/@/) || "Please enter a valid email"],
    };
  },
  computed: {
    formValidity: function () {
      return this.checkFormValidity();
    },
  },
  methods: {
    handleSubmit: function () {
      if (this.checkFormValidity()) {
        // Do Action
        console.log({
          name: this.nameInput,
          message: this.messageInput,
          email: this.emailInput,
          subject: this.subjectInput,
        });

        // message delivery declaration
        this.messageDeliveryStatus = "waiting";
        setTimeout(() => {
          this.messageDeliveryStatus = "recived";
          setTimeout(() => {
            this.messageDeliveryStatus = "clear";
            this.nameInput = "";
            this.messageInput = "";
            this.emailInput = "";
            this.subjectInput = "";
          }, 2500);
        }, 3500);

        // const newWord = {
        //   groupId: this.groupId,
        //   question: this.question,
        //   answer: this.answer,
        // };
        // this.$store.dispatch("submitNewWord", newWord);

        // // Close Dialog
        // this.isActive.value = false;
      }
    },
    checkFormValidity: function () {
      if (
        this.mRules[0](this.messageInput) === true &&
        this.nRules[0](this.nameInput) === true &&
        this.eRules[0](this.emailInput) === true &&
        this.sRules[0](this.subjectInput) === true
      )
        return true;
      else return false;
    },
  },
};
</script>

<style scoped>
.contact {
  position: relative;
  width: 100%;
  height: 100vh;
}

@media (max-width: 600px) {
  .submit-btn {
    width: 100%;
  }
}

.delivery-enter-from,
.delivery-leave-to {
  opacity: 0;
}

.delivery-enter-active,
.delivery-leave-active {
  transition: opacity 0.4s ease;
}

.delivery-enter-to,
.delivery-leave-from {
  opacity: 1;
}
</style>
