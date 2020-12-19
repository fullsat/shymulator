<template>
  <v-card>
    <v-card-text class="pb-0">
      <div>
        <v-row dense>
          <v-col cols="2">
             {{ label }}
          </v-col>
          <v-col cols="10">
            <v-select
              v-if="isMemory"
              v-model="value.skill.skill"
              @change="initSkill('skill', value.skill.skill)"
              :items="skillKeysMain"
              item-text="desc"
              item-value="key"
              dense>
            </v-select>
            <v-select
              v-else
              v-model="value.skill.skill"
              @change="initSkill('skill', value.skill.skill)"
              :items="skillKeysOption"
              item-text="desc"
              item-value="key"
              dense>
            </v-select>

            <single-appeal-form
              v-if="value.skill.skill == 'singleappealskill'"
              :value="value.skill"
              :position="position"
              v-on:input="emitSkillObjects('skill', $event)"
              />

            <double-appeal-form
              v-if="value.skill.skill == 'doubleappealskill'"
              :value="value.skill"
              :position="position"
              v-on:input="emitSkillObjects('skill', $event)"
              />

            <tripple-appeal-form
              v-if="value.skill.skill == 'trippleappealskill'"
              :value="value.skill"
              :position="position"
              v-on:input="emitSkillObjects('skill', $event)"
              />

            <memory-appeal-form
              v-if="value.skill.skill == 'memoryappeal'"
              :value="value.skill"
              :baseValues="baseValues"
              v-on:input="emitSkillObjects('skill', $event)"
              />

          </v-col>
        </v-row>
      </div>

      <v-divider></v-divider>
      <div>
        <v-row dense>
          <v-col cols="2">
            追加効果1
          </v-col>
          <v-col cols="10">
            <v-select
              v-model="value.option1.skill"
              @change="initSkill('option1', value.option1.skill)"
              :items="skillKeysOption"
              item-text="desc"
              item-value="key"
              dense>
            </v-select>

            <single-appeal-form
              v-if="value.option1.skill == 'singleappealskill'"
              :value="value.option1"
              :position="position"
              v-on:input="emitSkillObjects('option1', $event)"
              />

            <double-appeal-form
              v-if="value.option1.skill == 'doubleappealskill'"
              :value="value.option1"
              :position="position"
              v-on:input="emitSkillObjects('option1', $event)"
              />

            <tripple-appeal-form
              v-if="value.option2.skill == 'trippleappealskill'"
              :value="value.option1"
              :position="position"
              v-on:input="emitSkillObjects('option1', $event)"
              />

          </v-col>
        </v-row>
      </div>

      <v-divider></v-divider>

      <div>
        <v-row dense>
          <v-col cols="2">
            追加効果2
          </v-col>
          <v-col cols="10">
            <v-select
              v-model="value.option2.skill"
              @change="initSkill('option2', value.option2.skill)"
              :items="skillKeysOption"
              item-text="desc"
              item-value="key"
              dense>
            </v-select>
            <single-appeal-form
              v-if="value.option2.skill == 'singleappealskill'"
              :value="value.option2"
              :position="position"
              v-on:input="emitSkillObjects('option2', $event)"
              />

            <double-appeal-form
              v-if="value.option2.skill == 'doubleappealskill'"
              :value="value.option2"
              :position="position"
              v-on:input="emitSkillObjects('option2', $event)"
              />

            <tripple-appeal-form
              v-if="value.option2.skill == 'trippleappealskill'"
              :value="value.option2"
              :position="position"
              v-on:input="emitSkillObjects('option2', $event)"
              />

          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  import SingleAppealForm from './skills/SingleAppealForm'
  import TrippleAppealForm from './skills/TrippleAppealForm'
  import DoubleAppealForm from './skills/DoubleAppealForm'
  import MemoryAppealForm from './skills/MemoryAppealForm'

  export default {
    props: {
      label: {
        type: String,
        default: function() { return "" }
      },
      isMemory: {
        type: Boolean,
        default: function() { return false }
      },
      baseValues: {
        type: Object,
      },
      position: {
        type: String,
        default: function() { return "le" }
      },
      value: {
        type: Object,
        default: function() {
          return {
            skill: { skill: 'null', },
            option1:{ skill: 'null', }, 
            option2: { skill: 'null',},
          }
        }
      }
    },
    components: {
      SingleAppealForm,
      DoubleAppealForm,
      TrippleAppealForm,
      MemoryAppealForm,
    },
    data () {
      return {
        skillKeysMain: [
          { key: 'singleappealskill', desc: 'X倍アピール' },
          { key: 'doubleappealskill', desc: 'N X倍＆M Y倍アピール' },
          { key: 'trippleappealskill', desc: 'vo X倍＆da Y倍＆vi Z倍アピール' },
          { key: 'memoryappeal', desc: '思い出アピール' },
        ],
        skillKeysOption: [
          { key: 'singleappealskill', desc: 'X倍アピール' },
          { key: 'doubleappealskill', desc: 'N X倍＆M Y倍アピール' },
          { key: 'trippleappealskill', desc: 'vo X倍＆da Y倍＆vi Z倍アピール' },
        ],
      }
    },
    methods: {
      initSkill: function(slot, key) {
        let skill = {skill: 'null', }
        let bonuslist = [0, 0, 0.2, 0.030, 0.05, 0.075]
        let bonus = bonuslist[this.baseValues.le.memory] + 
          bonuslist[this.baseValues.vo.memory] + 
          bonuslist[this.baseValues.da.memory] + 
          bonuslist[this.baseValues.vi.memory]

        switch(key) {
          case 'singleappealskill': 
            skill  = {
              skill: 'singleappealskill',
              position: 'le',
              power: 0,
              target: "",
              attribute: "vo",
            }
            break;
          case 'doubleappealskill': 
            skill = {
              skill: 'doubleappealskill',
              position: 'le',
              power: [0,0],
              target: "",
              attribute: ["vo","vi"],
            }
            break;
          case 'trippleappealskill': 
            skill = {
              skill: 'trippleappealskill',
              position: 'le',
              power: {"vo": 0, "da": 0, "vi": 0},
              target: "",
            }
            break;
          case 'memoryappeal': 
            skill = {
              skill: 'memoryappeal',
              position: 'ce',
              memlv: this.baseValues.ce.memory,
              memlvbonus: bonus,
              target: "all",
            }
            break;
        }
        this.emitSkillObjects(slot, skill)
      },
      emitSkillObjects: function(slot, $event) {
        this.value[slot] = $event
        this.$emit('input', this.value)
      },
    },
  }
</script>

