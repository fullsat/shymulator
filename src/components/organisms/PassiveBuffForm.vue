<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-text-field @input="emitValues()" label="vocal"  v-model.number="value['vo']"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field @input="emitValues()" label="dance"  v-model.number="value['da']"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field @input="emitValues()" label="visual" v-model.number="value['vi']"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: function() {
          return {
            vo: 0,
            vi: 0,
            da: 0,
          }
        }
      }
    },
    methods: {
      emitValues: function() {
        this.$emit('input', this.value)
      },
    }
  }
</script>
