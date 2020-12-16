<template>
  <v-main>
    <v-container>
      <v-row>
        1極が強いの？3極バランス型が強いの？Daあと100あげたらどのくらいアピール値高くなるの？など調べるためのツール
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card color="#eee">
            <v-card-text>
              <simulater
                :baseValues="simulationData[0].baseValues"
                :ability="simulationData[0].ability"
                :appealSkills="simulationData[0].appealSkills"
                :passiveBuff="simulationData[0].passiveBuff"
                v-on:emit-base-values="simulationData[0].baseValues = $event"
                v-on:emit-ability="simulationData[0].ability = $event"
                v-on:emit-appeal-skills="simulationData[0].appealSkills = $event"
                v-on:emit-passive-buff="simulationData[0].passiveBuff = $event"
                />
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card color="#eee">
            <v-card-text>
              <simulater
                :baseValues="simulationData[1].baseValues"
                :ability="simulationData[1].ability"
                :appealSkills="simulationData[1].appealSkills"
                :passiveBuff="simulationData[1].passiveBuff"
                v-on:emit-base-values="simulationData[1].baseValues = $event"
                v-on:emit-ability="simulationData[1].ability = $event"
                v-on:emit-appeal-skills="simulationData[1].appealSkills = $event"
                v-on:emit-passive-buff="simulationData[1].passiveBuff = $event"
                />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card color="#eee">
            <v-card-text>
              <simulation-data-loader
                :comparedData="simulationData"
                v-model="loadedSimulationData"
                />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Simulater from './Simulater';
import SimulationDataLoader from '../organisms/SimulationDataLoader';
import Ability from '../../app/models/Ability';

import _ from 'lodash'

export default {
  name: 'Shymulator',
  data: function(){
    return {
      simulationData: [{}, {}],
      loadedSimulationData: [
        {
          baseValues: {
            "le": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "vo": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "ce": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "da": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "vi": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
          },
          ability: new Ability(),
          passiveBuff: {"vo": 0, "da": 0, "vi": 0},
          appealSkills: {
            position: "le",
            appeal: {
              skill: { skill: "null"} ,
              option1: { skill: "null"} ,
              option2: { skill: "null"} ,
            },
            link: {
              skill: { skill: "null"} ,
              option1: { skill: "null"} ,
              option2: { skill: "null"} ,
            },
          }
        },
        {
          baseValues: {
            "le": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "vo": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "ce": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "da": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
            "vi": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
          },
          ability: new Ability(),
          passiveBuff: {"vo": 0, "da": 0, "vi": 0},
          appealSkills: {
            position: "le",
            appeal: {
              skill: { skill: "null"} ,
              option1: { skill: "null"} ,
              option2: { skill: "null"} ,
            },
            link: {
              skill: { skill: "null"} ,
              option1: { skill: "null"} ,
              option2: { skill: "null"} ,
            },
          }
        }
      ],
    }
  },
  created: function() {
    this.simulationData = _.cloneDeep(this.loadedSimulationData)
  },
  watch: {
    loadedSimulationData: function(){
      for(let i = 0; i < this.simulationData.length; i++){
        // アビリティオブジェクト
        this.loadedSimulationData[i].ability = new Ability(this.loadedSimulationData[i].ability)

        Object.assign(this.simulationData[i].baseValues, this.loadedSimulationData[i].baseValues)
        Object.assign(this.simulationData[i].ability, this.loadedSimulationData[i].ability)
        Object.assign(this.simulationData[i].passiveBuff, this.loadedSimulationData[i].passiveBuff)
        Object.assign(this.simulationData[i].appealSkills, this.loadedSimulationData[i].appealSkills)
      }
    }
  },
  components: {
    Simulater,
    SimulationDataLoader,
  },
};
</script>
