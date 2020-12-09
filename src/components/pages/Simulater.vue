<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            基礎能力値入力
          </v-card-title>
          <v-card-text>
            <p>
              Vo: {{ unitVocal }}
              <v-divider :vertical="true"></v-divider>
              Da: {{ unitDance }}
              <v-divider :vertical="true"></v-divider>
              Vi: {{ unitVisual }}
            </p>

            <v-divider></v-divider>
            <base-value-form v-model="baseValues" />

            <v-divider></v-divider>
            <ability-form v-model="ability" />
              {{ abilityBuff }}

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            アピールスキル効果入力
          </v-card-title>
          <v-card-text>
            <appeal-skill-form v-model="appealSkills" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            パッシブバフ補正
          </v-card-title>
          <v-card-text>
            <passive-buff-form v-model="passiveBuff" />

            <v-divider></v-divider>
            <p>
              アビリティとの合計：
              Vo: {{ vocalTotalBuff }}
              <v-divider :vertical="true"></v-divider>
              Da: {{ danceTotalBuff }}
              <v-divider :vertical="true"></v-divider>
              Vi: {{ visualTotalBuff }}
            </p>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            アピールスキル効果入力
          </v-card-title>
          <v-card-text>
            <appeal-value-view
              :baseValues="baseValues"
              :ability="ability"
              :passiveBuff="passiveBuff"
              :appealSkills="appealSkills"
              />
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import PassiveBuffForm from '../organisms/PassiveBuffForm';
import BaseValueForm from '../organisms/BaseValueForm';
import AbilityForm from '../organisms/AbilityForm';
import AppealSkillForm from '../organisms/AppealSkillForm';
import AppealValueView from '../organisms/AppealValueView';

import AppealSkill from '../../app/models/AppealSkill';
import Ability from '../../app/models/Ability';

export default {
  components: {
    BaseValueForm,
    AbilityForm,
    AppealSkillForm,
    PassiveBuffForm,
    AppealValueView ,
  },

  data: function (){
    return {
      baseValues: {
        "le": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
        "vo": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
        "ce": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
        "da": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
        "vi": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
      },
      ability: new Ability(),
      passiveBuff: {"vo": 0, "da": 0, "vi": 0},
      appealSkills: {},
    }
  },

  computed: {
    unitVocal: function() {
      let as = new AppealSkill({'position': 'vo'})
      return as.calcUnitValue(this.baseValues, 'vo')
    },
    unitDance: function() {
      let as = new AppealSkill({'position': 'da'})
      return as.calcUnitValue(this.baseValues, 'da')
    },
    unitVisual: function() {
      let as = new AppealSkill({'position': 'vi'})
      return as.calcUnitValue(this.baseValues, 'vi')
    },
    abilityBuff: function() {
      return this.ability.calcFixedBuff()
    },
    vocalTotalBuff: function() {
      return this.passiveBuff['vo'] + this.abilityBuff
    },
    danceTotalBuff: function() {
      return this.passiveBuff['da'] + this.abilityBuff
    },
    visualTotalBuff: function() {
      return this.passiveBuff['vi'] + this.abilityBuff
    },

  },
  methods: {
  },
};
</script>
