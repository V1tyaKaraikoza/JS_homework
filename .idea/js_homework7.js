const strings = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];

for (let i=0; i<strings.length; i++) {
    const str= strings[i];
    if (/^[^Aa]{6,}$/.test(str)) {

        console.log(`{str}: знайдено`);
    } else {
        console.log(`{str}: не знайдено`);
    }
}



