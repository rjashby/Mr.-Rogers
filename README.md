
# _Programming Language Suggester_ 

#### By _**Ryan Ashby**_ 

#### _This application serves to take in a number from the user, and change that number into a string of automated responses based on the number inputted._ 

### _Link to GitHub Repository_

* https://github.com/rjashby/Mr.-Rogers

## Technologies Used 

* _VS Code Software_
* _Git_
* _Github_
* _Google Chrome Browser_
* _HTML_
* _CSS_ 
* _Markdown_ 
* _Bootstrap_
* _JavaScript_
* _jQuery_


## Description 

_This application will take a number from an input field, and by clicking the submit button, the number will be converted into an array of indices, starting at 0 and ending at the number entered._

_The array will be turned it into a string and then altered by replacing some of the numbers with phrases from the show "Mr. Rogers' Neighborhood."_

_More specifically, the application will replace any occurrence of a "3"s digit with the phrase "Won't you be my neighbor?" All "2"s digits will be replaced by the string "Boop!" Finally, all "1"s digits will be replaced by the string "Beep!" The remaining digits will remain unchanged._

_Importance as to the replacement of digits as they appear in multi-digit numbers will take place in the order listed above, starting with "3"s, then "2"s, and then "1"s._

_If the user wishes, they can re-submit their response, which will cause a new ridiculous image to appear, and the initial response given will be provided in reverse_ 

## Setup/Installation Requirements 

**Cloning**

1) _In order to utilize this page on your local machine, you will need to clone a copy of this repository using the "$ git clone {url}" command in your coding terminal._
2) _Navigate to your desired directory in your command terminal and run "$ git clone https://github.com/rjashby/Mr.-Rogers"_
3) _Should you wish to edit the code you cloned, you will need coding software. VS Code is an example of a free code editor, which can be downloaded at https://code.visualstudio.com/_.
4) _Once your coding software is installed, open the folder of the cloned repository, which will contain the HTML files, the bootstrap.css framework, any images, audio, as well separate individual stylesheets for each HTML file._
5) _To view the finished site locally, simply navigate to the folder/directory which you cloned the project, and open the index.html file in your browser._

**Downloading**

1) _In your browser, navigate to https://github.com/rjashby/Mr.-Rogers, and click the green "Code" button, which will provide a drop down menu. Click on "Download ZIP" at the bottom of the menu, and save it to your desired location._

2) _Once downloaded, unzip and extract the files._

3) _Follow the steps above to view, edit, and open the files as needed._

## Tests/Specs

Describe: rogers(number)

Test: "Function should take in a single number and return an array of that number."
Code: rogers(1)
Expected Output: [1]

Test: "Function should take in a multi-digit number and return an array of that number."
Code: rogers(123)
Expected Output: ["1", "2", "3"]

Test: "Function return an array, and change all '1' digits to the string 'Beep!'"
Code: rogers(123)
Expected Output: ["Beep!", "2", "3"]

Test: "Function should return an array, changing all '1's digits to the string 'Beep!', and all '2's digits to the string 'Boop!'"
Code: rogers(123)
Expected Output: ["Beep!", "Boop!", "3"]

Test: "Function should pass previous tests, and change all '3's digits to the string 'Won't you be my neighbor?'"
Code: rogers(123)
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?"]

Test: "Function should take a number, and return an array of all number values, up to, and including the number submitted"
Code: rogers(5)
Expected Output: ["0", "1", "2", "3", "4", "5"]

Test: "Function should pass previous tests, and change '32' to the string 'Won't you be my neighbor?'"
Code: rogers(32)
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, ... 'Won't you be my neighbor?']

Test: "Function should pass previous tests, and change '32' to the string 'Won't you be my neighbor?'"
Code: rogers(21)
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, ... 'Boop!']

Test: "Function should pass previous tests, and change '32' to the string 'Won't you be my neighbor?'"
Code: rogers(13)
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, ... 'Won't you be my neighbor?']

## Known Bugs 

* _No Known Bugs_  

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2022 Ryan Ashby. All Rights Reserved.

```
MIT License

Copyright (c) 2022 Ryan Ashby.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without 
limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so 
subject to the following conditions:

The above copyright notice and this permission notice shall be included 
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE 
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

------------------------------

<a href="#">Return to Top</a>