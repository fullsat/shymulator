<template>
  <div>
    <v-container>
      <position-select
        v-model="value.position"
        @input="emitAppealSkills('position', $event)"
        />

      <skill-ability-form
        :position="value.position"
        :value="value.appeal"
        :isMemory=true
        :baseValues="baseValues"
        @input="emitAppealSkills('appeal', $event)"
        label="スキル"
        />
      <skill-ability-form
        :position="value.position"
        :value="value.link"
        :isMemory=false
        :baseValues="baseValues"
        @input="emitAppealSkills('link', $event)"
        label="リンク"
        />
    </v-container>
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
      baseValues: {
        type: Object,
      }
    },
    methods: {
      emitAppealSkills: function(slot, event) {
        this.value[slot] = event
        this.$emit('input', this.value)
      }
    },
    watch: {
      'value.appeal.skill.skill': function(){
        if(this.value.appeal.skill.skill == 'memoryappeal') {
          this.value.position = "ce"
        }
      },
    }
  }
</script>
