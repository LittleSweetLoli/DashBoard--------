import { handleFileSelect, toggleTable, toggleCharts, showSurvivalCharts, createGenderSurvivalChart } from './handlers.js';

const inputElement = document.getElementById('csvFile');
const showTableButton = document.getElementById('showTableButton');
const showChartsButton = document.getElementById('showChartsButton');
const showSurvivalChartsButton = document.getElementById('showSurvivalChartsButton');
const showSurvivalByGenderButton = document.getElementById('showSurvivalByGenderButton')
const tableContainer = document.getElementById('tableContainer');
const chartContainer = document.getElementById('chartContainer');


inputElement.addEventListener('change', handleFileSelect, false);
showTableButton.addEventListener('click', toggleTable, false);
showChartsButton.addEventListener('click', toggleCharts, false);
showSurvivalChartsButton.addEventListener('click', showSurvivalCharts, false);
showSurvivalByGenderButton.addEventListener('click', createGenderSurvivalChart, false);

// document.addEventListener('DOMContentLoaded', () => {
//     const inputElement = document.getElementById('csvFile');
//     const showTableButton = document.getElementById('showTableButton');
//     const showChartsButton = document.getElementById('showChartsButton');
//     const showSurvivalChartsButton = document.getElementById('showSurvivalChartsButton');
//     const showSurvivalByGenderButton = document.getElementById('showSurvivalByGenderButton')
//     const tableContainer = document.getElementById('tableContainer');
//     const chartContainer = document.getElementById('chartContainer');
       

//     inputElement.addEventListener('change', handleFileSelect, false);
//     showTableButton.addEventListener('click', toggleTable, false);
//     showChartsButton.addEventListener('click', toggleCharts, false);
//     showSurvivalChartsButton.addEventListener('click', showSurvivalCharts, false);
//     showSurvivalByGenderButton.addEventListener('click', toggleGenderSurvivalChart, false);

// });