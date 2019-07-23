// import something here

// "async" is optional
export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && isAuthenticated()) {
      next('/login')
      console.log('hola')
    } else {
      next()
      console.log('adios')
    }
  })

  function isAuthenticated() {
    return false;
  }
  return router
}
