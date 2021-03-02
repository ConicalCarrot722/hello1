class Form{
    constructor(){
        
         this.input=createInput("name")
         this.Greeting=createElement("h2")
         this.button=createButton("Play")
    }
    display(){
        var Title=createElement("h1")
       Title.html("Car Racing")
       Title.position(250,50)
       
        this.input.position(250,150)
        this.button.position(250,150)
       
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
           player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.updateCount(playerCount)
            player.update()
            this.Greeting.html("Hello"+player.name)
            this.Greeting.position(250,300)
        }) 
    }
}
