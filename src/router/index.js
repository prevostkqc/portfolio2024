import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
];


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
              title: 'Kévin Prévost - Développeur Front-end',
              metaTags: [
                {
                  name: 'description',
                  content: 'Kévin Prévost - Développeur Front-end'
                },
                {
                  property: 'og:description',
                  content: 'Kévin Prévost - Développeur Front-end'
                }
              ]
            }
        },
        {
          path: '/browser', // Le chemin URL pour ta nouvelle vue
          name: 'browser',
          component: BrowserVue // Le composant à utiliser
        }
    ]
  });
  
  router.afterEach((to, from) => {
    document.title = to.meta.title || 'Kévin Prévost - Développeur Front-end';
  });
  
export default router;