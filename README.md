# snake-game
Classic Snake game in JavaScript

Created: 10-April-2019
Author: Nishit Rao (@nish92rao)
First Commit: 11-April-2019 12.25 PM
Last Updated: 11-April-2019 12.25 PM

SUMMARY:
My attempt at creating the classic Snake game using JavaScript, played on a browser.
The idea is to build a prototype, then build up from the prototype, one feature at a time.
The prototype has been tested on Google Chrome browser. Fixes for any issues found will be part of subsequent versions, along with new features conceived.

PROTOTYPE:
The prototype includes a 15x15 board with a default length-6 snake and food appearing at random locations on the board.
The game will start when user clicks OK on the alert box that appears when browser is opened.
The user controls the snake using arrow keys. The snake length grows with each consumed food particle.
The game ends when the snake heads into itself or any of the four walls.
The score from the current turn, and the high score from that session, is displayed in a confirm box at the end of the game.
This confirm box also asks the user if a new game must start. Clicking OK starts a new game, while clicking Cancel closes the window/tab.

DEFECTS:
1. Snake can reverse direction in the same row/column if corresponding arrow keys are pressed fast enough before the next step.
  Root Cause: Interval between steps (for low speeds) can be longer than multiple keypresses.
  Possible Fixes: (i) Use keypress event instead of keydown event. (ii) Introduce short delay after each keypress
2. Few functions use loops that iterate over entire snake length. Can be problematic for bigger boards and longer snakes.
  Root Cause: .indexOf function on snakeBody did not work. Had to be replaced with loop for developing prototype. Needs further analysis.

PLANS FOR IMPROVEMENT:
1. Speed increase with score.
2. Score display
3. On-screen controls
4. Settings Page:
  (i)   Board size selection
  (ii)  Touching wall ends game?
  (iii) Difficulty Level (default speed)
5. Random obstacles
6. Portals
7. Maps
8. Levels
