var Engine=function(e){var a,l=e.document,r=e.window,t=l.createElement("canvas"),n=t.getContext("2d");function p(){var e=Date.now(),t=(e-a)/1e3;!0===player.startScreenDisplay&&function(){if(o(),app.displayPanel(30,120,445,380,"white"),app.displayPanelOutline(30,120,445,380,"green"),n.font="32pt Lobster",n.fillStyle="green",n.fillText("GAME INFO",140,200),n.font="20pt Lobster",n.fillText("get 200 points in 60 seconds",100,270),n.fillText("- reach water = 10 points",120,330),n.fillText("- blue gem = 80 points",120,360),n.fillText("- green gem = 50 points",120,390),n.fillText("- orange gem = 30 points",120,420),n.fillStyle="red",n.fillText("press return to start!",150,480),!0===player.startFirstGame){player.startScreenDisplay=!1;var e=l.createElement("H2"),a=l.createTextNode('press "space" to pause game');e.appendChild(a),l.getElementById("gameCanvas").appendChild(e),i()}}(),!1===player.characterSelectedFlag&&!1===player.startScreenDisplay&&function(){o(),app.displayPanel(30,200,445,210,"white"),app.displayPanelOutline(30,200,445,210,"green");for(var e=0;e<player.characters.length;e++)n.drawImage(Resources.get(player.characters[e]),20+90*e,180);n.font="20pt Lobster",n.fillStyle="green",n.fillText("select your hero and press ENTER!",75,400),app.displayPanelOutline(player.selectorBoxXCoords[player.selectorBox],220,63,110,"lightgreen")}(),!1===app.pauseFlag&&!0===player.characterSelectedFlag&&!0===player.alive&&!1===player.gameWon&&(!function(e){(function(e){app.allEnemies.forEach((function(a){a.update(e)})),app.allCollectibles.forEach((function(e){e.update()})),player.update()})(e),app.allEnemies.forEach((function(e){player.collisionDetect(e)})),app.allCollectibles.forEach((function(e){player.collisionDetect(e)}))}(t),o(),app.allCollectibles.forEach((function(e){e.render()})),app.allRocks.forEach((function(e){e.render()})),app.allEnemies.forEach((function(e){e.render()})),player.render(),player.renderScore(),timer.render()),!1===player.alive&&(o(),player.renderScore(),app.displayPanel(30,200,445,210,"white"),app.displayPanelOutline(30,200,445,210,"green"),n.font="30pt Lobster",n.fillStyle="green",n.fillText("GAME OVER!",140,300),n.font="20pt Lobster",n.fillStyle="green",n.fillText("press return for another game!",90,350),!0===player.anotherGameFlag&&(player.anotherGameFlag=!1,i())),!0===player.gameWon&&(o(),timer.render(),app.displayPanel(30,200,445,210,"white"),app.displayPanelOutline(30,200,445,210,"green"),n.font="30pt Lobster",n.fillStyle="red",n.fillText("YOU ARE A WINNER!",70,300),n.font="20pt Lobster",n.fillStyle="green",n.fillText("press return for another game!",90,350),!0===player.anotherGameFlag&&(player.anotherGameFlag=!1,i())),a=e,r.requestAnimationFrame(p)}function i(){app.allEnemies.forEach((function(e){e.reset()})),app.allCollectibles.forEach((function(e){e.reset()})),app.allRocks.forEach((function(e){e.reset()})),player.reset(),timer.reset(),app.pauseFlag=!1,a=Date.now(),p()}function o(){var e,a,l=["images/water-block.png","images/stone-block.png","images/stone-block.png","images/stone-block.png","images/grass-block.png","images/grass-block.png"];for(e=0;e<6;e++)for(a=0;a<5;a++)n.drawImage(Resources.get(l[e]),101*a,83*e)}t.width=505,t.height=606,l.querySelector("#gameCanvas").appendChild(t),Resources.load(["images/stone-block.png","images/water-block.png","images/grass-block.png","images/enemy-bug.png","images/char-boy.png","images/char-cat-girl.png","images/char-horn-girl.png","images/char-pink-girl.png","images/char-princess-girl.png","images/Heart.png","images/Gem Blue.png","images/Gem Green.png","images/Gem Orange.png","images/Rock.png"]),Resources.onReady(i),e.ctx=n}(this);