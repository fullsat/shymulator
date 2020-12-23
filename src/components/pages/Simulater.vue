<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            基礎能力値入力
            <v-icon
              @click="openHelp('appealSkills')"
              medium
              >mdi-information</v-icon>
            <v-dialog
              v-model="overlay['appealSkills']">
              <v-card>
                <v-card-title>下の画像の画面の値を入力します</v-card-title>
                <v-card-text>
                  <img width="100%" src="../../assets/desc1.png"/>
                </v-card-text>
              </v-card>
            </v-dialog>
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
            <base-value-form 
              v-on:input="emitBaseValues()"
              :value="baseValues"
              />

            <v-divider></v-divider>
            <ability-form 
              :value="ability"
              v-on:input="emitAbility()"
              />
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
            <v-icon
              @click="openHelp('baseValues')"
              medium
              >mdi-information</v-icon>
            <v-dialog
              v-model="overlay['baseValues']">
              <v-card>
                <v-card-title>スキルの入力に関して</v-card-title>
                <v-card-text>
                  <p>追撃の部分も記載してますが、vo4倍、vo2倍をそれぞれ入力するよりはvo6倍と考えて入力した方が入力効率は良いです</p>
                  <p>現在注目度によって倍率が変わるようなスキルには対応していません</p>
                  <p>結局最大効率で撃つと思うので、最大の倍率を入力しておけばいいと思います。</p>
                  <p>それか普通に0.5とか書いておけば最小の値とかもわかるのでその辺は調整してください。</p>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card-title>
          <v-card-text>
            <appeal-skill-form
              v-on:input="emitAppealSkills($event)"
              :value="appealSkills"
              :baseValues="baseValues"
              />
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
            <passive-buff-form
              v-on:input="emitPassiveBuff()"
              :value="passiveBuff"
              />

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
            アピール値の結果
            <v-icon
              @click="openHelp('result')"
              medium
              >mdi-information</v-icon>
            <v-dialog
              v-model="overlay['result']">
              <v-card>
                <v-card-title>結果に関して</v-card-title>
                <v-card-text>
                  <p>基礎の値は、バフや相性など最終的な値を計算するための掛け算の元となる値になります</p>
                  <p>スキル所持者の基礎能力 * 2 + それ以外のメンバーの基礎能力 *0.5 * 4人分で計算されます</p>
                  <v-divider></v-divider>
                  <p>結果は独自の調査結果に基づくものです</p>
                  <p>正確な計算方法が公開されているわけでもないので間違ってたらすみません</p>
                  <p>計算結果に関してはおおよその目安と考えてください</p>
                  <p>切り捨て切り上げなど細かな点は考慮してません</p>
                  <p>アビリティのターンによってバフ値が変わる部分はほとんど考慮していません</p>
                  <p>ネットにあるだろう情報もあんま調べてません</p>
                  <p>結果によって生じた不都合の責任は持ちかねます</p>
                  <p>例えば、この計算結果を信じてはづきさんを使ったけど効果なかった、はづきさんのアイテム買うから補償しろなどは受け付けません</p>
                </v-card-text>
              </v-card>
            </v-dialog>

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
      }
    },
    ability: {
      type: Object,
      default: function() {
        return {
          "allrounder1": 0,
          "allrounder2": 0,
          "slowstarter": 0,
          "startdash": 0,
          "popular": 0,
          "quiet": 0,
          "memHigh": 0,
          "memLow": 0,
          "melancholy1": 0,
          "melancholy2": 0,
          "attention": 0,
          "modest": 0,
          "perfectly": 0,
          "mehealPlus": 0,
          "mehealMinus": 0,
          "bond": 0,
        }
      }
    },
    passiveBuff: {
      type: Object,
      default: function() {
        return {"vo": 0, "da": 0, "vi": 0}
      }
    },
    appealSkills: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: function (){
    return {
      abilityView: null,
      overlay: {
        baseValues: false,
        appealSkills: false,
        result: false,
      }
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
      let av = this.abilityView
      return av ? av.calcFixedBuff() : 0
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
    openHelp(target){
      this.overlay[target] = true
    },
    log(){
      console.log("hoge");
    },
    emitAbility: function() {
      this.abilityView = new Ability(this.ability)
      this.$emit('emit-ability', this.ability)
    },
    emitBaseValues: function() {
      this.$emit('emit-base-values', this.baseValues)
    },
    emitPassiveBuff: function() {
      this.$emit('emit-passive-buff', this.passiveBuff)
    },
    emitAppealSkills: function(event) {
      this.$emit('emit-appeal-skills', event)
    },
  },
};
</script>
