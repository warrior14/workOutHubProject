let dataFields = document.getElementsByClassName("dataFields")[0];
let textArea1 = document.getElementsByClassName("textArea1")[0];

function creatingElements(elementTagName, attribute, attributeValue, innerTextOfElement, parentElementName) {
    try {
        let newElement = document.createElement(elementTagName);
        newElement.setAttribute(attribute, attributeValue);
        newElement.innerText = `${elementTagName}`;
        parentElementName.append(newElement);
     } catch (e) {
        console.error(`Something is wrong with the creating elements function! ${e}`);
        };
};

creatingElements('button', 'id', 'javaScriptButton', 'hello there my friend!', 'dataFields');

function practiceTryAndCatch() {
    try {
        throwError('you have made an error in your code')
    } catch (e) {
        console.error(e);
        };
    };l

function throwError(errorMessage) {
    throw new Error(errorMessage);
};

practiceTryAndCatch();