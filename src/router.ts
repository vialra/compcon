import Vue from 'vue'
import Router from 'vue-router'
import encounterRoutes from './features/encounters/routes'
import pilotRoutes from './features/pilot_management/routes'
import compendiumRoutes from './features/compendium/routes'
import { getModule } from 'vuex-module-decorators'
import { NavStore, store } from './store'
import updateChecker from './util/UpdateChecker'

Vue.use(Router)

const r = new Router({
  // mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'main-menu',
      component: require('@/features/main_menu/index').default,
    },
    {
      path: '/ui-test',
      name: 'ui-test',
      component: require('@/features/ui_test/index').default,
    },
    {
      path: '/ui-customizer',
      name: 'ui-customizer',
      component: require('@/features/ui_customizer/index').default,
    },
    ...compendiumRoutes.map(route => ({
      ...route,
      path: (route.path = '/compendium/' + route.path),
    })),
    ...pilotRoutes.map(route => ({
      ...route,
      path: (route.path = '/pilot_management/' + route.path),
    })),
    ...encounterRoutes.map(route => ({
      ...route,
      path: (route.path = '/gm/' + route.path),
    })),
    {
      path: '*',
      redirect: '/',
    },
  ],
})

r.beforeEach((to, from, next) => {
  const ns = getModule(NavStore, store)

  if (to.path.includes('/compendium')) ns.setNavMode('compendium')
  else if (to.path.includes('/pilot') || to.path.includes('/active') || to.path.includes('/new'))
    ns.setNavMode('pilot')
  else if (to.path.includes('/gm')) ns.setNavMode('encounter')
  else ns.setNavMode('')

  next()
})

r.afterEach((to, from) => {
  updateChecker.checkUpdates()
})

export default r
