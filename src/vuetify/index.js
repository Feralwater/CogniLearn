import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
    theme: {
    themes: {
      light: {
        colors: {
          primary: '#279eff',
          secondary: '#0c356a',
        }
      }
    }
  }
})

export default vuetify
