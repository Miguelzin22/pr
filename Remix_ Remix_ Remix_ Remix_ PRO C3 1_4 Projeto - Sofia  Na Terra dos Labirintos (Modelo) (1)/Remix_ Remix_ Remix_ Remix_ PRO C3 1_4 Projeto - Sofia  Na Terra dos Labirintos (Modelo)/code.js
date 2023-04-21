var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var Sofia = createSprite(15, 380, 20, 20);
Sofia.shapeColor = "purple"







var wall1 = createSprite(50, 390, 20, 300);
var wall2 = createSprite(100, 230, 120, 20);
var wall3 = createSprite(50, 150, 100, 20);
var wall4 = createSprite(150, 180, 20, 250);
var wall5 = createSprite(115, 295, 50, 20);
var wall6 = createSprite(350, 350, 20, 20);
var wall7 = createSprite(220, 230, 20, 350);
var wall8 = createSprite(285, 50, 150, 20);
var wall9 = createSprite(350, 65, 20, 50);
var wall10 = createSprite(345, 135, 150, 20);
var wall11 = createSprite(90, 100, 20, 90);
var wall12 = createSprite(275, 168, 20, 86);
var wall13 = createSprite(310, 205, 90, 20);
var wall14 = createSprite(120, 360, 120, 20);
var wall15 = createSprite(285, 50, 150, 20);
var wall16 = createSprite(60, 95, 50, 20);
var wall17 = createSprite(285, 50, 150, 20);
var wall18 = createSprite(275, 300, 20, 110);
var wall19 = createSprite(340, 285, 140, 20);
var wall20 = createSprite(326, 370, 20, 80);
var wall21 = createSprite(65, 210, 20, 30);
var wall22 = createSprite(45, 85, 20, 40);

createEdgeSprites(topEdge, bottomEdge, leftEdge, rightEdge);



var cup = createSprite(350, 350, 20, 20);
cup.shapeColor="yellow"

  
function draw() {
  
Sofia.bounceOff(edges);
 
   
  
    Sofia.velocityX = 0;
  Sofia.velocityY = 0;

 
 if(keyDown("a")) 
{
  Sofia.velocityX = -3;
  Sofia.velocityY = 0;
}
  
  if (keyDown("d"))
{
  Sofia.velocityX = 3;
  Sofia.velocityY = 0;
}
  if (keyDown("w")) 
{
  Sofia.velocityX = 0;
  Sofia.velocityY = -3;
}
  
  if (keyDown("s")) 
{
  Sofia.velocityX = 0;
  Sofia.velocityY = 3;
}
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);

  
  
background("pink");


drawSprites();


}








































































// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
