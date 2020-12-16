<template>
  <div>
    <v-tabs>
      <v-tab @click="toAppealSkill"> スキル </v-tab>
      <v-tab @click="toMemoryAppeal" > 思い出 </v-tab>

      <v-tab-item>
        <v-container>
          <position-select
            v-model="value.position"
            @input="emitAppealSkills('position', $event)"
            />

          <skill-ability-form
            :position="value.position"
            :value="value.appeal"
            @input="emitAppealSkills('appeal', $event)"
            label="スキル"
            />
          <skill-ability-form
            :position="value.position"
            :value="value.link"
            @input="emitAppealSkills('link', $event)"
            label="リンク"
            />
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container>
          <skill-ability-form
            :position="value.position"
            :value="value.appeal"
            @input="emitAppealSkills('appeal', $event)"
            label="スキル"
            :isMemory="true"
            />
          <skill-ability-form
            :position="value.position"
            :value="value.link"
            @input="emitAppealSkills('link', $event)"
            label="リンク"
            />
        </v-container>
      </v-tab-item>

    </v-tabs>
  </div>
</template>

<script>
  import SkillAbilityForm from '../molecules/SkillAbilityForm'
  import PositionSelect from '../molecules/PositionSelect'

  export default {
    components: {
      SkillAbilityForm,
      PositionSelect,
    },
    props: {
      value: {
        type: Object,
        default: function() {
          return {
            position: "le",
            appeal: {
              skill: { skill: "null" } ,
              option1: { skill: "null" } ,
              option2: { skill: "null" } ,
            },
            link: {
              skill: { skill: "null" } ,
              option1: { skill: "null" } ,
              option2: { skill: "null" } ,
            },
          }
        },
      },
    },
    data () {
      return {
        isMemory: false,
        prevPosition: null,
      }
    },
    methods: {
      toAppealSkill: function() {
        this.value.position = this.prevPosition
      },
      toMemoryAppeal: function() {
        this.prevPosition = this.value.position
        this.value.position = 'ce'
      },
      emitAppealSkills: function(slot, event) {
        this.value[slot] = event
        return this.$emit('input', this.value)
      },
    },
  }
</script>
