# Number Guesser

Number Guesser is a simple guessing game designed for two users to guess a random integer, with the ability to customize the range of possible numbers for increased or decreased difficulty of game play. This project was a collaboration between Pol Sieira and Sara Karsh.

## Objective and Purpose

The goal of this assignment was to not only create a website that visually aligned with a provided layout comp, but to also implement a responsive design that can take the application from desktop to mobile devices with ease. In addition, funtionality was implemented to customize the game experience for the users.

## Process

Number Guesser implements HTML, CSS, and JavaScript. The basic layout is comprised of HTML with BEM naming conventions and accompanying CSS. With the implementation of media queries, the layout adjusts for different screen sizes to ensure user ease.

Through the use of JavaScript, we were able to add a certain level of customization to the user experience. While the range of available numbers defaults to 1 to 100, users can update the range to either increase or decrease the difficulty of play. In addition, form validation is in place to ensure the input values do not violate specific rules, including the maximum range being smaller than the minimum, guesses being outside the range of possible numbers, and names entered can only be comprised of alphanumeric characters.

While the winner cards were initially implemented using basic CSS and some JavaScript to toggle visibility, through the insertAdjacentHTML method we were able to increase functionality. There is no limit to the number of winner cards that can be generated and fit on the screen, and each card also displays the total number of guesses made and the time it took for players to reach the right answer. To increase play difficulty, for each winning round the game automatically increases the maximum range by 10 and also ensures that the range of possible numbers is never negative. Through event bubbling, individual cards can be deleted from the right side of the page without affecting any other winner cards or functionality.


## Results

Layout comps provided by Turing School:

![Desktop Layout](./images/number-guesser-comp.png)
![Mobile Layout](./images/number-guesser-mobile-comp.png)
![Error Message](./images/number-guesser-error-comp.png)

Results:
![Final desktop layout](./images/number-guesser.png)
![Mobile](./images/number-guesser-mobile.png)
![Error Messages](./images/number-guesser-error.png)


