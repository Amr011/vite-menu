const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue'),
    meta: { title: 'Home' },
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: () => import('./views/About.vue'),
  },
  {
    path: '/roro',
    meta: { title: 'This Is My Title' },
    component: () => import('./views/Roro.vue'),
  },
  {
    // Not Found 404
    path: '/:path(.*)',
    component: () => import('./views/NotFound.vue'),
  },
]
export default routes
