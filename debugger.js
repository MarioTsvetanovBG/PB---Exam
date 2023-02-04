function suitcases(input) {
    let capacity = Number(input[0]);
    let counter = 0;
    let countToThree = 0;
    let totalUsed = 0;
    let index = 1;
    while(true) {
        let newSuitcase = input[index];
        if (newSuitcase === "End") {
            console.log("Congratulations! All suitcases are loaded!");
            break;
        }
        counter++;
        countToThree++;
        let newSuitcaseVolume = Number(newSuitcase);
        if (countToThree === 3) {
            newSuitcaseVolume = 1.1 * newSuitcaseVolume;
            countToThree = 0;
        }
        totalUsed += newSuitcaseVolume;
        if (totalUsed > capacity) { 
            console.log("No more space!");
            break;
        }
    }
    console.log(`Statistic: ${counter} suitcases loaded.`);
}

suitcases (["550",
    "100",
    "252",
    "72",
    "End"])