# Password_Generator
# Description
    For this project we were asked to create a random password generator that would allow the User to choose the number of characters they wanted to use and the type of characters they'd like to use; and would then generate a random password for the User.
# HTML and CSS
    For this project the HTML and CSS were given to us from the start
# Javascript
    START PROMPT
    For this project we had to connect the generateBtn to the prompt so that when a user clicked the button the prompt would appear. In order to do this, I created an event listener that on click would start the prompt
    VARIABLE STRINGS
    The User needed to be able to choose from different characters to decide what types of characters they wanted to use. In order to do this I created 4 strings for numbers, upper case characters, lower case characters, and symbols
    OPTIONS
    The User needed to be able to choose from different options to create their password. In order to do so I created different if statements for the different character strings and added these characters to the "allCharacters" string.
    GENERATE
    After the allCharacters string had the User's choice of characters the password then needed to randomize the choice. I did so using Math.floor(Math.random) to randomize the full integers from the allCharacters string.
    SHOW PASSWORD
    I then assigned the password to the id=password box from the index so that when the prompts were completed the password would show up in the correct spot.
# Aids
    This project was done with research via W3Schools and MDN WebDocs
    https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    https://www.w3schools.com/jsref/met_document_queryselector.asp
# Collaborators
    While this was done individually it was done with instruction from Fil and Daniel.
    https://github.com/c0dehot
    https://github.com/shibeknight
    Also aid from my group.
    Victor Scherman, Shaun Samoridny, Jessica Zonta, and Anjali Pant
# Links
