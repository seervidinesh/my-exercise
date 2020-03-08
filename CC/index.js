var divElem = document.createElement('div');
var headingElem = document.createElement('h1');
var lineElem = document.createElement('hr');
var tableElem = document.createElement('table');
var tableheadElem = document.createElement('thead');
var tablehead = document.createElement('th');
var tableRowElem = document.createElement('tr');
var tableBody = document.createElement('tbody');
var tableData = document.createElement('td');

headingElem.innerText = 'Numbers and Squares';

divElem.style.fontFamily = 'sans-serif';
divElem.appendChild(headingElem);
divElem.appendChild(lineElem);
divElem.appendChild(lineElem.cloneNode(true));
divElem.appendChild(tableElem);

tableElem.appendChild(tableheadElem);

tableheadElem.appendChild(tablehead);
tablehead.innerText =

    tableElem.appendChild(tableBody);
tableheadElem.appendChild(tableRowElem);
tableBody.appendChild(tableRowElem.cloneNode(true));

document.body.prepend(divElem);