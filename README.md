#Project 2- Interactive Resume
## Udacity Front-End Nanodegree

Base Outline for site forked from Udacity repo <https://github.com/udacity/frontend-nanodegree-resume>

### Started with this:
![](http://i.imgur.com/pWU1Xbl.png)

####Process

-Website uses resumeBuilder.js to replace and append placeholder information in the variables defined in helper.js. This populates all of the information on the website including contact info, bio information, work history, completed projects, and education history.

-helper.js pulls location information from resumeBuilder to show a Google Map on the bottom of the page with markers for every city I've studied or worked.

-jquery.sticky.js was included for the top navigation function. The top navigation appears after scrolling down from the intro picture and then stays at the top of the page. Clicking on an item in the navigation automatically scrolls the page to that section.

-resumeBuilder has several main functions:
- header
- work
- projects
- education

The three append helper functions (replaceAndAppend, replaceAndPrepend, and appendArray) are called within these functions to replace and append/prepend the appropriate information to the correct area of the page. These functions help cut down on repetitive code.

-Background image was generated using [Trianglify](http://qrohlf.com/trianglify/)