import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'

import {
    Vuetify,
    VSpeedDial,
    VMenu,
    VDivider,
    VApp,
    VDialog,
    VCard,
    VNavigationDrawer,
    VDatePicker,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VBadge,
    VBtnToggle,
    VToolbar,
    VExpansionPanel,
    VForm,
    VTextField,
    VAlert,
    VDataTable,
    VSelect,
    VProgressLinear,
    VSubheader,
    VTabs,
    VAvatar,
    VSwitch,
    VToolTip,
    VCheckbox
} from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#121212', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
    components: {
        VApp,
        VBadge,
        VExpansionPanel,
        VBtnToggle,
        VDivider,
        VDialog,
        VSpeedDial,
        VMenu,
        VCard,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        VForm,
        VTextField,
        VSubheader,
        VProgressLinear,
        VDatePicker,
        VAlert,
        VDataTable,
        VTabs,
        VSelect,
        VAvatar,
        VSwitch,
        VToolTip,
        VCheckbox
    }
})
