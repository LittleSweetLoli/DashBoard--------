export function prepareAgeData(data) {
    const ageCounts = {};
    let unknownCount = 0;
    data.forEach(row => {
        if (row['Age']) {
            const ageRange = Math.floor(row['Age'] / 10) * 10;
            if (ageCounts[ageRange]) {
                ageCounts[ageRange]++;
            } else {
                ageCounts[ageRange] = 1;
            }
        } else {
            unknownCount++;
        }
    });
    ageCounts['Unknown'] = unknownCount;
    return Object.entries(ageCounts).map(([key, value]) => ({ 'label': key === 'Unknown' ? 'Unknown' : key + '-' + (+key + 9), 'value': value }));
}

export function prepareFareData(data) {
    const fareCounts = {};
    let unknownCount = 0;
    data.forEach(row => {
        if (row['Fare']) {
            const fareRange = Math.floor(row['Fare'] / 50) * 50;
            if (fareCounts[fareRange]) {
                fareCounts[fareRange]++;
            } else {
                fareCounts[fareRange] = 1;
            }
        } else {
            unknownCount++;
        }
    });
    fareCounts['Unknown'] = unknownCount;
    return Object.entries(fareCounts).map(([key, value]) => ({ 'label': key === 'Unknown' ? 'Unknown' : key + '-' + (+key + 49), 'value': value }));
}

export function prepareSurvivalByAge(data) {
    const ageCounts = {};
    const ageRanges = [0, 10, 20, 30, 40, 50, 60, 70, 80];
    ageRanges.forEach((range, index) => {
        const filteredData = data.filter(row => {
            const age = row['Age'];
            if (age >= range && age < ageRanges[index + 1]) {
                return true;
            }
            return false;
        });
        const survivedCount = filteredData.filter(row => row['Survived'] === 1).length;
        ageCounts[`${range}-${ageRanges[index + 1]}`] = survivedCount;
    });
    return Object.entries(ageCounts).map(([key, value]) => ({ 'label': key, 'value': value }));
}

export function prepareSurvivalByGender(data) {
    const genderCounts = { 'male': 0, 'female': 0 };
    data.forEach(row => {
        const gender = row['Sex'];
        if (gender && (gender === 'male' || gender === 'female')) {
            const survivedCount = row['Survived'] === 1 ? 1 : 0;
            genderCounts[gender] += survivedCount;
        }
    });
    return Object.entries(genderCounts).map(([key, value]) => ({ 'label': key, 'value': value }));
}


export function prepareClassData(data) {
    const classCounts = {};
    let unknownCount = 0;
    data.forEach(row => {
        if (row['Pclass']) {
            const passengerClass = row['Pclass'];
            if (classCounts[passengerClass]) {
                classCounts[passengerClass]++;
            } else {
                classCounts[passengerClass] = 1;
            }
        } else {
            unknownCount++;
        }
    });
    classCounts['Unknown'] = unknownCount;
    return Object.entries(classCounts).map(([key, value]) => ({ 'label': key === 'Unknown' ? 'Unknown' : key, 'value': value }));
}

export function prepareGenderData(data) {
    const genderCounts = { 'male': 0, 'female': 0, 'Unknown': 0 };
    data.forEach(row => {
        const gender = row['Sex'];
        if (gender) {
            genderCounts[gender]++;
        } else {
            genderCounts['Unknown']++;
        }
    });
    return Object.entries(genderCounts).map(([key, value]) => ({ 'label': key === 'Unknown' ? 'Unknown' : key, 'value': value }));
}

export function prepareEmbarkationData(data) {
    const embarkationCounts = { 'S': 0, 'C': 0, 'Q': 0, 'Unknown': 0 };
    data.forEach(row => {
        const embarkationPort = row['Embarked'];
        if (embarkationPort) {
            embarkationCounts[embarkationPort]++;
        } else {
            embarkationCounts['Unknown']++;
        }
    });
    return Object.entries(embarkationCounts).map(([key, value]) => ({ 'label': key === 'Unknown' ? 'Unknown' : key, 'value': value }));
}

export function prepareSurvivalByAttribute(data, attribute) {
    const survivalCounts = {};
    const attributeValues = [...new Set(data.map(row => row[attribute]))];
    attributeValues.forEach(value => {
        const filteredData = data.filter(row => row[attribute] === value);
        const survivedCount = filteredData.filter(row => row['Survived'] === 1).length;
        survivalCounts[value] = survivedCount;
    });
    return Object.entries(survivalCounts).map(([key, value]) => ({ 'label': key, 'value': value }));
}