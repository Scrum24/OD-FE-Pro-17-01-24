const yearOfBirthQuestion = 'Hi. Please, enter your year of birth. Thank you!';
const yearOfBirth = window.prompt(yearOfBirthQuestion);

const cityQuestion = 'Please, enter the name of the city do you live (Kyiv, Washington, London or ..). Thank you!';
const city = window.prompt(cityQuestion);

const sportQuestion = 'Please, enter your favorite sport (bodybuilding, chess, swimming or ..). Thank you!';
const sport = window.prompt(sportQuestion);


const allVarsEntered = areAllVarsEntered(yearOfBirth, city, sport);
if (allVarsEntered) {
    const message = createUserDataMessage(yearOfBirth, city, sport);
    window.alert(message);

} else {
    const messageOfRegret = createMessageOfRegret(yearOfBirth, city, sport);
    window.alert(messageOfRegret);
}



function areAllVarsEntered(yearOfBirth, city, sport) {
    return yearOfBirth !== null &&
        city !== null &&
        sport !== null;
}

function createUserDataMessage(yearOfBirth, city, sport) {
    const userAge = getUserAgeMessage(yearOfBirth);
    const placeOfResidence = getPlaceOfResidenceMessage(city);
    const favoriteSport = getUserFavoriteSportMessage(sport);

    return `${userAge} \n${placeOfResidence} \n${favoriteSport}`;
}

function getUserAgeMessage(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const userAge = currentYear - (+yearOfBirth);

    return `You are ${userAge} years old (approximately).`;
}

function getPlaceOfResidenceMessage(city) {
    let placeOfResidence;
    switch (city) {
        case 'Kyiv':
            placeOfResidence = `capital of Ukraine`;
            break;
        case 'Washington':
            placeOfResidence = `capital of USA`;
            break;
        case 'London':
            placeOfResidence = `capital of United Kingdom`;
            break;
        default:
            placeOfResidence = `${city} city`;
    };

    return `You live in the ${placeOfResidence}.`;
}

function getUserFavoriteSportMessage(sport) {
    let userWantsToBeA;
    switch (sport) {
        case 'bodybuilding':
            userWantsToBeA = `Arnold Schwarzenegger`;
            break;
        case 'chess':
            userWantsToBeA = `Ding Liren`;
            break;
        case 'swimming':
            userWantsToBeA = `Michael Phelps`;
            break;
        default:
            userWantsToBeA = `a champion of ${sport}`;
    };

    return `Cool! Do you want to be like ${userWantsToBeA}?`;
}

function createMessageOfRegret(yearOfBirth, city, sport) {
    const invalidVars = [];
    if (yearOfBirth === null) {
        invalidVars.push('date of birth');
    }
    if (city === null) {
        invalidVars.push('city');
    }
    if (sport === null) {
        invalidVars.push('favorite sport');
    }

    const invalidVarsStr = (invalidVars.length === 1) ?
        invalidVars[0] :
        invalidVars.join(', ');

    return `It's a pity that you did not want to enter your: ${invalidVarsStr}.`;
}