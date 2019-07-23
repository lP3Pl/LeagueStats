
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/myprofileLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ],
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    component: () => import('layouts/basicLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Login.vue')}
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/basicLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Register.vue')}
    ]
  },
  {
    path: '/modify',
    component: () => import('layouts/myprofileLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Modify.vue') }
    ],
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/summonerInfo',
    component: () => import('layouts/myprofileLayout.vue'),
    children: [
      { path: '', component: () => import('pages/summonerPage')}
    ],
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/champion',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Champion.vue') }
    ]
  },
  {
    path: '/home/champion',
    component: () => import('layouts/myprofileLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Champion.vue') }
    ],
    meta: {
      requiresAuth: true,
    }
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
