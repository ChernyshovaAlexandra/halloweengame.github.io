const unitHit = function (unit){
    let unitBlock = document.getElementsByClassName(unit.name)[0];
    let color;
    if(unit.health >= 70){
        color = 'green';
    } else if(unit.health >= 50){
        color = 'yellow';
    } else if(unit.health >= 30){
        color = 'orange';
    } else if(unit.health >= 10){
        color = 'red';
    }

    document.getElementsByClassName('fireball-animation')[0].remove();
    unitBlock.getElementsByClassName('health')[0].style.width = unit.health + '%';
    unitBlock.getElementsByClassName('health')[0].style.background = color;
    unitBlock.getElementsByClassName('health')[0].innerText = unit.health;
};

module.exports = unitHit;