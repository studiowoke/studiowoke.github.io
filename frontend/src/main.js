import Vue from 'vue'
//import App from './App.vue'
import NavBar from './components/NavBar.vue'
import HeroBox from './components/HeroBox.vue'
import SideBar from './components/SideBar.vue'

import {navbarLinks, sidebarLinks } from "../../settings"


Vue.config.productionTip = false
//Vue.use(vueCustomElement);


Vue.component('nav-bar', NavBar );
Vue.component('hero-box', HeroBox );
Vue.component('side-bar', SideBar );


const vm = new Vue({
    el: '#app',
    data:{
      navbarLinks,
      sidebarLinks
  }
});


/*
new Vue({
  el: '#app'
});


new Vue({
  render: h => h(NavBar),
}).$mount('body')
*/