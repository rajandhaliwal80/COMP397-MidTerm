//Rajandeep Kaur Dhaliwal
//300926123
//June 25 2018
//Midterm Summer 2018 Web-Game Programming
let app;
(function(app) {
  "use strict";

  // Game Variables
  let stage;
  let canvas;
  let helloLabel;
  let assetManager;
  let startButton;
    //Dice 1 is blank
  let dice1;
    //dice 2 is blank
  let dice2;
    //textBox representing random number
  var txtBoxDice1;
  var txtBoxDice2;
    //Rolled Dices
  let rolleddice1;
  let rolleddice2;
  
    
  let manifest = [
      { id: "one", src: "/Assets/images/1.png" }, 
      { id: "two", src: "/Assets/images/2.png" }, 
      { id: "three", src: "/Assets/images/3.png" }, 
      { id: "four", src: "/Assets/images/4.png" },
      { id: "five", src: "/Assets/images/5.png" },
      { id: "six", src: "/Assets/images/6.png" },
      { id: "blank", src: "/Assets/images/blank.png" },
      { id: "StartButton", src: "/Assets/images/StartButton.png" }
    ];

  function Init() {
      console.log("App Initializing...");
      assetManager = new createjs.LoadQueue();
      assetManager.installPlugin(createjs.Sound);
      assetManager.on("complete", Start);
      assetManager.loadManifest(manifest);
  }


  /**
   * The Start function initializes the createjs Stage object,
   * sets the framerate and sets up the Main Game Loop to
   * trigger every frame
   *
   */
  function Start() {
    console.log("App Started...");
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);

    Main();
  }

  /**
   * This is the Main Game Loop it runs at 60 fps
   *
   */
  function Update() {
    stage.update();
  }

  /**
   *  This is the main function - place all your code here
   *
   */
  function Main() {
      console.log("Main Function...");

    // start button
    startButton = new createjs.Bitmap(assetManager.getResult("StartButton"));
    startButton.regX = startButton.getBounds().width * 0.5;
    startButton.regY = startButton.getBounds().height * 0.5;
    startButton.x = 320;
    startButton.y = 500;
    stage.addChild(startButton);

      //dice 1
    dice1 = new createjs.Bitmap(assetManager.getResult("blank"));
    dice1.regX = startButton.getBounds().width * 0.5;
    dice1.regY = startButton.getBounds().height * 0.5;
    dice1.x = 220;
    dice1.y = 200;
    stage.addChild(dice1);


      //dice 2
    dice2 = new createjs.Bitmap(assetManager.getResult("blank"));
    dice2.regX = startButton.getBounds().width * 0.5;
    dice2.regY = startButton.getBounds().height * 0.5;
    dice2.x = 420;
    dice2.y = 200;
    stage.addChild(dice2);


    // start button listeners
    startButton.addEventListener("click", rollingDice);

   
  }

  function rollingDice() {

      stage.removeAllChildren();
      stage.addChild(startButton);
      

      //Random Number for Dice 1
      var randomDice1 = (Math.floor(Math.random() * 6) + 1);
      //Random Number for Dice 2
      var randomDice2 = (Math.floor(Math.random() * 6) + 1);

      //source for Rolled Dice 1
      var rolleddicerandom1 = assetManager.getResult(randomDice1);
      //source for Rolled Dice 2
      var rolleddicerandom2 = assetManager.getResult(randomDice2);

      //Rolled dice 1
      rolleddice1 = new createjs.Bitmap(rolleddicerandom1);
      //rolled dice 2
      rolleddice2 = new createjs.Bitmap(rolleddicerandom2);

      //Coordinates for dices
      rolleddice1.x = 220;
      rolleddice1.y = 200;
      rolleddice2.x = 420;
      rolleddice2.y = 200;

      //Text Boxes representing Random Number
      txtBoxDice1 = new createjs.Text(randomDice1);
      txtBoxDice2 = new createjs.Text(randomDice2);
      txtBoxDice1.x = 220;
      txtBoxDice1.y = 400;
      txtBoxDice2.x = 420;
      txtBoxDice2.y = 400;

      stage.addChild(rolleddice1);
      stage.addChild(rolleddice2);
      stage.addChild(txtBoxDice1);
      stage.addChild(txtBoxDice2);
  }

  window.addEventListener("load", Init);
})(app | (app = {}));
