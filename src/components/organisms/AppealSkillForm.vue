<template>
  <div>
    <v-tabs>
      <v-tab @click="isMemory = false"> スキル </v-tab>
      <v-tab @click="isMemory = true" > 思い出 </v-tab>

      <v-tab-item>
        <v-container>
          <position-select
            v-model="position"
            @input="emitAppealSkills()"
            />
          <skill-ability-form
            :position="position"
            v-model="appealSkills['appeal']"
            label="スキル"
            @input="emitAppealSkills()"
            />
          <skill-ability-form
            :position="position"
            v-model="appealSkills['link']"
            label="リンク"
            @input="emitAppealSkills()"
            />
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container>
          <skill-ability-form
            :position="position"
            v-model="appealSkills['appeal']"
            label="スキル"
            @input="emitAppealSkills()"
            :isMemory="isMemory"
            />
          <skill-ability-form
            :position="position"
            v-model="appealSkills['link']"
            label="リンク"
            @input="emitAppealSkills()"
            />
        </v-container>
      </v-tab-item>

    </v-tabs>
  </div>
</template>

<script>
  import PositionSelect from '../molecules/PositionSelect'
  import SkillAbilityForm from '../molecules/SkillAbilityForm'

  export default {
    components: {
      PositionSelect,
      SkillAbilityForm,
    },
    props: {
      initialAppealSkills: {
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
    data () {
      return {
        isMemory: false,
        appealSkills: this.initialAppealSkills,
        position: null,
      }
    },
    methods: {
      emitAppealSkills: function() {
        return this.$emit('input', this.appealSkills)
      },
    }
  }
</script>
