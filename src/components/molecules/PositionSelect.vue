<template>
  <v-container fluid>
    <v-radio-group
      v-model="selectedValue"
      @change="emitSelectedValue()"
      row
      >
      <template v-slot:label>
        <span>担当：</span>
      </template>
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
    data () {
      return {
        selectedValue: null,
      }
    },
    methods: {
      emitSelectedValue: function() {
        this.$emit('input', this.selectedValue)
      },
    }
  }
</script>
