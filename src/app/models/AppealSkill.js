export default class AppealSkill {
  constructor(options = {}){
    this.position   = options['position']
  }

  calcUnitValue(baseValues, attr) {
    let unitValue = 0
    const Positions = ["le", "vo", "ce", "da", "vi"]
    for(let i = 0; i < Positions.length; i++){
      if( Positions[i] == this.position){
        unitValue += baseValues[ Positions[i] ]['baseValue'][ attr ] * 2

      }else{
        unitValue += baseValues[ Positions[i] ]['baseValue'][ attr ] * 0.5
      }
    }
    return unitValue;
  }
}
