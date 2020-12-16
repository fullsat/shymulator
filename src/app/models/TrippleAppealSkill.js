import AppealSkill from './AppealSkill'

export default class TrippleAppealSkill extends AppealSkill {
  constructor(options = {}){
    super(options);
    this.skillname  = 'trippleappealskill'
    this.target     = options['target']
    this.power      = options['power']
  }

  appeal(targetJudge, baseValues, passiveBuff, abilityBuff, excellentCorr) {
    let uvvo = this.calcUnitValue(baseValues, 'vo')
    let uvda = this.calcUnitValue(baseValues, 'da')
    let uvvi = this.calcUnitValue(baseValues, 'vi')
    let sevo = (targetJudge == 'vo') ? 2 : 1
    let seda = (targetJudge == 'da') ? 2 : 1
    let sevi = (targetJudge == 'vi') ? 2 : 1

    let ab = abilityBuff
    let pb = passiveBuff
    let ec = excellentCorr

    let apvo = ( uvvo * ((100 + ab + pb['vo'] ) / 100)) * this.power['vo'] * sevo * ec 
    let apda = ( uvda * ((100 + ab + pb['da'] ) / 100)) * this.power['da'] * seda * ec 
    let apvi = ( uvvi * ((100 + ab + pb['vi'] ) / 100)) * this.power['vi'] * sevi * ec 

    return apvo + apda + apvi
  }
}
