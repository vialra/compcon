import Main from './index.vue'

import Roster from './Roster/index.vue'
import Print from './Print/index.vue'
import Active from './ActiveSheet/index.vue'
import Level from './Level/index.vue'

import Sheet from './PilotSheet/index.vue'
import Layout from './PilotSheet/layouts/index.vue'
import MechSheet from './PilotSheet/sections/mech/index.vue'

import New from './New/index.vue'

import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        name: 'Pilot Roster',
        component: Roster,
      },
      {
        path: '/print/:pilotID/:mechID',
        name: 'Sheet Printout',
        component: Print,
        props: true,
      },
      {
        path: '/pilot/:pilotID',
        component: Sheet,
        props: true,
        children: [
          {
            name: 'Dossier',
            path: '',
            redirect: 'sheet/1',
          },
          {
            name: 'Tactical Profile',
            path: '',
            redirect: 'sheet/2',
          },
          {
            name: 'Mech Hangar',
            path: '',
            redirect: 'sheet/3',
          },
          {
            path: 'sheet/:tab',
            name: 'Pilot Sheet',
            component: Layout,
            props: true,
          },
          {
            path: 'mech/:mechID',
            name: 'mech-sheet',
            component: MechSheet,
            props: true,
          },
        ],
      },
      {
        path: '/active/:pilotID',
        name: 'Active Sheet',
        props: true,
        component: Active,
      },
      {
        path: 'level/:pilotID',
        name: 'Level Up',
        props: true,
        component: Level,
      },
      {
        path: '/new',
        name: 'New Pilot',
        component: New,
      },
    ],
  },
]

export default routes
