<template>
  <div>
    <v-row dense>
      <v-col cols="4">
        <v-select
          label="対象"
          :items="skillTargets"
          item-text="desc"
          item-value="key"
          @input="emitAppeal()"
          v-model="selectedTarget"
          dense
        >
        </v-select>
      </v-col>

      <v-col cols="2">
        <v-select
          label="属性"
          :items="skillAttrs"
          item-text="desc"
          item-value="key"
          @input="emitAppeal()"
          v-model="selectedAttrs"
          dense
        >
        </v-select>
      </v-col>

      <v-col cols="2">
        <v-text-field
          v-model.number="skillPower"
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
  import SingleAppealSkill from '../../../app/models/SingleAppealSkill'

  export default {
    props: {
      position: {
        Type: String,
        default: function() { return null }
      },
    },
    data () {
      return {
        skillTargets: [
          { key: 'single', desc: '' },
          { key: 'all', desc: '全観客' },
        ],
        skillAttrs: [
          { key: 'vo', desc: 'Vo' },
          { key: 'da', desc: 'Da' },
          { key: 'vi', desc: 'Vi' },
          { key: 'ex', desc: 'Ex' },
        ],
        skillPower: 0,
        selectedTarget: null,
        selectedAttrs: null,
      }
    },
    methods: {
      emitAppeal: function() {
        if(this.position == null || this.skillPower == null || this.selectedAttrs == null){
          return;
        }

        this.$emit('input', new SingleAppealSkill({
          'position': this.position,
          'target': this.selectedTarget,
          'attribute': this.selectedAttrs,
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
