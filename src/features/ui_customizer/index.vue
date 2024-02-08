<template>
  <v-container><cc-title class="mb-2">Colorscheme-Core</cc-title>
    <v-divider />
    
    <v-row>
      <!--v-col>
        <v-color-picker v-model="colorpickerPrimary" mode="hexa" canvas-height="150" width="150" @update:color="updateUI"></v-color-picker>
        <span color="primary">Primary</span>
      </v-col-->
      <v-col>
        <v-color-picker v-model="colorpickerBackground" mode="hexa" @update:color="updateUI"></v-color-picker>
        Background
      </v-col>
      <v-col>
        <v-color-picker v-model="colorpickerPrimary" mode="hexa" @update:color="updateUI"></v-color-picker>
        Primary
      </v-col>
      <v-col>
        <v-color-picker v-model="colorpickerSecondary" mode="hexa" @update:color="updateUI"></v-color-picker>
        Secondary
      </v-col>
      <v-col>
        <v-color-picker v-model="colorpickerAccent" mode="hexa" @update:color="updateUI"></v-color-picker>
        Accent
      </v-col>
      <v-col>
        <v-color-picker v-model="colorpickerUIBG" mode="hexa" @update:color="updateUI"></v-color-picker>
        Headers
      </v-col>
    </v-row>
    <v-row>
      <v-switch v-model="themeMode" color="secondary" inset dense hide-details @change="updateUI">
        <span slot="label">
          Switch dark and light mode
          <cc-tooltip
            title="Thememode"
            :content="`Some UI-Elements are colored by the framework directly and cant (easily) be modified this mode switches them between white and dark colors`"
            inline
          >
            <v-icon>mdi-information-outline</v-icon>
          </cc-tooltip>
        </span>
      </v-switch>
      <cc-btn large color="success" @click="saveUI">save UI</cc-btn>
      later maybe import via textinput (shouldnt be that hard)
    </v-row>
    <br />

    <v-divider />
    <cc-title class="mb-2">dice menu</cc-title>
    <cc-dice-menu />
    <cc-dice-menu preset="2d6+1" title="preset 1" autoroll />
    <cc-dice-menu preset="2d6+1d20+3d8-9" :preset-accuracy="-2" title="preset 2" />

    <v-divider />
    <cc-title>typography</cc-title>
    <v-row class="mx-5">
      <v-col>
        <h1 class="heading">Heading 1</h1>
        <h2 class="heading">Heading 2</h2>
        <h3 class="heading">Heading 3</h3>
        <p class="heading table">Table Heading</p>
        <p class="heading mech">Mech Heading</p>
        <p class="heading sub">Subheading</p>
      </v-col>
      <v-col>
        <p class="body-text">Body Text</p>
        <ol class="body-text">
          <li>Ordered List Text</li>
        </ol>
        <br />
        <ul class="body-text">
          <li>Unordered List Text</li>
        </ul>
        <br />
        <p class="effect-text">Effect Text</p>
        <p class="fluff-text">Fluff Text</p>
        <p class="flavor-text">Flavor Text</p>
        <p class="stat-text">Stat Text</p>
        <p class="caption">Caption</p>
        <p class="overline">Overline</p>
      </v-col>
      <v-col>
        <p class="ra-quiet">RA Subtle Text</p>
        <p>
          <code>Code Text</code>
        </p>
        <p>
          <code class="horus">RA Text</code>
        </p>
      </v-col>
    </v-row>
    <v-divider class="ma-4" />
    <cc-title>glyphs</cc-title>
    <v-container grid-list-xs>
      <v-row dense>
        <v-col v-for="i in allIcons()" :key="i" dense style="min-width: 200px">
          <v-card outlined>
            <v-card-text class="text-center">
              <v-icon size="70px">cci-{{ i }}</v-icon>
              <br />
              <span class="caption">{{ i }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="ma-4" />
    <cc-title>titles</cc-title>
    <v-container>
      <cc-title small>cc-title element - small</cc-title>
      <br />
      <cc-title>cc-title element</cc-title>
      <br />
      <cc-title large>cc-title element - large</cc-title>
    </v-container>
    <v-divider class="ma-4" />
    <cc-title>buttons</cc-title>
    <v-container class="text-center">
      <v-row class="my-2">
        <v-col>
          <cc-btn small color="primary">small button</cc-btn>
        </v-col>
        <v-col>
          <cc-btn color="secondary">regular button</cc-btn>
        </v-col>
        <v-col>
          <cc-btn large color="info">large button</cc-btn>
        </v-col>
        <v-col>
          <cc-btn x-large color="success">x-large button</cc-btn>
        </v-col>
      </v-row>
      <v-row class="my-2">
        <v-col>
          <v-btn block color="primary" tile>block button</v-btn>
        </v-col>
        <v-col>
          <v-btn block color="primary" tile outlined>outlined block button</v-btn>
        </v-col>
        <v-col>
          <v-btn block color="primary" text>text block button</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <cc-title>dialogs</cc-title>
    <v-container class="text-center">
      <v-row class="my-2">
        <v-col>
          <cc-dialog small @confirm="dialog1Confirm()">
            <template v-slot:button>small dialog</template>
            <template v-slot:title>Small Dialog Box (v-slot:title)</template>
            Dialog contents
          </cc-dialog>
        </v-col>
        <v-col>
          <cc-dialog @confirm="dialog1Confirm()">
            <template v-slot:button>dialog</template>
            <template v-slot:title>Dialog Box (v-slot:title)</template>
            Dialog contents
          </cc-dialog>
        </v-col>
        <v-col>
          <cc-dialog large @confirm="dialog1Confirm()">
            <template v-slot:button>large dialog</template>
            <template v-slot:title>Large Dialog Box (v-slot:title)</template>
            Dialog contents
          </cc-dialog>
        </v-col>
      </v-row>
      <v-row class="my-2">
        <v-col>
          <!-- <cc-popup small @confirm="dialog1Confirm()">
            <template v-slot:button>popup</template>
            <template v-slot:title>CC-Popup</template>
            popup content
          </cc-popup> -->
        </v-col>
      </v-row>
    </v-container>

    <!-- Global Notifier -->
    <br />
    <cc-title>Global Notifier</cc-title>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-text-field v-model="notificationText" class="pt-0 mt-0" />
        </v-col>
        <v-col cols="3">
          <v-select v-model="notificationType" class="pt-0 mt-0" :items="notificationTypes" />
        </v-col>
        <v-col cols="2">
          <v-btn :disabled="!notificationText" @click="updateUI">Notify</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <cc-title class="mb-2">new talent ui</cc-title>

    <v-row dense>
      <cc-talent :talent="exampleTalents[0]" micro rank="2" selectable />
      <cc-talent :talent="exampleTalents[1]" micro rank="1" />
      <cc-talent :talent="exampleTalents[2]" micro />

      <cc-talent :talent="exampleTalents[0]" small rank="2" selectable />
      <cc-talent :talent="exampleTalents[1]" small rank="1" hide-locked />
      <cc-talent :talent="exampleTalents[2]" small />
    </v-row>
    <cc-talent :talent="exampleTalents[0]" terse rank="1" selectable />
    <cc-talent :talent="exampleTalents[1]" terse rank="3" />
    <cc-talent :talent="exampleTalents[2]" terse />
    <cc-talent :talent="exampleTalents[3]" rank="2" selectable />
    <cc-talent :talent="exampleTalents[0]" rank="1" />
    <cc-talent :talent="exampleTalents[1]" />
    
    <router-link to="/">
      <v-btn text x-large>back</v-btn>
    </router-link>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import { CompendiumStore } from '@/store'

const icons = [
  'npc-template',
  'license',
  'npc-feature',
  'npc-class',
  'squad',
  'status-downandout',
  'condition-immobilized',
  'condition-slow',
  'manufacturer',
  'condition-stunned',
  'condition-shredded',
  'condition-lock-on',
  'condition-jammed',
  'status-shut-down',
  'status-prone',
  'status-invisible',
  'status-hidden',
  'status-exposed',
  'status-engaged',
  'status-danger-zone',
  'activation-full',
  'activation-quick',
  'tech-full',
  'full-tech',
  'tech-quick',
  'quick-tech',
  'invade',
  'edef',
  'downtime',
  'evasion',
  'npc-tier-custom',
  'npc-tier-3',
  'npc-tier-2',
  'npc-tier-1',
  'free-action',
  'reaction',
  'reserve-tactical',
  'reserve-mech',
  'reserve-resource',
  'reserve-bonus',
  'system-point',
  'generic-item',
  'save',
  'sensor',
  'weapon-profile',
  'protocol',
  'drone',
  'skill',
  'talent',
  'grenade',
  'deployable',
  'content-manager',
  'campaign',
  'encounter',
  'compendium',
  'mine',
  'ship',
  'vehicle',
  'accuracy',
  'activate',
  'range',
  'burst',
  'cone',
  'line',
  'corebonus',
  'burn',
  'energy',
  'explosive',
  'heat',
  'kinetic',
  'variable',
  'deactivate',
  'condition-impaired',
  'difficulty',
  'frame',
  'melee',
  'overcharge',
  'pilot',
  'thrown',
  'reactor',
  'repair',
  'role-artillery',
  'role-controller',
  'role-striker',
  'role-support',
  'role-tank',
  'role-defender',
  'size-1',
  'size-2',
  'size-3',
  'size-4',
  'size-half',
  'structure',
  'system',
  'mech-system',
  'threat',
  'weaponmod',
  'weapon-mod',
  'trait',
  'weapon',
  'mech-weapon',
  'blast',
  'rank-1',
  'rank-2',
  'rank-3',
  'nested-hexagons',
  'orbit',
  'orbital',
  'large-beam',
  'ammo',
  'burning',
  'balance',
  'reticule',
  'spikes',
  'eclipse',
  'sword-array',
  'marker',
  'barrage',
]

export default Vue.extend({
  name: 'ui-customizer',
  data: () => ({
    notificationText: 'test',
    notificationTypes: ['achievement', 'confirmation', 'error'],
    notificationType: 'confirmation',
    exampleTalents: [],
    chargeExample: null,
    deployExample: null,
    droneExample: null,
    multipleExample: null,
    aiExample: null,
    techExample: null,
    reactionExample: null,
    genericExample: null,
    profileExample: null,
    onAttackExample: null,
    onHitExample: null,
    onCritExample: null,
    asDroneExample: null,

    themeMode: false,
    colorpickerPrimary: '#1976D2',
    colorpickerSecondary: '#1976D2',
    colorpickerAccent: '#1976D2',
    colorpickerBackground: '#1976D2',
    colorpickerUIBG: '#1976D2',

    themeColors: {
      frame: '#673AB7',
      system: '#58b434',
      'mech-system': '#58b434',
      'pilot-gear': '#58b434',
      trait: '#673AB7',
      protocol: '#1b6361',
      mod: '#00BFA5',
      'weapon-mod': '#00BFA5',
      structure: '#F50057',
      hp: '#0284FF',
      armor: '#82B1FF',
      'pilot-armor': '#82B1FF',
      heat: '#FF7043',
      stress: '#FF3D00',
      heatcap: '#EF5350',
      dangerzone: '#FF1744',
      repcap: '#8E8E8E',
      overcharge: '#F50057',
      corepower: '#00BFA5',

      'action--move': '#C62828',
      'action--full': '#283593',
      'action--quick': '#3949AB',
      'action--overcharge': '#F50057',
      'action--free': '#00695C',
      'action--protocol': '#007676',
      'action--tech': '#802475',
      'action--invade': '#222222',

      'damage--kinetic': '#757575',
      'damage--energy': '#29B6F6',
      'damage--explosive': '#FFA726',
      'damage--burn': '#B71C1C',
      'damage--heat': '#FF7043',
      'damage--variable': '#D500F9',

      'reserve--resource': '#00695C',
      'reserve--tactical': '#827717',
      'reserve--mech': '#BF360C',
      'reserve--project': '#5D4037',
      'reserve--custom': '#D84315',

      'role--striker': '#bd3f39',
      'role--defender': '#d67e08',
      'role--controller': '#398ad6',
      'role--support': '#6aa84f',
      'role--artillery': '#a64d79',
      'role--biological': '#7e52a3',

      'npc--feature': '#991E2A',
      'npc--trait': '#991E2A',
      'npc--system': '#58b434',
      'npc--weapon': '#212121',
      'npc--tech': '#007674',
      'npc--reaction': '#512DA8',

      enemy: '#C62828',
      ally: '#1661b8',
      neutral: '#455A64',

      // brand colors
      patreon: '#FF424D',
      primary: '#11ff11',
      exotic: '#673AB7',
      active: '#d93f4e',
      accent: '#8c1420',
      secondary: '#283593',
      pilot: '#424242',
      error: '#F44336',
      info: '#1565C0',
      success: '#00C853',
      warning: '#FFAB00',

      weapon: '#212121',
      'mech-weapon': '#212121',
      'pilot-weapon': '#212121',

      text: '#212121',
      subtle: '#9E9E9E',
      stark: '#000',
      anti: '#fff',
      'light-text': '#424242',
      'stark-text': '#000',

      background: '#f4f4f4',
      panel: '#ccc',
      tooltip: '#e8e8e8',
      'light-panel': '#dbdbdb',
      'dark-panel': '#d6d6d6',
      'panel-border': '#8a949e',
      'stark-panel': '#EDEDED',

      'action--downtime': '#37474F',
      'reserve--organization': '#455A64',
      'action--reaction': '#512DA8',
      'v-card': "#dbcfc3",
      'v-expansion-panel': "#dbcfc3",
      'v-data-table': "#dbcfc3",
  },//import gms add custom properties like v-card and then just update the whole thing like thee manaager and chug the whole object in the local storage
    
  }),
  mounted() {
    this.themeMode = this.$vuetify.theme.isDark
    this.colorpickerPrimary = this.$vuetify.theme.themes.dark.primary
    this.colorpickerSecondary = this.$vuetify.theme.themes.dark.secondary
    this.colorpickerAccent = this.$vuetify.theme.themes.dark.accent
    this.colorpickerBackground = this.$vuetify.theme.themes.dark.background
    //this.colorpickerBackground = this.$vuetify.theme.themes.dark.background
    //this.colorpickerUIBG = this.$vuetify.theme.themes.dark.'v-card'
    //'v-expansion-panel': "#dbcfc3",
    //'v-data-table': "#dbcfc3",
  },
  computed: {
    process() {
      return process
    },
    env() {
      return process.env
    },
  },
  created() {
    const s = getModule(CompendiumStore, this.$store)
    this.genericExample = s.MechSystems.find(x => x.ID === 'ms_eva_module')
    this.chargeExample = s.MechSystems.find(x => x.ID === 'ms_pattern_a_smoke_charges')
    this.deployExample = s.MechSystems.find(x => x.ID === 'ms_pattern_a_jericho_deployable_cover')
    this.droneExample = s.MechSystems.find(x => x.ID === 'ms_turret_drones')
    this.multipleExample = s.MechSystems.find(x => x.ID === 'ms_reinforced_cabling')
    this.aiExample = s.MechSystems.find(x => x.ID === 'ms_sekhmet_class_nhp')
    this.techExample = s.MechSystems.find(x => x.ID === 'ms_neurospike')
    this.reactionExample = s.MechSystems.find(x => x.ID === 'ms_singularity_motivator')
    this.profileExample = s.MechWeapons.find(x => x.ID === 'mw_siege_cannon')
    this.onAttackExample = s.MechWeapons.find(x => x.ID === 'mw_plasma_thrower')
    this.onHitExample = s.MechWeapons.find(x => x.ID === 'mw_annihilator')
    this.onCritExample = s.MechWeapons.find(x => x.ID === 'mw_chain_axe')
    this.asDroneExample = s.MechWeapons.find(x => x.ID === 'mw_ghast_nexus')
    this.exampleTalents = s.Talents.sort(() => 0.5 - Math.random()).slice(0, 4)
    console.log(this.exampleTalents)
  },
  methods: {
    allIcons() {
      return icons.slice(0,5)
    },
    dialog1Confirm() {
      console.log('dialog 1 confirmed')
    },
    doNotify() {
      this.$notify(this.notificationText, this.notificationType, () =>
        console.log('yup, you clicked the notification!', this)
      )
    },
    
    updateUI() {
      this.$vuetify.theme.isDark=this.themeMode
      if(this.$vuetify.theme.isDark){
        this.$vuetify.theme.themes.dark.primary=this.colorpickerPrimary
        this.$vuetify.theme.themes.dark.secondary=this.colorpickerSecondary
        this.$vuetify.theme.themes.dark.accent=this.colorpickerAccent
        this.$vuetify.theme.themes.dark.background=this.colorpickerBackground
        this.$vuetify.theme.themes.dark={'v-card': this.colorpickerUIBG, 'v-expansion-panel': this.colorpickerUIBG, 'v-data-table': this.colorpickerUIBG}
        this.$vuetify.theme.themes.dark=this.themeColors
      } else {
        this.$vuetify.theme.themes.light.primary=this.colorpickerPrimary
        this.$vuetify.theme.themes.light.secondary=this.colorpickerSecondary
        this.$vuetify.theme.themes.light.accent=this.colorpickerAccent
        this.$vuetify.theme.themes.light.background=this.colorpickerBackground
        this.$vuetify.theme.themes.light={'v-card': this.colorpickerUIBG, 'v-expansion-panel': this.colorpickerUIBG, 'v-data-table': this.colorpickerUIBG} 
        this.$vuetify.theme.themes.light=this.themeColors   
      }
    },
    saveUI() {
      console.info("saving custom theme")
      localStorage.setItem("customThemeMode", this.$vuetify.theme.isDark.toString())
      if(this.$vuetify.theme.isDark){
        console.info(this.$vuetify.theme.themes.dark)
        localStorage.setItem("customTheme", JSON.stringify(this.$vuetify.theme.themes.dark))
      }
      if(!this.$vuetify.theme.isDark){
        console.info(this.$vuetify.theme.themes.light)
        localStorage.setItem("customTheme", JSON.stringify(this.$vuetify.theme.themes.light))
      }
    },
  },
})
</script>
