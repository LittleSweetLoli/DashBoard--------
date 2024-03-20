import { handleFileSelect, toggleTable, toggleCharts, showSurvivalCharts } from './handlers.js';

const inputElement = document.getElementById('csvFile');
const showTableButton = document.getElementById('showTableButton');
const showChartsButton = document.getElementById('showChartsButton');
const showSurvivalChartsButton = document.getElementById('showSurvivalChartsButton');
const tableContainer= document.getElementById('tableContainer');
const chartContainer = document.getElementById('chartContainer');

inputElement.addEventListener('change', handleFileSelect, false);
showTableButton.addEventListener('click', toggleTable, false);
showChartsButton.addEventListener('click', toggleCharts, false);
showSurvivalChartsButton.addEventListener('click', showSurvivalCharts, false);

// document.addEventListener('DOMContentLoaded', () => {
//     const inputElement = document.getElementById('csvFile');
//     const showTableButton = document.getElementById('showTableButton');
//     const showChartsButton = document.getElementById('showChartsButton');
//     const showSurvivalChartsButton = document.getElementById('showSurvivalChartsButton');

//     inputElement.addEventListener('change', handleFileSelect, false);
//     showTableButton.addEventListener('click', toggleTable, false);
//     showChartsButton.addEventListener('click', toggleCharts, false);
//     showSurvivalChartsButton.addEventListener('click', showSurvivalCharts, false);
// });