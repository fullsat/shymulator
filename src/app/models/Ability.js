export default class Ability {
  constructor(options = {}){
    this.slowstarter = options['slowstarter'] ? options['slowstarter'] : 0
    this.startdash   = options['startdash']   ? options['startdash'] : 0
    this.popular     = options['popular']     ? options['popular'] : 0
    this.quiet       = options['quiet']       ? options['quiet'] : 0
    this.memHigh     = options['memHigh']     ? options['memHigh'] : 0
    this.memLow      = options['memLow']      ? options['memLow'] : 0
    this.perfectly   = options['perfectly']   ? options['perfectly'] : 0
    this.bond        = options['bond']        ? options['bond'] : 0
  }

  // ターン数思い出ゲージ関係なし
  // 1ターン、思い出ゲージ0と仮定
  calcFixedBuff() {
    return this.slowstarter * 4 +
           this.startdash * 10 +
           this.popular * 3 +
           this.quiet * (-3) +
           this.memHigh * 2 +
           this.memLow * 20 +
           this.perfectly * 10 +
           this.bond * 5;
  }
}
