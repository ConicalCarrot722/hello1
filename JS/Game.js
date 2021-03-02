class Game{
    constructor(){

    }
 getState(){
 var gameref=database.ref("gameState") 
 gameref.on("value",function(data){
     gameState=data.val()
 })
 }
 update(State){
     database.ref("/").update({
         gameState:State
     })
 }
 async start(){
    
  if(gameState===0){
    player=new Player();
   var playerref=await database.ref("playerCount").once("value")
   if(playerref.exists()){
       playerCount=playerref.val()
       player.getCount();
   }
  
    form=new Form();
    form.display();
  }   
  car1= createSprite(100,200)
  car2= createSprite(300,200)
  car3= createSprite(500,200)
  car4= createSprite(700,200)
  cars=[car1,car2.car3,car4]
 }
 play(){
     form.hide()
     textSize(21)
     text("the game will begin",120,90)
     Player.getInfo()
     if(playerDetail!==undefined){
         var index=0
         var x=0
         var y
         for(var plr in playerDetail){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            x = x + 200;
            //use data form the database to display the cars in y direction
            y = displayHeight - playerDetail[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;
    
            if (index === player.index){
              cars[index - 1].shapeColor = "red";
              camera.position.x = displayWidth/2;
              camera.position.y = cars[index-1].y
            }
           
            //textSize(15);
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
     }
     if(keyIsDown(UP_ARROW)&& player.index!==null){
         player.distance+=20
         player.update()
     }
     drawSprites()
 }
}