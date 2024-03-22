<template>
    <div class="single-widget">
        <h3>Categories</h3>
        <ul class="list" v-for="category in categoryData" :key="category.id">
            <li>
                <RouterLink  :to="{name: 'categoryShow', params: {id:category.id}}">{{ category.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
import useCategories from '../components/composables/categoriesApi'
import { RouterLink } from 'vue-router'


const {categoryData, status} = useCategories()
onMounted(status)

// export default {
//   data() {
//     return {
//       links: [
//         { text: 'Accueil', url: '/adCreate' },
//         { text: 'Services', url: '/myAds' },
//         { text: 'À propos', url: '/about' },
//         { text: 'Contact', url: '/contact' }
//       ]
//     };
//   },
//   methods: {
//     isActiveLink(url) {
//       const currentRoute = useRouter().currentRoute;
//       return currentRoute.path === url;
//     }
//   }
// };



</script>