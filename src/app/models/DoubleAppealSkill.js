import AppealSkill from './AppealSkill'

export default class DoubleAppealSkill extends AppealSkill {
  constructor(options = {}){
    super(options);
    this.skillname  = 'doubleappealskill'
    this.target     = options['target']
    this.attribute  = options['attribute']
    this.power      = options['power']
  }

  appeal(targetJudge, baseValues, passiveBuff, abilityBuff, excellentCorr) {
    let ap = 0
    for(let i = 0; i < this.attribute.length; i++){
      let attr = this.attribute[i]
      let uv = this.calcUnitValue(baseValues, attr)
      let ab = abilityBuff
      let pb = passiveBuff
      let ec = excellentCorr
      let se = (targetJudge == attr) ? 2 : 1
      ap += (uv * ((100 + ab + pb[attr] ) / 100)) * this.power[i] * se * ec 
    }
    return ap
  }
}
