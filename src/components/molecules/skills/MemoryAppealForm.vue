<template>
  <div>
    <v-row dense>
      <v-col cols="3">
      Vo＆Da＆Vi
      </v-col>
      思い出レベル{{ cememlv }} アピール({{ bonus + 1}}倍)
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
            skill: 'memoryappeal',
            position: 'ce',
            memlv: 1,
            memlvbonus: 0,
          }
        }
      },
      baseValues: {
        type: Object,
      }
    },
    data () {
      return {
        position: "ce",
      }
    },
    methods: {
      emitAppeal: function() {
        this.value.memlv = this.cememlv
        this.value.memlvbonus = this.bonus
        this.$emit('input', this.value);
      },
    },
    computed: {
      cememlv: function() {
        if(this.baseValues.ce.memory == 0){ return 1; }
        return this.baseValues.ce.memory
      },
      bonus: function() {
        let bonuslist = [0, 0, 0.2, 0.030, 0.05, 0.075]
        return bonuslist[this.baseValues.le.memory] +
               bonuslist[this.baseValues.vo.memory] +
               bonuslist[this.baseValues.da.memory] +
               bonuslist[this.baseValues.vi.memory]
      }
    },
    watch: {
      cememlv: function(){
        this.emitAppeal()
      },
      bonus: function() {
        this.emitAppeal()
      },
    }
  }
</script>
