import Main from './index.vue'

import Home from './Views/Home.vue'
import Search from './Views/SearchResults.vue'

import Licenses from './Views/Licenses.vue'
import Manufacturers from './Views/Manufacturers.vue'
import Frames from './Views/Frames.vue'
import Weapons from './Views/Weapons.vue'
import Systems from './Views/Systems.vue'
import PilotGear from './Views/PilotGear.vue'
import Skills from './Views/Skills.vue'
import NpcClasses from './Views/NpcClasses.vue'
import NpcFeatures from './Views/NpcFeatures.vue'
import NpcTemplates from './Views/NpcTemplates.vue'
import Statuses from './Views/Statuses.vue'
import Tags from './Views/Tags.vue'
import Reference from './Views/Reference.vue'
import CoreBonuses from './Views/CoreBonuses.vue'
import Talents from './Views/Talents.vue'
import Backgrounds from './Views/Backgrounds.vue'
import ActionEconomy from './Views/ActionEconomy.vue'
import Glossary from './Views/Glossary.vue'
import Reserves from './Views/Reserves.vue'
import Bonds from './Views/Bonds.vue'

import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        name: 'Compendium - Overview',
        component: Home,
      },
      {
        path: '/compendium/search',
        name: 'Compendium - Search Results',
        component: Search,
      },
      {
        path: '/compendium/licenses',
        name: 'Compendium - Licenses',
        component: Licenses,
      },
      {
        path: '/compendium/manufacturers',
        name: 'Compendium - Manufacturers',
        component: Manufacturers,
      },
      {
        path: '/compendium/frames',
        name: 'Compendium - Frames',
        component: Frames,
      },
      {
        path: '/compendium/weapons',
        name: 'Compendium - Weapons',
        component: Weapons,
      },
      {
        path: '/compendium/systems',
        name: 'Compendium - Systems',
        component: Systems,
      },
      {
        path: '/compendium/pilot_gear',
        name: 'Compendium - Pilot Gear',
        component: PilotGear,
      },
      {
        path: '/compendium/skills',
        name: 'Compendium - Skills',
        component: Skills,
      },
      {
        path: '/compendium/npc_classes',
        name: 'Compendium - NPC Classes',
        component: NpcClasses,
      },
      {
        path: '/compendium/npc_features',
        name: 'Compendium - NPC Features',
        component: NpcFeatures,
      },
      {
        path: '/compendium/npc_templates',
        name: 'Compendium - NPC Templates',
        component: NpcTemplates,
      },
      {
        path: '/compendium/statuses',
        name: 'Compendium - Statuses',
        component: Statuses,
      },
      {
        path: '/compendium/tags',
        name: 'Compendium - Tags',
        component: Tags,
      },
      {
        path: '/compendium/reference',
        name: 'Compendium - Reference',
        component: Reference,
      },
      {
        path: '/compendium/corebonuses',
        name: 'Compendium - Core Bonuses',
        component: CoreBonuses,
      },
      {
        path: '/compendium/talents',
        name: 'Compendium - Talents',
        component: Talents,
      },
      {
        path: '/compendium/backgrounds',
        name: 'Compendium - Backgrounds',
        component: Backgrounds,
      },
      {
        path: '/compendium/actions',
        name: 'Compendium - Actions',
        component: ActionEconomy,
      },
      {
        path: '/compendium/glossary',
        name: 'Compendium - Glossary',
        component: Glossary,
      },
      {
        path: '/compendium/reserves',
        name: 'Compendium - Reserves',
        component: Reserves,
      },
      {
        path: '/compendium/bonds',
        name: 'Compendium - Bonds',
        component: Bonds,
      },
    ],
  },
]

export default routes
