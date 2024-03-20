import { handleFileSelect, toggleTable, toggleCharts, showSurvivalCharts, toggleMaleSurvivalStatistics, toggleFemaleSurvivalStatistics } from './handlers.js';
//import { displaySurvivalStatistics } from './dataProcessing.js';

const inputElement = document.getElementById('csvFile');
const showTableButton = document.getElementById('showTableButton');
const showChartsButton = document.getElementById('showChartsButton');
const showSurvivalChartsButton = document.getElementById('showSurvivalChartsButton');
const tableContainer= document.getElementById('tableContainer');
const chartContainer = document.getElementById('chartContainer');
const showMaleSurvivalButton = document.getElementById('showMaleSurvivalButton')
const showFemaleSurvivalButton = document.getElementById('showFemaleSurvivalButton')

inputElement.addEventListener('change', handleFileSelect, false);
showTableButton.addEventListener('click', toggleTable, false);
showChartsButton.addEventListener('click', toggleCharts, false);
showSurvivalChartsButton.addEventListener('click', showSurvivalCharts, false);
showMaleSurvivalButton.addEventListener('click', toggleMaleSurvivalStatistics, false);
showFemaleSurvivalButton.addEventListener('click', toggleFemaleSurvivalStatistics, false);