export default class Ability {
  constructor(options = {}){
    this.abilityValues = options['abilityValues']
  }

  // ターン数思い出ゲージ関係なし
  // 1ターン、思い出ゲージ0と仮定
  calcFixedBuff() {
    let ret = 0

    if(this.abilityValues != null){
      ret = this.abilityValues['slowstarter'] * 4 +
            this.abilityValues['startdash'] * 10 +
            this.abilityValues['popular'] * 3 +
            this.abilityValues['quiet'] * (-3) +
            this.abilityValues['memHigh'] * 2 +
            this.abilityValues['memLow'] * 20 +
            this.abilityValues['perfectly'] * 10 +
            this.abilityValues['bond'] * 5;
    }

    return ret
  }
}
