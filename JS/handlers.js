import { createTable, createCharts, createSurvivalCharts } from './dataProcessing.js';

let csvData = [];

export function handleFileSelect(event) {
    const file = event.target.files[0];
    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            csvData = results.data;
        }
    });
}

export function toggleTable() {
    const tableContainer = document.getElementById('tableContainer');
    if (tableContainer.children.length === 0 || tableContainer.style.display === 'none') {
        createTable(csvData);
    }
    tableContainer.style.display = tableContainer.style.display === 'none' ? 'block' : 'none';
}

export function toggleCharts() {
    const chartContainer = document.getElementById('chartContainer');
    if (chartContainer.children.length === 0 || chartContainer.style.display === 'none') {
        createCharts(csvData, chartContainer);
    }
    chartContainer.style.display = chartContainer.style.display === 'none' ? 'block' : 'none';
}

export function showSurvivalCharts() {
    const chartContainer = document.getElementById('chartContainer');
    if (chartContainer.children.length === 0 || chartContainer.style.display === 'none') {
        createSurvivalCharts(csvData, chartContainer);
    }
    chartContainer.style.display = chartContainer.style.display === 'none' ? 'block' : 'none';
}
