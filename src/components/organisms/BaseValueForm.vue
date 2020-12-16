<template>
  <div>
    <v-container>
      <v-row 
        v-for="(idol , position) in value"
        :key=position
        dense
        >

        <v-col
          cols="2">
          <v-card
            :color="unitPositions[position].color"
            tile
            outlined
            dense>
            {{ unitPositions[position].label }}
          </v-card>
        </v-col>

        <v-col 
          v-for="(val, bvk) in idol.baseValue"
          :key=bvk
          cols="2">
          <v-text-field
            :label="bvk"
            type="number"
            v-model=idol.baseValue[bvk]
            @input="emitBaseValues()"
            dense
            >
          </v-text-field>
        </v-col>

        <v-col
          cols="2">
          <v-select
            label="思い出Lv"
            :color="unitPositions[position].color"
            :items=[0,1,2,3,4,5]
            v-model=idol.memory
            @input="emitBaseValues()"
            dense>
          </v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: function() {
          return {
            "le": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "vo": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "ce": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "da": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "vi": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
          }
        },
      },
    },
    data () {
      return {
        unitPositions: {
          "le": { "color": "grey",   "label": "Le"},
          "vo": { "color": "red",    "label": "Vo"},
          "ce": { "color": "",       "label": "Ce"},
          "da": { "color": "blue",   "label": "Da"},
          "vi": { "color": "yellow", "label": "Vi"},
        },
      }
    },
    methods: {
      emitBaseValues: function() {
        this.$emit('input', this.value);
      },
    }

  }
</script>
