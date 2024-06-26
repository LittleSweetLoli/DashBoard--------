import { 
    prepareAgeData, 
    prepareFareData, 
    prepareClassData, 
    prepareGenderData, 
    prepareEmbarkationData, 
    prepareSurvivalByAge, 
    prepareSurvivalByAttribute, 
    prepareSurvivalByGender,
    prepareSurvivalStatistics,
    prepareSurvivalStatsByAge,
    prepareSurvivalStatsByFare,
    prepareSurvivalStatsByClass
} from './dataPreparation.js';

import { drawHistogram, drawLineChart } from './chartUtils.js';

export function createTable(data) {
    const table = d3.select(tableContainer)
        .append('table')
        .attr('class', 'table');

    const thead = table.append('thead');
    const tbody = table.append('tbody');

    const headerRow = thead.append('tr');

    Object.keys(data[0]).forEach(key => {
        headerRow.append('th').text(key);
    });

    data.forEach(row => {
        const dataRow = tbody.append('tr');
        Object.values(row).forEach(value => {
            dataRow.append('td').text(value);
        });
    });
}

export function createCharts(data, container) {
    d3.select(container).selectAll('.chart').remove();

    const ageData = prepareAgeData(data);
    const fareData = prepareFareData(data);
    const classData = prepareClassData(data);
    const genderData = prepareGenderData(data);
    const embarkationData = prepareEmbarkationData(data);

    drawHistogram(ageData, 'Возраст', 'Количество людей', container);
    drawHistogram(fareData, 'Цена билета', 'Купленные билеты', container);
    drawHistogram(classData, 'Класс', 'Количество людей', container);
    drawHistogram(genderData, 'Пол', 'Количество', container);
    drawHistogram(embarkationData, 'Порт посадки', 'Количество', container);
}

export function createSurvivalCharts(data, container) {
    const survivalData = [];

    const Survival = prepareSurvivalByAttribute(data, 'Pclass');
    survivalData.push({ 'data': classSurvival, 'xAxisLabel': 'Класс', 'yAxisLabel': 'Выжившие' });

    const ageSurvival = prepareSurvivalByAge(data);
    survivalData.push({ 'data': ageSurvival, 'xAxisLabel': 'Возрастные диапазоны', 'yAxisLabel': 'Выжившие' });

    const classSurvival = prepareSurvivalByAttribute(data, 'Pclass');
    survivalData.push({ 'data': classSurvival, 'xAxisLabel': 'Класс', 'yAxisLabel': 'Выжившие' });

    const genderSurvival = prepareSurvivalByGender(data);
    survivalData.push({ 'data': genderSurvival, 'xAxisLabel': 'Пол', 'yAxisLabel': 'Выжившие' });

    d3.select(container).selectAll('.chart').remove();

    survivalData.forEach(survival => {
        drawLineChart(survival.data, survival.xAxisLabel, survival.yAxisLabel, container);
    });
}

export function displaySurvivalStatistics(data, container, gender) {
    const survivalData = [];
    
    const MaleSurvival = prepareSurvivalStatistics(data, 'Sex', gender);
    survivalData.push({ 'data': MaleSurvival, 'xAxisLabel': 'Пол', 'yAxisLabel': 'Выжившие' });

    const embarkationData = prepareSurvivalStatistics(data, 'Embarked', gender);
    survivalData.push({ 'data': embarkationData, 'xAxisLabel': 'Порт посадки', 'yAxisLabel': 'Выжившие' });

    const ageSurvival = prepareSurvivalStatsByAge(data, gender);
    survivalData.push({ 'data': ageSurvival, 'xAxisLabel': 'Возраст', 'yAxisLabel': 'Выжившие' });

    const FareSurvival = prepareSurvivalStatsByFare(data, gender);
    survivalData.push({ 'data': FareSurvival, 'xAxisLabel': 'Цена билета', 'yAxisLabel': 'Выжившие' });
    
    const classSurvival = prepareSurvivalStatsByClass(data, gender);
    survivalData.push({ 'data': classSurvival, 'xAxisLabel': 'Класс', 'yAxisLabel': 'Выжившие' });


    // Очистка содержимого контейнера перед отрисовкой новой гистограммы
    d3.select(container).selectAll('*').remove();

    survivalData.forEach(survival => {
        drawHistogram(survival.data, survival.xAxisLabel, survival.yAxisLabel, container);
    });
}