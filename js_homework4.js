function checkProbabilityTheory(count) {
    if (count <= 0) {
        console.log("Кількість повинна бути більшою за 0");
        return;
    }

    let evenCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 901) + 100;
        if (randomNumber % 2 === 0) {
            evenCount++;
        }
    }

    const oddCount = count - evenCount;
    const evenPercentage = ((evenCount / count) * 100).toFixed(2);
    const oddPercentage = ((oddCount / count) * 100).toFixed(2);

    console.log(`Кількість чисел: ${count}`);
    console.log(`Кількість парних чисел: ${evenCount}`);
    console.log(`Кількість не парних чисел: ${oddCount}`);
    console.log(`Відсоток не парних: ${evenPercentage}%`);
    console.log(`Відсоток парних: ${oddPercentage}%`);
}

checkProbabilityTheory(1000);
