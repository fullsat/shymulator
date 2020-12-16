import AppealSkill from './AppealSkill'

export default class SingleAppealSkill extends AppealSkill {
  constructor(options = {}){
    super(options);
    this.skillname  = 'signelappealskill'
    this.target     = options['target']
    this.attribute  = options['attribute']
    this.power      = options['power']
  }

  appeal(targetJudge, baseValues, passiveBuff, abilityBuff, excellentCorr) {
    // Excellent
    let attr = this.attribute
    if(attr == 'ex'){ attr = targetJudge }

    let uv = this.calcUnitValue(baseValues, attr)
    let ab = abilityBuff
    let pb = passiveBuff
    let ec = excellentCorr
    let se = (targetJudge == this.attribute) || ("ex" == this.attribute) ? 2 : 1
    return (uv * ((100 + ab + pb[attr] ) / 100)) * this.power * se * ec 
  }
}
