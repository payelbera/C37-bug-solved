class Game {
  constructor(){}
  
play(){
  form.hide();
   
   Player.getPlayerInfo();
   
   
   if(allPlayers!==undefined){
     var display_position= 130;
     //index for the array
     var index = 0;
     var x_position = 0;
     var y_position;


   for(var plr in allPlayers){
       
         index = index+1;
         x_position = x_position+200;
         y_position = displayHeight-allPlayers[plr].distance;
         /*console.log("cars array "+cars);
         console.log("index is  "+index);
         */
         cars[index-1].x= x_position;
         cars[index-1].y = y_position;
         console.log("index is "+index + "player.index: "+player.index);
         if(index===player.index){
          console.log("car sprite "+cars[index-1]);
           cars[index-1].shapeColor= "red";
           camera.position.x = displayWidth/2;
           camera.position.y = cars[index-1].y;
           console.log("cam pos X "+camera.position.x + "cam pos Y "+camera.position.y);
           console.log("car pos X "+cars[index-1].x + "car pos Y "+cars[index-1].y);
         }
          


   }

  }
   
  if(keyIsDown(UP_ARROW)&&player.index!==null){
   player.distance+=50;
   player.update();
   

  }

drawSprites();
}



  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef= await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
           playerCount = playerCountRef.val();
           player.getCount();
        }
      
     
      form = new Form();
      form.display();

    }
  
car1 = createSprite(100,200,50,20);
car2 = createSprite(300,200,50,20);
car3 = createSprite(500,200,50,20);
car4 = createSprite(700,200,50,20);
cars = [car1, car2, car3, car4];


  }
}
