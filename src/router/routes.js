
const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'auth', component: () => import('pages/auth.vue') },
      { path: 'about', component: () => import('pages/static/about.vue') },
      { path: 'rating', component: () => import('pages/static/rating.vue') },
      { path: 'info', component: () => import('pages/static/info.vue') },
      { path: 'rules', component: () => import('pages/static/rules.vue') },
      { path: 'contacts', component: () => import('pages/static/contacts.vue') },
      { path: 'feedback', component: () => import('pages/static/feedback.vue') },
      { path: 'game', component: () => import('pages/game.vue') },

    ]
  },
  {
    path: '/lk',
    component: () => import('layouts/LkLayout.vue'),
    children: [
      { path: 'profile', component: () => import('pages/lk/profile') },
      { path: 'stats', component: () => import('pages/lk/stats') },
      { path: 'balance', component: () => import('pages/lk/balance') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
