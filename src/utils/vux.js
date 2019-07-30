import Vue from 'vue'
import {
  XHeader,
  Search,
  XAddress,
  PopupPicker,
  Cell,
  Group,
  AlertPlugin
} from 'vux'
Vue.component('x-header', XHeader)
Vue.component('search', Search)
Vue.component('x-address', XAddress)
Vue.component('popup-picker', PopupPicker)
Vue.component('cell', Cell)
Vue.component('group', Group)
Vue.use(AlertPlugin)
