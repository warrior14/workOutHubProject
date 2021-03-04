let dataFields = document.getElementsByClassName("dataFields")[0];
let textArea1 = document.getElementsByClassName("textArea1")[0];

function creatingElements(elementTagName, attribute, attributeValue, innerTextOfElement, parentElementName) {
    try {
        let newElement = document.createElement(elementTagName);
        newElement.setAttribute(attribute, attributeValue);
        newElement.innerText = `${innerTextOfElement}`;
        parentElementName.append(newElement);
     } catch (e) {
        console.error(`Something is wrong with the creating elements function! ${e}`);
        };
};

creatingElements('button', 'id', 'javaScriptButton', 'hello there my friend!', dataFields);




function makingNewElements(elementTagName, attributeName1, attributeName2 , attributeValue1, attributeValue2, textOfElement, parentElementName) {
    try {    
        if(typeof attributeName2 === "string" && attributeName2 !== "") {
            let newElement = document.createElement(elementTagName);
            newElement.setAttribute(attributeName1, attributeValue1);
            newElement.setAttribute(attributeName2, attributeValue2);
            newElement.innerText = `${textOfElement}`;
            parentElementName.append(newElement);
        } else {
            let newElement = document.createElement(elementTagName);
            newElement.setAttribute(attributeName1, attributeValue2);
            newElement.innerText = `${textOfElement}`;
            parentElementName.append(newElement);
    } catch (e) {
        console.error(`${e}, elementTagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1}, attributeName2: ${attributeName2}, attributeValue2: ${attributeValue2}, textOfElement: ${textOfElement}, parentElementName: ${parentElementName}`);
        alert (e);
    };
  };
};

function creatingElements(elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, innerText, parentElementName) {
    try {
        if(typeof attributeName2 === "string" && attributeName2 !== "") {
            let newElement = document.createElement(elementTagName);
            newElement.setAttribute(attributeName1, attributeValue1);
            newElement.setAttribute(attributeName2, attributeValue2);
            newElement.innerText = `${innerText}`;
            parentElementName.append(newElement);
    } else {
        let newElement = document.createElement(elementTagName);
        newElement.setAttribute(attributeName1, attributeValue1);
        newElement.innerText = `${innerText}`;
        parentElementName.append(newElement);
    } catch (e) {
        console.error(`${e}, elementTagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1}, attributeName2: ${attributeName2}, innerText: ${innerText}, parentElementName: ${parentElementName}`);
        alert (e);
    };
  };
};






let makingNewElements = (elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, innerText, parentElementName) => {
        try {

            if(typeof attributeName2 === "string" && attributeName2 !== "") {
                let newElement = document.createElement(elementTagName);
                newElement.setAttribute(attributeName1, attributeValue1);
                newElement.setAttribute(attributeName2, attributeValue2);
                newElement.innerText = `${innerText}`;
                parentElementName.append(newElement);
            } else {
                let newElement = document.createElement(elementTagName);
                newElement.setAttribute(attributeName1, attributeValue1);
                newElement.innerText = `${innerText}`;
                parentElementName.append(newElement);
            };

        } catch (e) {
            console.error(`${e}, elementTagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1}, attributeName2: ${attributeName2}, attributeValue2: ${attributeValue2}, innerText: ${innerText}, parentElementName: ${parentElementName}`);
            alert (e)
        };
    };











let someObject = {
    value1: 1,
    value2: 2,

    addNumbers: function() {
        console.log(this.value1 + this.value2);

    };

    saySomething: () => {
        console.log('hi');
    }
};

someObject.addNumbers();
someObject.saySomething();

// arrow function skeleton
// let NameOfFunction = (parameter1, parameter2) => {
// your codegoes here
// };
// 

let nameOfFunction = () => {
    try {
        if() {



        } else {



        };


    } catch (e) {
        console.error(`${e}`)

    };
};

let creatingElements = (elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, innerText, parentElementName) => {
    try {
        if(typeof attributeName2 === "string" && attributeName2 !== "") {
            let newElement = document.createElement(elementTagName);
            newElement.setAttribute(attributeName1, attributeValue1);
            newElement.setAttribute(attributeName2, attributevalue2);
            newElement.innerText = `${innerText}`;
            parentElementTagName.append(newElement);
        } else {
            let newElement = document.createElement(elementTagName);
            newElement.setAttribute(attributeName1, attributeValue1);
            newElement.innerText = `${innerText}`;
            parentElementTagName.append(newElement);
        };
    } catch (e) {
        console.error(`${e}, elementTagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1}, attributeName2: ${attributeName2}, attributeValue2: ${attributeValue2}, innerText: ${innerText}, parenetElementName: ${parentElementName}`);
    };
};

creatingElements('p', 'id', 'javaScriptParagraph', 'we are the best in the world', dataFields);

let buttonElement = document.getElementsByClassName('button')[0];
let inputElement = document.getElementById('weightInput');

let changeTextOnClick = () => {
    buttonElement.innerText = 'Lucardo Ricardo Button';
    inputElement1.placeholder = "170";
};

buttonElement.addEventListener('click', changeTextOnClick);


let creatingNewElements = (elementTagName, attributeName1, attributeValue1, attributeName2, attributeValue2, innerText, parentElementName) => {
    try {
        if(typeof attributeName2 === "string" && attributeName2 !== "") {
            let newElement = document.createElement(elementTagName);
            newElement.setAttribute(attributeName1, attributeValue1);
            newElement.setAttribute(attributeName2, attributeValue2);
            newElement.innerText = `${innerText}`;
            parentElementName.append(newElement);
        } else {
            let newElement = document.createElement(elementTagName);
            newElement.setAttribute(attributeName1, attributeValue1);
            newElement.innerText = `${innerText}`;
            parentElementName.append(newElement);
        };
    } catch {e} {
        console.error(`${e}, elementTagName: ${elementTagName}, attributeName1: ${attributeName1}, attributeValue1: ${attributeValue1}, attributeName2: ${attributeName2}, attributeValue2: ${attributeValue2}, innerText: ${innerText}, parentElementName: ${parentElementName}`);
    }; 
};

creatingElements('p', 'id', 'javaScriptParagraph', 'hi, this is a paragraph', datafields);


let buttonElement = document.getElementsByClassName ('button')[0];

let changeTextOnClick = () => {
    buttonElement.innerText = "you now have clicked the button";
};

buttonElement.addEventListener('click', changeTextOnClick);

