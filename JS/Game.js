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
 }
 play(){
     form.hide()
     textSize(21)
     text("the game will begin",120,90)
     Player.getInfo()
     if(playerDetail!==undefined){
         var displayposition=107
         for(var plr in playerDetail){
             if(plr==="player"+player.index){
                 fill("red")
             }
             else{
                 fill("black")
             }
             displayposition=displayposition+23
             textSize(16)
             text(playerDetail[plr].name+":"+playerDetail[plr].distance,150,displayposition)
         }
     }
     if(keyIsDown(UP_ARROW)&& player.index!==null){
         player.distance+=20
         player.update()
     }
 }
}