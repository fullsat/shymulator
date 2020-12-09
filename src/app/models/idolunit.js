import MemoryAppeal form './memoryappeal'
import AppealSkill from './appealskill'
import SkillBuff from './skillbuff'
import AbilityBuff from './abilitybuff'
import PassiveBuff from './skillbuff'
import Appeal from './appeal'
import Action from './action'

export default class IdolUnit {
  constructor() {
    this.baseAbilitySlot = {
      "le": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,}, "memory":0},
      "vo": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
      "ce": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
      "da": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
      "vi": {"baseValue": {"vo":0,"da":0,"vi":0,"me":0,},"memory":0},
    }

    this.memoryAppealSlot = null
    this.appealSkillSlot = {"le": [], "vo": [], "ce": [], "da": [], "vi": []}
    this.passiveSkillSlot = {"le": [], "vo": [], "ce": [], "da": [], "vi": []}
    this.abilityBuffSlot = {"le": [], "vo": [], "ce": [], "da": [], "vi": []}
    
    this.activeSkillEffect = []
    this.activeAbilityBuff = []
    this.activePassiveBuff = []

    this.attention = 0
    this.interest = 0
    this.memoryAppealGage = 0
    this.agility = 0
    this.unitMental = 0
    this.mentalDamageRate = 1.0

  }


  /**
  update() {
    // アピールスキルバフの更新
    // アビリティバフの更新
    // パッシブバフの発動
    // アピール
    // パッシブバフのクリア
  }
  **/

  do_action(action){
    // if スキルタイプが思い出なら
    // else 通常アピールなら
    
    // appealオブジェクトの作成
  }

  updateSkillBuff() {
  }

  updateAbilityBuff() {
  }

  updatePassiveBuff() {
  }

  sumSkillBuff() {
  }

  sumAbilityBuff() {
  }

  sumPassiveBuff() {
  }

  activatePassiveBuff() {
    //バフの発動を計算
    // if active
    //   push buff
  }

  pushSkillEffect(skillEffect) {
    this.activeSkillEffect.push(skillEffect)
  }

  pushAbilityBuff(abilityBuff) {
    this.activeAbilityBuff.push(abilityBuff)
  }

  pushPassiveBuff(passiveBuff) {
    this.activePassiveBuff.push(passiveBuff)
  }

  setBaseAbility(unitPosition, type) {
  }

  setMemoryAppealGage(tension) {
  }
}
