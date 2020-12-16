<template>
  <v-container>
    <v-row>
      <v-radio-group
        v-model="selectedAppealType"
        row
        dense
        mandatory
        >

        <v-radio
          v-for="(v, k) in appealTypes"
          :key="k"
          :label="v.text"
          :value="v"
          >
        </v-radio>

      </v-radio-group>

    </v-row>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title class="vocal"> Vocal </v-card-title>
          <v-card-text>
            <p></p>
            {{ selectedAppealType.text }}
            <p></p>
            <v-divider></v-divider>

            <p></p>
            <p>基礎： {{ vocalBase }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>スキル：{{ vocalAppeal('appeal', 'skill') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加1：{{ vocalAppeal('appeal', 'option1') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加2：{{ vocalAppeal('appeal', 'option2') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>リンク：{{ vocalAppeal('link', 'skill') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加1：{{ vocalAppeal('link', 'option1') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加2：{{ vocalAppeal('link', 'option2') }}</p>

          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card>
          <v-card-title class="dance"> Dance </v-card-title>
          <v-card-text>
            <p></p>
            {{ selectedAppealType.text }}
            <p></p>
            <v-divider></v-divider>

            <p></p>
            <p>基礎：{{ danceBase }}</p>
            <v-divider></v-divider>
            <p></p>
            <p>スキル：{{ danceAppeal('appeal', 'skill') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加1：{{ danceAppeal('appeal', 'option1') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加2：{{ danceAppeal('appeal', 'option2') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>リンク：{{ danceAppeal('link', 'skill') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加1：{{ danceAppeal('link', 'option1') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加2：{{ danceAppeal('link', 'option2') }}</p>


          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card>
          <v-card-title class="visual"> Visual </v-card-title>
          <v-card-text>
            <p></p>
            {{ selectedAppealType.text }}
            <p></p>
            <v-divider></v-divider>

            <p></p>
            <p>基礎： {{ visualBase }}</p>
            <v-divider></v-divider>
            <p></p>
            <p>スキル：{{ visualAppeal('appeal', 'skill') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加1：{{ visualAppeal('appeal', 'option1') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加2：{{ visualAppeal('appeal', 'option2') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>リンク：{{ visualAppeal('link', 'skill') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加1：{{ visualAppeal('link', 'option1') }}</p>

            <v-divider></v-divider>
            <p></p>
            <p>追加2：{{ visualAppeal('link', 'option2') }}</p>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Ability from '../../app/models/Ability'
  import AppealSkill from '../../app/models/AppealSkill'
  import SingleAppealSkill from '../../app/models/SingleAppealSkill'
  import DoubleAppealSkill from '../../app/models/DoubleAppealSkill'
  import TrippleAppealSkill from '../../app/models/TrippleAppealSkill'
  import MemoryAppeal from '../../app/models/MemoryAppeal'

  export default {
    props: {
      baseValues: {
        type: Object,
        default: function() {
          return {
            "le": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "vo": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "ce": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "da": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "vi": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
          }
        },
      },
      ability: {
        type: Object,
        default: null,
      },
      passiveBuff: { 
        type: Object,
        default: function(){ return {vo: 0, vi: 0, da: 0,} }
      },
      appealSkills: {
        type: Object,
        default: function() {
          return {
            appeal: {
              skill: null,
              option1: null,
              option2: null,
            },
            link: {
              skill: null,
              option1: null,
              option2: null,
            },
          }
        },
      },
    },
    data: function() {
      return {
        selectedAppealType: {'key':'excellent',   'text': 'Excellent',  'rate': 2 },
        appealTypes: [
          {'key':'excellent',   'text': 'Excellent',  'rate': 2 },
          {'key':'good'     ,   'text': 'Good',       'rate': 1.2 },
          {'key':'normal'   ,   'text': 'Normal',     'rate': 1 },
          {'key':'bad'      ,   'text': 'Bad',        'rate': 0.5 },
        ],
        appealValues: {
          "vo": {
            "appeal": {
              "skill": 0,
              "option1": 0,
              "option2": 0,
            },
            "link": {
              "skill": 0,
              "option1": 0,
              "option2": 0,
            },
          },
          "da": {
            "appeal": {
              "skill": 0,
              "option1": 0,
              "option2": 0,
            },
            "link": {
              "skill": 0,
              "option1": 0,
              "option2": 0,
            },
          },
          "vi": {
            "appeal": {
              "skill": 0,
              "option1": 0,
              "option2": 0,
            },
            "link": {
              "skill": 0,
              "option1": 0,
              "option2": 0,
            },

          }
        }
      }
    },
    computed: {
      vocalBase: function() {
        let as = new AppealSkill({'position': 'vo'})
        return as.calcUnitValue(this.baseValues, 'vo')
      },
      danceBase: function() {
        let as = new AppealSkill({'position': 'da'})
        return as.calcUnitValue(this.baseValues, 'da')
      },
      visualBase: function() {
        let as = new AppealSkill({'position': 'vi'})
        return as.calcUnitValue(this.baseValues, 'vi')
      },
      vocalAppealSkill: function() {
        if(!this.validateAppealSkills('appeal', 'skill')){ return 0; }

        let judge = 'vo'
        let exCor = this.selectedAppealType.rate
        let skillset = this.appealSkills['appeal']['skill']
        return this.buildAppealSkill(skillset).appeal(
          judge,
          this.baseValues,
          this.passiveBuff,
          this.buildAbility(this.ability).calcFixedBuff(),
          exCor
          )
      }
    },
    methods: {
      buildAppealSkill: function(skillset) {
        let skillobj = null
        switch( skillset.skill ) {
          case 'singleappealskill':
            skillobj = new SingleAppealSkill(skillset);
            break;
          case 'doubleappealskill':
            skillobj = new DoubleAppealSkill(skillset);
            break;
          case 'trippleappealskill':
            skillobj = new TrippleAppealSkill(skillset);
            break;
          case 'memoryappeal':
            skillobj = new MemoryAppeal(skillset);
            break;
          case 'null':
            skillobj = { appeal: function(){}}
            break;
          default:
            skillobj = { appeal: function(){console.log("dead")}}
        }
        return  skillobj
      },
      buildAbility: function(ability) {
        return new Ability(ability)
      },
      vocalAppeal: function(appealOrLink, skillSlot) {
        if(!this.validateAppealSkills(appealOrLink, skillSlot)){ return 0; }

        let judge = 'vo'
        let exCor = this.selectedAppealType.rate
        let skillset = this.appealSkills[appealOrLink][skillSlot]
        return this.buildAppealSkill(skillset).appeal(
          judge,
          this.baseValues,
          this.passiveBuff,
          this.buildAbility(this.ability).calcFixedBuff(),
          exCor
          )
      },
      danceAppeal: function(appealOrLink, skillSlot) {
        if(!this.validateAppealSkills(appealOrLink, skillSlot)){ return 0; }

        let judge = 'da'
        let exCor = this.selectedAppealType.rate
        let skillset = this.appealSkills[appealOrLink][skillSlot]
        return this.buildAppealSkill(skillset).appeal(
          judge,
          this.baseValues,
          this.passiveBuff,
          this.buildAbility(this.ability).calcFixedBuff(),
          exCor
          )
      },
      visualAppeal: function(appealOrLink, skillSlot) {
        if(!this.validateAppealSkills(appealOrLink, skillSlot)){ return 0; }

        let judge = 'vi'
        let exCor = this.selectedAppealType.rate
        let skillset = this.appealSkills[appealOrLink][skillSlot]
        return this.buildAppealSkill(skillset).appeal(
          judge,
          this.baseValues,
          this.passiveBuff,
          this.buildAbility(this.ability).calcFixedBuff(),
          exCor
          )
      },
      validateAppealSkills: function(appealOrLink, skillSlot) {
        return (this.appealSkills != null && 
          this.appealSkills[appealOrLink] != null &&
          this.appealSkills[appealOrLink][skillSlot] != null)
      },
    },
    watch: {
      appealSkills: function() {
        this.appealSkills.vo.appeal.skill = this.vocalAppeal('appeal', 'skill') 
      }
    }
  }
</script>

<style>
.vocal {
  background-color: #ff6666;
}

.dance {
  background-color: #043fef;
}

.visual {
  background-color: #ffff66;
}

</style>

