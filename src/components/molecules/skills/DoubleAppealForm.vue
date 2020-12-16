<template>
  <div>
    <v-row dense>
      <v-col cols="4">
        <v-select
          label="対象"
          :items="skillTargets"
          item-text="desc"
          item-value="key"
          @input="emitAppeal('target', $event)"
          :value="value.target"
          dense
        >
        </v-select>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="2">
        <v-select
          label="属性"
          :items="skillAttrs"
          item-text="desc"
          item-value="key"
          @input="emitAppeal('attribute', 0, $event)"
          :value="value.attribute[0]"
          dense
        >
        </v-select>
      </v-col>

      <v-col cols="2">
        <v-text-field
          type="number"
          @input="emitAppeal('power', 0, $event)"
          :value="value.power[0]"
          dense
        >
        </v-text-field>
      </v-col>
      倍アピール
    </v-row>

    <v-row dense>
      <v-col cols="2">
        <v-select
          label="属性"
          :items="skillAttrs"
          item-text="desc"
          item-value="key"
          @input="emitAppeal('attribute', 1, $event)"
          :value="value.attribute[1]"
          dense
        >
        </v-select>
      </v-col>

      <v-col cols="2">
        <v-text-field
          type="number"
          @input="emitAppeal('power', 1, $event)"
          :value="value.power[1]"
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
            skill: 'doubleappealskill',
            position: 'le',
            power: [0, 0],
            target: "",
            attribute: ["vo", "vi"],
          }
        }
      },
      position: {
        type: String,
        default: function() { return "le"; }
      },
    },
    data: function(){
      return {
        skillTargets: [
          { key: 'double', desc: '' },
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
      emitAppealWithIndex: function(k, i, v) {
        this.value[k][i] = v
        this.$emit('input', this.value);
      },
      emitAppeal: function(k, v) {
        this.value[k] = v
        this.$emit('input', this.value);
      },
    },
    watch: {
      position: function(){
        this.emitAppeal('position', this.position)
      }
    },
  }
</script>
