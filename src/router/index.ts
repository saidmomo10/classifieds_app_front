import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LogIn.vue'
import SignUpView from '../views/SignUp.vue'
import AdsListView from '@/views/AdsList.vue'
import CategoryView from '../views/CategoryView.vue'
import RolesView from '@/views/RolesView.vue'
import UsersView from '@/views/UsersView.vue'
import AdShowView from '@/views/AdShow.vue'
import CategoryShowView from '@/views/CategoryShow.vue'
import AdcreateView from '@/views/AdcreateView.vue'
import MyadsView from '@/views/MyadsView.vue'
import useUserRoles from '@/components/composables/userRoleApi'
import UnauthorizedView from '../views/UnauthorizedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
      meta: { requiresAuth: true, requiredRole: 'Admin' }

    },
    {
      path: '/adCreate',
      name: 'adCreate',
      component: AdcreateView,
      meta: { requiresAuth: true }
    },
    {
      path: '/myAds',
      name: 'myAds',
      component: MyadsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/adsList',
      name: 'adsList',
      component: AdsListView
    },
    {
      path: '/roles',
      name: 'roles',
      component: RolesView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/ad/:id',
      name: 'adShow',
      component: AdShowView
    },
    {
      path: '/category/:id',
      name: 'categoryShow',
      component: CategoryShowView
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: UnauthorizedView
    },
  ]
})

// console.log(statusData);

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  // Assurez-vous que vous avez le rôle de l'utilisateur avant de passer à la navigation
  const { userRole, getUserRole } = useUserRoles(); // Obtenez les fonctions getUserRole et userRole
  await getUserRole(); // Obtenez le rôle de l'utilisateur
  const userRoleValue = userRole.value; // Obtenez la valeur du rôle de l'utilisateur
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
  } else if (to.meta.requiredRole && userRoleValue !== to.meta.requiredRole) {
    next('/unauthorized'); // Rediriger vers une page non autorisée si l'utilisateur n'a pas le rôle requis
  } else {
    next(); // Autoriser la navigation
  }
});

export default router
