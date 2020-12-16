<template>
  <div>
    <v-row dense>
      <v-col cols="3">
      Vo＆Da＆Vi
      </v-col>
      アピール
    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        position: "ce",
      }
    },
    methods: {
      emitAppeal: function() {
        this.$emit('input', {
          'skill': 'memoryappeal',
          'position': this.position,
        });
      },
    },
    watch: {
      position: function(){
        this.emitAppeal()
      }
    }

  }
</script>
