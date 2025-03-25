# Rock-Paper-Scissors-Lizard-Spock
Rock Paper Scissors Lizard Spock is a game developed to complete the Project portfolio 2 at Code institute. The game is played between the user and computer and each has a chance to win when either of them score 12 points. One can click on the "reset" button to begin the game again. The link to this fun game can be found [here](https://niraja85.github.io/Rock-Paper-Scissors-Lizard-Spock/).

![Mockup](docs/readme_images/Responsive.png)

## Features
### Site wide

* Navigation Menu
    * Contains links to Home page and Game page and is responsive on all screen sizes.
    * This will help the player navigate easily between the pages on all screen sizes.

![Navigation](docs/readme_images/Navigation.png)    

* Favicon
    * A site wide Favicon will be implemented with a galaxy sign of rock paper scissor lizard spock game.
    * This will provide an image in the tabs header which in turn will help the users identify the page when they have several tabs opened.

![Favicon](docs/readme_images/Favicon.png)   

### Home Page

* Diagramatic representation of the game rules
    * The game rules for which element dominates the othet is depicted in a diagram with the arrows pointing showing dominance.

![Diagram](docs/readme_images/Diagram.png)   

* Game Rules
    * The Game rules and instructions to play the game are included in it.
    * The rules of dominance are written down so that the player has an idea of how points will be calulated.
    * Instructions on how to play the game is clearly mentioned.
    * A "Play" button is added to go to the game page.

![Game-Rules](docs/readme_images/Game-rules.png) 

* Play Game button
    * A button will be on the home page that when clicked will direct the user to the main game.
    * This will allow the user to start the game after they have read and understood how the game works.

![PlayGame](docs/readme_images/Play-button.png)  

### Game Page

* The game page shows the name of the game and displays that one needs to reach 12 points to win the game.
* There are two buttons, "Start" and "Reset" button respectively.
* To begin the game one must click on the start button, and choose any of the icons of rock, paper, scissors, lizard spock.
* If at any point the player wants to reset the game, he/she can click on the "reset" button and the score turns back to 0 for both, and new game can be started.

![Game-page-buttons](docs/readme_images/Game-buttons.png)

* Score-Board
    * The score-board is set at 0:0. 
    * Left side displays the "You" side, that is, the score of the player is displayed on the left side.
    * Right side displays theb "Computer" side, that is the score of the computer is displayed on the right side.
    * Each win increases the score by 1 point.
    * Clicking on the "Reset" button brings back the score-board to the starting level.

![Score-board](docs/readme_images/Score-board.png)    

* Icons
    * The icons for Rock, paper, scissors, lizard and spock, are displayed in the form of hand and finger configurations.
    * The player can select any of the icons, and the icon selected gets highlighted.
    * The chosen icon is matched with that of the computer's choice.

![Icons](docs/readme_images/Icons.png)    
    
* Message area
    * The box shows the message displayed based on game rules after comparing player and computer choices.
    * If its a draw the box color changes to blue, if player wins, the color is green, and if player loses, it's color is red.
    * It also displays the message of winning or losing once either of the side has reached 12 points, and directs to click on "Reset" button to begin again.

 ![Display-1](docs/readme_images/display-1.png)   
 ![Display-2](docs/readme_images/display-2.png)
 ![Display-3](docs/readme_images/display-3.png)
 ![Display-4](docs/readme_images/display-4.png)
 ![Display-5](docs/readme_images/display-5.png)

 * Image Choice
     * There are two empty circles, where the left circle shows the image of the icon which the player chooses and the right circle shows the icon randomly chosen by the computer.

![Image-area-1](docs/readme_images/Image-area-1.png)
![Image-area-2](docs/readme_images/image-area-2.png)    

### Future features to implement
- Can be made more colorful.
- More features like confetti over the page while winning.
- Game sounds.

## Wireframes

* Home page 

![Home](docs/readme_images/bal-wf.png)

* Game Page

![Play](docs/readme_images/bal-wf-play.png)

## Technolgies

- HTML
  - The structure of the Website was developed using HTML as the main language.
- CSS
  - The Website was styled using custom CSS in an external file.
- JavaScript
  - The game play logic was created using JavaScript in an external file.
- Visual Studio Code
  - The website was developed using Visual Studio Code IDE
- GitHub
  - Source code is hosted on GitHub and delpoyed using Git Pages.
- Git
  - Used to commit and push code during the development of the Website
- Font Awesome
  - Icon obtained from https://fontawesome.com/ was used for GitHub Icon in the footer.
- Google Fonts
 - The fonts were chosen at https://fonts.google.com/ to give the Font styles for the headings and content.
- Favicon.io
  - favicon files were created at https://favicon.io/favicon-converter/
- balsamiq
  - wireframes were created using balsamiq from https://balsamiq.com/wireframes/desktop/

## Testing

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Opera browsers.

Steps to test:

1. Open browser and navigate to [Rock-Paper-Scissors-Lizard-Spock](https://niraja85.github.io/Rock-Paper-Scissors-Lizard-Spock/)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched.
No horizontal scroll is present.
No elements overlap.

Actual:

Website behaved as expected.

Website was also opened on the following devices and no responsive issues were seen:

- Galaxy Z-Fold-5
- Samsung Galaxy S2o Ultra.
- iPhone SE

### Accessibility

[Wave Accessibility](https://wave.webaim.org/) tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
- Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed

Manual tests were also performed to ensure the website was accessible as possible and some accessibility issues were identified.

Isuue 1: The color contrast for nav buttons showed poor contrast.
Fix: Changed the font-color for better readability.

Issue 2: The color contrast for start and reset buttons were poor.
Fix: The background grey color was removed and font color changed for better contrast.

Issue 3: The headings were not in the correct tags and missed the h1 tag.
Fix: First heading was given h1 tag and 2nd heading was given h2 tag.

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org)

![Home-Page](docs/readme_images/home-page.png)

![Game-Page](docs/readme_images/play-html.png)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)

![CSS-Validator](docs/readme_images/CSS-validation.png)  

- Javascript
    - No errors were returned when passing through the [JShint validator](https://jshint.com/)

![JavaScript-Validator](docs/readme_images/JavaScript-Validator.png)



### Lighthouse Report

![Home-page](docs/readme_images/lighthouse-home.png)

![Game-page](docs/readme_images/lighthouse-play.png)

### Functional Testing

* Navigation Links

Testing was performed to ensure all navigation links on the respective pages, navigated to the correct pages as per design. This was done by clicking on the navigation links on each page as shown below:

Home page - index.html Play page - play.html 

Links on all pages navigated to the correct pages as exptected.

* Play Game button
     * Play game button on the home page lets the user navigate to the play page directly after the game instructions are read. Play Game button navigates to play.html.
Link navigated to the correct page as expected.

* Start Button
    * The start button when clicked begins the game, and only then the player can make his/her choices. The scores also start increasing based on the result comparison between player and computer.
The start button functioned as expected.

* Reset button
    * The reset button can be clicked at the end of the game to begin the game again,, or to restart at any other point. This sets the scores to 0 for both, computer and player.
The reset button functioned as expected.

* Icons selected by player
     * Rock : When clicked on rock by the player, the correct image of rock is displayed in the "You" gaming section.
     The link functioned as expected.
    
    * Paper : When clicked on paper by the player, the correct image of paper is displayed in the "You"  gaming section.
    The Link functioned as expected.

    * Scissors : When clicked on scissors by the player, the correct image of scissors is displayed in the "You"  gaming section.
    The Link functioned as expected.

    * Lizard : When clicked on lizard by the player, the correct image of lizard is displayed in the "You"  gaming section.
    The Link functioned as expected.

    * Spock : When clicked on spock by the player, the correct image of spock is displayed in the "You"  gaming section.
    The Link functioned as expected.

* Message display while playing
    * First Scenario:
        * If the player chooses 'rock' and the computer selection is 'paper', then the message displayed is "Paper covers rock. Computer wins!!" and the color of the message area box changes to red for "Computer's win.

    ![Computer wins](docs/readme_images/Message1.png)

    * Second Scenario:
        * If the player chooses 'lizard' and the computer chooses 'paper' then the message displayed is "Lizard eats paper.You win!!" and the color of the message area box changes to green for all player wins.
    ![Player wins](docs/readme_images/Message2.png)   

    * Third Scenario: 
        * If both the player and computer choices are same, for example both chose 'lizard' then the message displayed is "Its a Draw!!" and the color of the message area box changes to light blue in color.

    ![Draw](docs/readme_images/Message3.png)    

    * Fourth Scenario:
        * When the Player wins (after completeing 12 points first), then the message displayed is "You Won. Click Reset to play again" and the color of the message area is green.

    ![Player-Win](docs/readme_images/Player-win.png)    

    * Fifth Scenario:
        * When the computer wins the message displayed is "Oh you lost. Computer wins. Click reset to play again" and the color of the message area box is red.

    ![Computer-win](docs/readme_images/Comp-win.png)    




## Deployment

### Version Control

The site was created using the Visual Studio Code editor and pushed to github to the remote repository ‘Portfolio-Project-2-Rock-Paper-Scissors-Lizard-Spock’.

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully.

The live link can be found here - https://niraja85.github.io/Rock-Paper-Scissors-Lizard-Spock/

## Credits

* The images and ideas for coding were taken from [This-Github-page.](https://github.com/TR94/rock-paper-scissors-lizard-spock?tab=readme-ov-file)
* The ideas of coding the score-board was taken from [This YouTube tutorial](https://www.youtube.com/watch?v=jaVNP3nIAv0)
* The logo and diagram information about the game was taken from Google.
* I would like to extend my thanks to my mentor Gareth Mc.Girr for his constant support and suggestions to improve the projects.














