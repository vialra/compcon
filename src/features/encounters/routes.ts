import Main from './index.vue'

import Home from './landing.vue'

import NpcRoster from './npc/index.vue'
import NpcCard from './npc/NpcCard.vue'
import NewNpc from './npc/new/index.vue'

import EncounterBuilder from './encounter/index.vue'
import EncounterCard from './encounter/components/EncounterCard.vue'

import Mission from './mission/index.vue'
import MissionLanding from './mission/landing.vue'
import MissionBuilder from './mission/builder/index.vue'
import MissionCard from './mission/builder/MissionCard.vue'
import MissionSelector from './mission/runner/index.vue'
import MissionBriefing from './mission/runner/Briefing.vue'
import MissionRunner from './mission/runner/Active.vue'
import MissionDebriefing from './mission/runner/Debriefing.vue'

import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        name: 'GM Home',
        component: Home,
      },
      {
        path: '/gm/npc-roster',
        name: 'NPC Roster',
        component: NpcRoster,
      },
      {
        path: '/gm/new-npc',
        name: 'New NPC',
        component: NewNpc,
      },
      {
        path: '/gm/encounter-builder',
        name: 'Encounter Builder',
        component: EncounterBuilder,
        children: [
          {
            path: ':id',
            name: 'Encounter',
            component: EncounterCard,
            props: true,
          },
        ],
      },
      {
        path: '/gm/mission',
        component: Mission,
        children: [
          {
            path: '',
            name: 'Mission Home',
            component: MissionLanding,
          },
          {
            path: 'builder',
            name: 'Mission Builder',
            component: MissionBuilder,
            children: [
              {
                path: ':id',
                name: 'Mission Editor',
                component: MissionCard,
                props: true,
              },
            ],
          },
          {
            path: 'selector',
            name: 'Mission Selector',
            component: MissionSelector,
          },
          {
            path: 'briefing/:id',
            name: 'Mission Briefing',
            props: true,
            component: MissionBriefing,
          },
          {
            path: 'runner/:id',
            name: 'Mission Runner',
            props: true,
            component: MissionRunner,
          },
          {
            path: 'debriefing/:id',
            name: 'Mission Debriefing',
            props: true,
            component: MissionDebriefing,
          },
        ],
      },
    ],
  },
]

export default routes
