const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const maxMinDamageDragon = (min, max) => {
    console.log( parseInt(Math.random() * (max - min) + min));
}

const maxMinDamageWarrior = (min, max) => {
    console.log( parseInt(Math.random() * (max - min) + min));
}

const damageMageMana = (min, max) => {
    if(mage.mana<15) {
        console.log( 'Não possui mana suficiente')
    }

    console.log( parseInt(Math.random() * (max - min) + min),mage.mana -= 15);
}

const gameActions = () => {
    warrior: maxMinDamageWarrior(warrior.strength,warrior.strength*warrior.weaponDmg)

};

//console.log(gameActions.warrior)
//damageMageMana(mage.intelligence,mage.intelligence*2)
//maxMinDamageDragon(15,dragon.strength)