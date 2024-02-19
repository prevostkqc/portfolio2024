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
        }
    ]
  });
  
  router.afterEach((to, from) => {
    // Définir le titre de la page à partir de la route courante
    document.title = to.meta.title || 'Le Nom Par Défaut De Mon Site';
  });
  
export default router;