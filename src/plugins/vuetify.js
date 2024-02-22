/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Custom Components
// import { VBtn } from 'vuetify/components/VBtn'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'customLight',
    variations: {
      colors: ['cPrimary', 'cSecondary', 'cError', 'cInfo', 'cWarning', 'cDark'],
      lighten: 4,
      darken: 4,
    },
    themes: {
      customLight: {
        dark: false,
        colors: {
          // We have omitted the standard color properties here to emphasize the custom one that we've added
          cLight: '#ECEFF1',
          cDark: '#37474F',
          cPrimary: '#85DCBf',
          cSecondary: '#00E676',
          cError: '#FF1744',
          cWarning: '#FF6F00',
          cInfo: '#00B0FF'
        },
      },
      customDark: {
        dark: true,
        colors: {
          // We have omitted the standard color properties here to emphasize the custom one that we've added
          cLight: '#37474F',
          cDark: '#ECEFF1',
          cPrimary: '#85DCBf',
          cSecondary: '#00E676',
          cError: '#00796B',
          cWarning: '#FF6F00',
          cInfo: '#00B0FF'
        },
      },
    }
  },
  // defaults: {
  //   VBtn: {
  //     style: [
  //       'border-radius: 0;',
  //       // 'border-width: 5px;'
  //     ]
  //   }
  // }
})


