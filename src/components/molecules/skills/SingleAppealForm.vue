<template>
  <div>
    <v-row dense>
      <v-col cols="4">
        <v-select
          label="対象"
          :items="skillTargets"
          item-text="desc"
          item-value="key"
          :value="value.target"
          @input="emitAppeal('target', $event)"
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
          :value="value.attribute"
          @input="emitAppeal('attribute', $event)"
          dense
        >
        </v-select>
      </v-col>

      <v-col cols="2">
        <v-text-field
          type="number"
          @input="emitAppeal('power', $event)"
          :value="value.power"
          dense
        >
        </v-text-field>
      </v-col>
      倍アピール
    </v-row>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: function() {
          return {
            skill: 'singleappealskill',
            position: 'le',
            power: 0,
            target: "",
            attribute: "vo",
          }
        }
      },
      position: {
        type: String,
        default: function() { return "le"; }
      },
    },
    data: function() {
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
      }
    },
    methods: {
      emitAppeal: function(k, v) {
        this.value[k] = v
        this.$emit('input', this.value);
      },
    },
    watch: {
      position: function(){
        this.emitAppeal('position', this.position)
      }
    }
  }
</script>
