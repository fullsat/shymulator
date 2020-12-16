<template>
  <div>
    <v-container>
      <v-row
        v-for="(v, k) in AbilityDescriptions"
        :key=k
        >

        <v-col
          v-if="v.abtype == 'buff'"
          cols="2">
          {{ v.text }}
        </v-col>

        <v-col
          v-if="v.abtype == 'buff'"
          cols="1">
          {{ value[k] }}
        </v-col>

        <v-col
          v-if="v.abtype == 'buff'"
          cols="9">
          <PMSlider
            :value="value[k]"
            :size=v.maxSize
            :disableLabels="v.maxSize > 15"
            v-on:input="emitAbilityValues(k, $event)"
            />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import PMSlider from '../molecules/PMSlider'

  export default {
    components: {
      PMSlider,
    },
    props: {
      value: {
        type: Object,
        default: function() {
          return {
            "allrounder1": 0,
            "allrounder2": 0,
            "slowstarter": 0,
            "startdash": 0,
            "popular": 0,
            "quiet": 0,
            "memHigh": 0,
            "memLow": 0,
            "melancholy1": 0,
            "melancholy2": 0,
            "attention": 0,
            "modest": 0,
            "perfectly": 0,
            "mehealPlus": 0,
            "mehealMinus": 0,
            "bond": 0,
          }
        },
      },
    },
    data () {
      return {
        AbilityDescriptions: {
          "slowstarter":  { "abtype": "buff",   "maxSize": 5,  "text": "スロースターター",},
          "startdash":    { "abtype": "buff",   "maxSize": 5,  "text": "スタートダッシュ",},
          "popular":      { "abtype": "buff",   "maxSize": 5,  "text": "人気者",},
          "quiet":        { "abtype": "buff",   "maxSize": 5,  "text": "物静か",},
          "memHigh":      { "abtype": "buff",   "maxSize": 5,  "text": "思い出高",},
          "memLow":       { "abtype": "buff",   "maxSize": 5,  "text": "思い出低",},
          "perfectly":    { "abtype": "buff",   "maxSize": 5,  "text": "パーフェクトリィ",},
          "bond":         { "abtype": "buff",   "maxSize": 20, "text": "絆",},
          "melancholy1":  { "abtype": "effect", "maxSize": 5,  "text": "メランコリー除去+",},
          "melancholy2":  { "abtype": "effect", "maxSize": 5,  "text": "メランコリー除去++",},
          "attention":    { "abtype": "effect", "maxSize": 5,  "text": "注目の的",},
          "modest":       { "abtype": "effect", "maxSize": 5,  "text": "ひかえめ",},
          "mehealPlus":   { "abtype": "effect", "maxSize": 5,  "text": "メンタル回復+",},
          "mehealMinus":  { "abtype": "effect", "maxSize": 5,  "text": "メンタル回復-",},
        },
      }
    },
    methods: {
      emitAbilityValues(k, v) {
        this.value[k] = v
        this.$emit('input', this.value)
      }
    },
  }
</script>
