<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-text-field @input="emitValues()" label="vocal"  v-model.number="passiveBuff['vo']"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field @input="emitValues()" label="dance"  v-model.number="passiveBuff['da']"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field @input="emitValues()" label="visual" v-model.number="passiveBuff['vi']"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        passiveBuff: {
          vo: 0,
          vi: 0,
          da: 0,
        },
      }
    },
    methods: {
      emitValues: function() {
        this.$emit('input', this.passiveBuff)
      },
    }
  }
</script>
