<template>
  <v-container fluid>
    <v-radio-group
      :value="value"
      @change="$emit('input', $event)"
      row
      >
      <v-radio label="Le" value="le"></v-radio>
      <v-radio label="Vo" value="vo"></v-radio>
      <v-radio label="Ce" value="ce"></v-radio>
      <v-radio label="Da" value="da"></v-radio>
      <v-radio label="Vi" value="vi"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: function() { return "le"; }
      }
    },
  }
</script>
