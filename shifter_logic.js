/*
###

    Elements, Element lists and Element collections

###
*/
//Body object
const body = document.getElementsByTagName('body');

//Theme buttons object
const theme_buttons = document.getElementsByClassName('theme-button');

//Container objects
const nav_container = document.getElementsByClassName('nav-container');
const content_container = document.getElementById('content-container');
const footer_container = document.getElementById('footer-container');

//Navigation elements
const nav_items = document.getElementsByName('nav-item');
const search_box = document.getElementsByName('search-box');

//Main content + Footer content
const lines = document.getElementsByTagName('hr');
const heading_1 = document.getElementsByTagName('h1');
const heading_3 = document.getElementsByTagName('h3');
const paragraphs = document.getElementsByTagName('p');
const list = document.getElementsByTagName('ul');
const social = document.getElementsByTagName('svg');

/*
###

    Custom Function Definitions

###
*/

//Change page style for body, nav, main content and footer
function changePage(themeName , bodyFontColour, navBackgroundColour){
    //Change body font + Body font color
    body[0].style.fontFamily = themeName+"-font";
    body[0].style.color = bodyFontColour;

    //Change nav item font color + remove all classes + add two classes
    for(let i = 0; i < nav_items.length; i++){
        nav_items[i].className = "";
        nav_items[i].classList.add(themeName +"-link");
    }

    //Change (hr) lines class
    for(let i = 0; i < lines.length; i++){
        lines[i].className = "";
        lines[i].classList.add("hr-" + themeName);
    }

    //Change navigation bar background color
    nav_container[0].style.backgroundColor = navBackgroundColour;

    //Seach box class changes 
    search_box[0].className = "";
    search_box[0].classList.add("search-box-" + themeName);

    //Main content class changes
    content_container.className = "";
    content_container.classList.add("content-" + themeName , "content-container");

    //Change footer styling
    footer_container.className = "";
    footer_container.classList.add("footer-" + themeName ,"footer-container");
}

//Change button class to show it is active
function activateButton(counter){
    //Remove active class from all theme buttons
    for(let i = 0; i < theme_buttons.length; i++){
        theme_buttons[i].classList.remove("active");
    }

    //Set specific theme button to active
    theme_buttons[counter].classList.add("active");
}

//Change the font size for paragraph elements and unordered list elements
function newListParaFontSize(newSize){
    //Paragraph tag styling
    for(let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.fontSize = newSize;
    }

    //Unordered List tag styling
    list[0].style.fontSize = newSize;
}

//Change SVG Social icon class
function changeSVGStyle(themeName){
    //Social icons styling changes
    for(let i = 0; i < social.length; i++){
        //Classname method DEPRECATED - therefore classlist needs to be used or errors will arise

        //Remove all possible classes for this element
        social[i].classList.remove("plain-svg", "cyber-svg", "antique-svg", "retro-svg", "professional-svg");

        //Add the correct class
        social[i].classList.add(themeName+"-svg");
    }
}

/*
##
    Main ShapeShifter function
##
*/

//Shapeshifting functionality
function shapeShift(counter){
    //Use counter to determine which theme button was clicked
    switch(counter){
        ///////////////#################################################
        //Plain Theme
        ///////////////#################################################
        case 0:

            newListParaFontSize("100%");

            changePage("plain", "rgb(0,0,0)", "rgb(255,255,255)");

            changeSVGStyle("plain");

            activateButton(counter);

            break;
        //---------------------------------------------------------------
        ///////////////#################################################
        //Cyber Theme
        ///////////////#################################################
        case 1:

            newListParaFontSize("100%");
            
            changePage("cyber", "rgb(50, 156, 1)", "rgb(0,0,0)");

            changeSVGStyle("cyber");

            activateButton(counter);

            break;
        //---------------------------------------------------------------
        ///////////////#################################################
        //Antique Theme
        ///////////////#################################################
        case 2:

            newListParaFontSize("120%");

            changePage("antique", "rgb(61, 37, 0)", "rgb(107, 81, 42)");

            changeSVGStyle("antique");

            activateButton(counter);

            break;
        //---------------------------------------------------------------
        ///////////////#################################################
        //Retro Theme
        ///////////////#################################################
        case 3:

            newListParaFontSize("100%");

            changePage("retro", "rgb(7, 125, 146)", "rgb(253, 133, 173)");

            changeSVGStyle("retro");

            activateButton(counter);

            break;
        //---------------------------------------------------------------
        ///////////////#################################################
        //Professional Theme
        ///////////////#################################################
        case 4:

            newListParaFontSize("100%");

            changePage("professional", "rgb(77, 77, 77)", "rgb(186, 199, 226)");

            changeSVGStyle("professional");

            activateButton(counter);

            break;
    }
}

/*
###

    ShapeShifting Driver Function - event listener enables connection to buttons

###
*/
//Loop through the theme_buttons object
for (let counter = 0; counter < theme_buttons.length; counter++) {
    //Get the element at index = counter
    const element = theme_buttons[counter];
    
    //Add event listener for element
    element.addEventListener('click', ()=>{shapeShift(counter)});
}