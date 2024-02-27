const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789';

const keyLength = window.prompt('Hi. Please, enter key length.');
const keyCount = window.prompt('Enter amount of generated keys.');
generateKeys(keyLength, keyCount);

function generateKeys(keyLength, keyCount) {
    for (let i = 0; i < keyCount; i++) {
        const key = generateKey(keyLength);
        console.log(`${i + 1}) GeneratedKey: ${key}, length: ${key.length}`);
    }
}

function generateKey(keyLength, characters = CHARACTERS) {
    const charArrLength = characters.length;
    const key = [];

    for (let i = 0; i < keyLength; i++) {
        const randomCharNumb = Math.floor(Math.random() * charArrLength);
        const char = characters.charAt(randomCharNumb);
        key.push(char);
    }

    return key.join("");
}