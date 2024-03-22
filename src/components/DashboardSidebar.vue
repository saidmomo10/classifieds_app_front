<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      links: [
        { text: 'Accueil', url: '/adCreate' },
        { text: 'Services', url: '/myAds' },
        { text: 'À propos', url: '/about' },
        { text: 'Contact', url: '/contact' }
      ]
    };
  },
  methods: {
    isActiveLink(url) {
      const currentRoute = useRouter().currentRoute;
      return currentRoute.path === url;
    }
  }
};
</script>

<style>
/* a.router-link-active{
    background-color: red;
} */
</style>


<template>
    <div class="dashboard-sidebar">
        <div class="user-image">
            <img src="" alt="#">
            <h3>Steve Aldridge
                <span><a href="javascript:void(0)">@username</a></span>
            </h3>
        </div>
        <div class="dashboard-menu">
            <ul>
                <li v-for="(link, index) in links" :key="index">
                    <router-link  :to="link.url" :class="{ 'nav-link': true, 'active': isActiveLink(link.url) }">{{ link.text }}</router-link></li>
                
            </ul>
            <div class="button">
                <a class="btn" href="javascript:void(0)">Logout</a>
            </div>
        </div>
    </div>
</template>
  