'use strict'
const numberButton = document.getElementsByName('data-number');
const operationButton = document.getElementsByName('data-operation');
const resultButton = document.getElementsByName('data-result')[0];
const deleteButton = document.getElementsByName('data-delete')[0];
var resultDisplay = document.getElementById('result');
var beforeOperation = '';
var actualOperation = '';
var operation = undefined;

numberButton.forEach((boton) => {
     boton.addEventListener('click', () => {
          calculadora.addNumber(boton.innerText);
     })
});
operationButton.forEach((boton) => {
     boton.addEventListener('click', () => {
          calculadora.selecOperation(boton.value);
     })
});

resultButton.addEventListener('click', () => {
     calculadora.calculate();
     calculadora.updateDisplay();
});
deleteButton.addEventListener('click', () => {
     calculadora.clearDisplay();
     calculadora.updateDisplay();
});

let calculadora = {
     /*numberButton: document.getElementsByName('data-number'),
     operationButton: document.getElementsByName('data-operation'),
     resultButton: document.getElementsByName('data-result')[0],
     deleteButton: document.getElementsByName('data-delete')[0],
     resultDisplay: document.getElementById('result'),
     beforeOperation: '',
     actualOperation: '',
     operation: undefined,*/
     clearDisplay: () => {
          actualOperation = '';
          beforeOperation = '';
          operation = undefined;
     },
     addNumber: (num) => {
          actualOperation = actualOperation.toString() + num.toString();
          calculadora.updateDisplay();
     },
     selecOperation: (op) => {
          if (actualOperation === '') return;
          if (beforeOperation !== '') {
               calculadora.calculate()
          }
          operation = op.toString();
          beforeOperation = actualOperation;
          actualOperation = '';
     },
     updateDisplay: () => {
          resultDisplay.value = actualOperation;
     },
     calculate: () => {
          const anterior = parseFloat(beforeOperation);
          const actual = parseFloat(actualOperation);
          if (isNaN(anterior) || isNaN(actual)) return;

          const operaciones = {
               '+': anterior + actual,
               '-': anterior - actual,
               '/': anterior / actual,
               '*': anterior * actual
          }
          const calculate = operaciones[operation];
          actualOperation = calculate;
          operation = undefined;
          beforeOperation = '';
     }
     /*consola: console.log(resultDisplay, numberButton, operationButton, resultButton, deleteButton)*/
}
//console.log(resultDisplay, numberButton, operationButton, resultButton, deleteButton);
