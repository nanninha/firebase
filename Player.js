class Player {

    constructor(){
        //indice do jogador
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    getCount(){
            var playerCountRef= database.ref('playerCount');
            
            playerCountRef.on("value",function(data){
                playerCount= data.val();
            })

    }

    updateCount(count){

            database.ref('/').update({
                playerCount: count
            });
    }

    //update(name){
      //  var playerIndex= "Jogador" + playerCount
        //database.ref(playerIndex).set({
          //  name: name
        //});
     
     //aula37   

    update(){
        var playerIndex= "players/player" + this.index;
        database.ref(playerIndex).set({
        name: this.name,
        distance: this.distance,
        });
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
        })
}

}