import AppealSkill from './AppealSkill'

const MEMLVPOWER = [0.5, 0.5, 0.8, 1.0, 1.5, 2.0]

export default class MemoryAppeal extends AppealSkill {
  constructor(options = {}){
    super(options);
    this.skillname  = 'memoryappeal'
    this.position = options['position']
    this.memlv = options['memlv']
    this.memlvbonus = options['memlvbonus'] ? options['memlvbonus'] : 1
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
    let mb = this.memlvbonus

    let apvo = ( uvvo * ((100 + ab + pb['vo'] ) / 100)) * MEMLVPOWER[this.memlv] * mb * sevo * ec
    let apda = ( uvda * ((100 + ab + pb['da'] ) / 100)) * MEMLVPOWER[this.memlv] * mb * seda * ec
    let apvi = ( uvvi * ((100 + ab + pb['vi'] ) / 100)) * MEMLVPOWER[this.memlv] * mb * sevi * ec

    return apvo + apda + apvi
  }
}
