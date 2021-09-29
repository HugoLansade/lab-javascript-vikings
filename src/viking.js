// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);    
    this.name = name;
  }

  attack(){
    return super.attack();
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health !== 0) return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }

  battleCry(){
    return "Odin Owns You All!";
  }
  
}

// Saxon
class Saxon extends Soldier{

  attack(){
    return super.attack();
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0) return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;
  }

}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy  = [];
    this.countViking = 0;
    this.countSaxon = 0;
  }

  addViking(Viking){
    this.vikingArmy[this.countViking] = Viking;
    this.countViking ++;
  }

  addSaxon(Saxon){
    this.saxonArmy[this.countSaxon] = Saxon;
    this.countSaxon ++;
  }

  vikingAttack(){
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[saxonIndex];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let result = randomSaxon.receiveDamage(randomViking.attack()); //Un saxon recoit une attaque d'un viking
    if(randomSaxon.health <= 0 ) {
      this.saxonArmy.splice(saxonIndex,1);
    }
    return result;
  }

  saxonAttack(){
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[vikingIndex];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let result = randomViking.receiveDamage(randomSaxon.attack()); //Un saxon recoit une attaque d'un viking
    if(randomViking.health <= 0 ) {
      this.vikingArmy.splice(vikingIndex,1);
    }
    return result;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
