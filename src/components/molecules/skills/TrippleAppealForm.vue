<template>
  <div>
    <v-row dense>
      <v-col cols="3">
        <v-select
          label="対象"
          :items="skillTargets"
          item-text="desc"
          item-value="key"
          @input="emitAppeal()"
          v-model="selectedTarget"
          :disabled="fixed"
          dense
        >
        </v-select>
      </v-col>

      <v-col cols="3">
      Vo＆Da＆Vi
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="skillPower"
          :disabled="fixed"
          @input="emitAppeal()"
          dense
        >
        </v-text-field>
      </v-col>
      倍アピール
    </v-row>
  </div>
</template>

<script>
  import TrippleAppealSkill from '../../../app/models/TrippleAppealSkill'

  export default {
    props: {
      fixed: {
        type: Boolean,
        default: function() {
          return false
        }
      },
      initialPower: {
        type: Number,
        default: function() {
          return 2
        }
      },
      initialTarget: {
        type: String,
        default: function() {
          return ""
        }
      },
      position: {
        type: String,
        default: function() {
          return null
        }
      },
    },
    data () {
      return {
        skillTargets: [
          { key: 'single', desc: '' },
          { key: 'all', desc: '全観客' },
        ],
        skillPower: this.initialPower,
        selectedTarget: this.initialTarget,
      }
    },
    methods: {
      emitAppeal: function() {
        if(this.position == null || this.skillPower == null){
          return;
        }

        this.$emit('input', new TrippleAppealSkill({
          'position': this.position,
          'target': this.selectedTarget,
          'attribute': null,
          'power': this.skillPower,
        }));
      },
    },
    watch: {
      position: function(){
        this.emitAppeal()
      }
    }

  }
</script>
