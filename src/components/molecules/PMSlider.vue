<template>
  <v-slider
    v-model="value"
    track-color="grey"
    step="1"
    tick-size="5"
    :max="size"
    :tick-labels="labels"
    ticks="always"
    @input="emitValue()"
  >
    <template v-slot:prepend>
      <v-btn icon>
         <v-icon fab @click="decrement"> mdi-minus </v-icon>
      </v-btn>
    </template>

    <template v-slot:append>
      <v-btn icon>
        <v-icon fab @click="increment"> mdi-plus </v-icon>
      </v-btn>
    </template>
  </v-slider>
</template>

<script>
  export default {
    props: {
      'initialValue': {
        type: Number,
        default: function() { return 0 },
      },
      'size': {
        type: Number,
        default: function() { return 5 },
      },
      'disableLabels': {
        type: Boolean,
        default: function() { return false },
      },
    },
    data: function() {
      return {
        value: this.initialValue,
        labels: (this.disableLabels ? []: [...Array(this.size + 1).keys()]),
      }
    },
    methods: {
      decrement () {
        if( 0 < this.value){ this.value-- }
        this.emitValue()
      },
      increment () {
        if( this.value < this.size ){ this.value++ }
        this.emitValue()
      },
      emitValue() {
        this.$emit('input', this.value);
      },
    },
  }
</script>
