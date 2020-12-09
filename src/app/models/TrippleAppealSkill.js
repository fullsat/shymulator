import AppealSkill from './AppealSkill'

export default class TrippleAppealSkill extends AppealSkill {
  constructor(options = {}){
    super(options);
    this.target     = options['target']
    this.attribute  = options['attribute']
    this.power      = options['power']
  }

  appeal(targetJudge, baseValues, passiveBuff, abilityBuff, excellentCorr) {
    let uvvo = this.calcUnitValue(baseValues, 'vo')
    let uvda = this.calcUnitValue(baseValues, 'da')
    let uvvi = this.calcUnitValue(baseValues, 'vi')
    let sevo = (targetJudge == 'vo') ? 2 : 1
    let seda = (targetJudge == 'da') ? 2 : 1
    let sevi = (targetJudge == 'vi') ? 2 : 1

    let uv = (uvvo * sevo) + (uvda * seda) + (uvvi * sevi)

    let ab = abilityBuff
    let pb = passiveBuff
    let ec = excellentCorr

    return ( uv * ((100 + ab + pb ) / 100)) * this.power * ec 
  }
}
