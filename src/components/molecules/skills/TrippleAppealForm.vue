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
          v-model="value.target"
          :disabled="fixed"
          dense
        >
        </v-select>
      </v-col>

      <v-col cols="3">
      Vo
      </v-col>
      <v-col cols="3">
        <v-text-field
          type="number"
          v-model="value.power['vo']"
          @input="emitAppealWithKey('power', 'vo', $event)"
          dense
        >
        </v-text-field>
      </v-col>
      倍アピール
    </v-row>

    <v-row dense>
      <v-col cols="3"> </v-col>
      <v-col cols="3">
      Da
      </v-col>
      <v-col cols="3">
        <v-text-field
          type="number"
          v-model="value.power['da']"
          @input="emitAppealWithKey('power', 'da', $event)"
          dense
        >
        </v-text-field>
      </v-col>
      倍アピール
    </v-row>

    <v-row dense>
      <v-col cols="3"> </v-col>
      <v-col cols="3">
      Vi
      </v-col>
      <v-col cols="3">
        <v-text-field
          type="number"
          v-model="value.power['vi']"
          @input="emitAppealWithKey('power', 'vi', $event)"
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
            power: {"vo": 0, "vi": 0, "da": 0},
            target: "",
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
      }
    },
    methods: {
      emitAppealWithKey: function(k, a ,v) {
        this.value[k][a] = v
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
    }

  }
</script>
