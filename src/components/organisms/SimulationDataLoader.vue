<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title>
          データを保存する
          <v-icon
            @click="overlay = !overlay"
            medium
            >mdi-information</v-icon>
          <v-dialog
            v-model="overlay">
            <v-card>
              <v-card-title>保存に関して</v-card-title>
              <v-card-text>
                <p>比較名を入力し保存ボタンを押すと保存されます</p>
                <p>データのクリアボタンを押すと保存データが削除されます</p>
                <p>同じ名前で保存すると上書きされます</p>
                <v-divider></v-divider>
                <p>ブラウザ自身にデータを保存しています。</p>
                <p>シミュレータ製作者にデータを覗き見ることはできません。</p>
                <p>javascriptのlocalStorageを利用しています。</p>
                <v-divider></v-divider>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-card-title>

        <v-card-text>
          <v-text-field
            label="比較名"
            v-model="comparedName"
            ></v-text-field>

          <v-select
            :items="savedData"
            item-text="desc"
            item-value="key"
            @input="emitSimulationData($event)"
            dense>
          </v-select>

          <v-btn
            @click="saveSimulationData"
            color="primary">比較したデータを保存する</v-btn>

          <v-btn
            @click="removeSimulationData"
            color="warning">データをクリアする</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import _ from 'lodash'
  import jshash from 'jshash'

  export default {
    props: {
      comparedData: {
        type: Array,
        default: function() { return []},
      },
      saveDataKey: {
        type: String,
        default: function() { return 'compareKey' },
      }
    },
    data () {
      return {
        savedData: [],
        loadedData: null,
        selectedUnitKey: null,
        comparedName: "",
        overlay: false,
      }
    },
    methods: {
      saveSimulationData: function() {
        if(!this.comparedData){ return; }
        if(this.comparedData.length < 1){ return; }
        if(this.comparedName == ""){ return; }

        let hashkey = jshash.djb2(this.comparedName)
        for(let i = 0; i < this.savedData.length; i++ ){
          if(hashkey == this.savedData[i].key){
            this.savedData[i].desc = _.cloneDeep(this.comparedName)
            this.savedData[i].data = _.cloneDeep(this.comparedData)
            localStorage.setItem( this.saveDataKey, JSON.stringify(this.savedData) )
            return
          }
        }

        let pushData = { 
          key: hashkey,
          desc: _.cloneDeep(this.comparedName),
          data: _.cloneDeep(this.comparedData),
        }
        this.savedData.push(pushData)
        localStorage.setItem( this.saveDataKey, JSON.stringify(this.savedData) )
      },
      loadSimulationData: function() {
        let _sd = JSON.parse( localStorage.getItem( this.saveDataKey) )
        if(!_sd){
          return
        }
        this.savedData =  _sd
        this.emitSimulationData()
      },
      removeSimulationData: function() {
        this.savedData = []
        localStorage.clear()
      },
      emitSimulationData: function(event) {
        for(let i = 0; i < this.savedData.length; i++){
          if(this.savedData[i].key == event){
            this.loadedData = this.savedData[i].data
            this.comparedName = this.savedData[i].desc
            this.$emit('input', this.loadedData)
          }
        }
      },
    },
    created: function() {
      this.loadSimulationData()
    }
  }
</script>
