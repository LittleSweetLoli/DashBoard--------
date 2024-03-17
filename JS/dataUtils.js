function prepareAgeData(data) {
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

function prepareFareData(data) {
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
function prepareSurvivalByAge(data) {
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

function prepareSurvivalByGender(data) {
    const genderCounts = {};
    const genders = ['male', 'female'];
    genders.forEach(gender => {
        const filteredData = data.filter(row => row['Sex'] === gender);
        const survivedCount = filteredData.filter(row => row['Survived'] === 1).length;
        genderCounts[gender] = survivedCount;
    });
    return Object.entries(genderCounts).map(([key, value]) => ({ 'label': key, 'value': value }));
}