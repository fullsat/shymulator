<template>
  <v-card>
    <v-card-text class="pb-0">
      <div v-if="isMemory">
        <v-row dense>
          <v-col cols="2">
            思い出アピール
          </v-col>
          <v-col cols="10">
            <tripple-appeal-form
              :fixed=true
              :position="position"
              initialTarget="all"
              v-model="skillObjects['skill']"
              v-on:input="emitSkillObjects()"
              />
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row dense>
          <v-col cols="2">
             {{ label }}
          </v-col>
          <v-col cols="10">
            <v-select
              v-model="selectedValue[0]"
              :items="skillKeys"
              item-text="desc"
              item-value="key"
              dense>
            </v-select>

            <single-appeal-form
              v-if="selectedValue[0] == 'single'"
              :position="position"
              v-model="skillObjects['skill']"
              v-on:input="emitSkillObjects()"
              />

            <tripple-appeal-form
              v-if="selectedValue[0] == 'tripple'"
              :position="position"
              v-model="skillObjects['skill']"
              v-on:input="emitSkillObjects()"
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
              v-model="selectedValue[1]"
              :items="skillKeys"
              item-text="desc"
              item-value="key"
              dense>
            </v-select>

            <single-appeal-form
              v-if="selectedValue[1] == 'single'"
              :position="position"
              v-model="skillObjects['option1']"
              v-on:input="emitSkillObjects()"
              />

            <tripple-appeal-form
              v-if="selectedValue[1] == 'tripple'"
              :position="position"
              v-model="skillObjects['option1']"
              v-on:input="emitSkillObjects()"
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
              v-model="selectedValue[2]"
              :items="skillKeys"
              item-text="desc"
              item-value="key"
              dense>
            </v-select>
            <single-appeal-form
              v-if="selectedValue[2] == 'single'"
              :position="position"
              v-model="skillObjects['option2']"
              v-on:input="emitSkillObjects()"
              />

            <tripple-appeal-form
              v-if="selectedValue[2] == 'tripple'"
              :position="position"
              v-model="skillObjects['option2']"
              v-on:input="emitSkillObjects()"
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
  //import DoubleAppealForm from './skills/DoubleAppealForm'

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
      position: {
        type: String,
        default: function() { return null }
      },
    },
    components: {
      SingleAppealForm,
      TrippleAppealForm,
    },
    data () {
      return {
        selectedValue: ['', '', ''],
        skillKeys: [
          { key: 'single', desc: 'X倍アピール' },
          { key: 'double', desc: 'N X倍＆M Y倍アピール' },
          { key: 'tripple', desc: 'vo X倍＆da Y倍＆vi Z倍アピール' },
        ],
        skillObjects: {
          skill: null,
          option1: null,
          option2: null,
        }
      }
    },
    methods: {
      emitSkillObjects: function() {
        this.$emit('input', this.skillObjects)
      },
    }
  }
</script>

