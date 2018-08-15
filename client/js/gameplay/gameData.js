let gameData = {};
const getGameData = function(data){
    if(data){
        gameData = Object.assign(gameData, data);
    }
    return gameData;
};

module.exports = getGameData;