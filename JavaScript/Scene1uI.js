class Form{

    constructor(){

        //this.button = createButton('Start Game');
      //  this.button.position(windowWidth/2,windowHeight/2+20);
       // this.button.style('background', 'lightgrey');    
    }
    
    display(){
        var button = createButton("Start")
button.position(windowWidth/2,windowHeight/2+20);
        button.mousePressed(function(){

          button.hide();
          console.log("PRessed");
        });
    }

}