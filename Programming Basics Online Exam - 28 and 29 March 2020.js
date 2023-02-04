function birthday(input) {
    let rent = Number(input);
    
    let cake = 0.2 * rent;
    let drinks = 0.55 * cake;
    let animator = rent / 3;

    let budget = rent + cake + drinks + animator;
    console.log(budget);
}
rojdenDen (["2250"])

function changeBuro(input) {
// •	1 биткойн = 1168 лева.
// •	1 китайски юан = 0.15 долара.
// •	1 долар = 1.76 лева.
// •	1 евро = 1.95 лева.
    let bitcoin = Number(input[0]);
    let kitaiski = Number(input[1]);
    let komisionna = Number(input[2]);
    
    let result = bitcoin * 1168 / 1.95 + kitaiski * 0.15 * 1.76 / 1.95;
    let komisionnaResult = result * komisionna / 100;
    console.log((result - komisionnaResult).toFixed(2));
}

function kotka(input) {
    let dayWalk = Number(input[0]);
    let times = Number(input[1]);
    let calories = Number(input[2]);

    let burnedCalories = dayWalk * times * 5;

    if (calories / 2 <= burnedCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`)
    }
}


function climber(input) {
    
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let oneMeterTime = Number(input[2]);
    // наклона на терена го забавя на всеки 50 м. с 30 секунди.
    
    let stopper = Math.floor(distance / 50) * 30; 
    let climberTime = distance * oneMeterTime + stopper;

    if (climberTime < record) {
        console.log(`Yes! The new record is ${climberTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(climberTime - record).toFixed(2)} seconds slower.`);
    }
}


function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    if (fruit === "Watermelon") {
        if (size === "small") {
            price = 56;
        } else if (size === "big") {
            price = 28.7;
        }
    } else if (fruit === "Mango") {
        if (size === "small") {
            price = 36.66;
        } else if (size === "big") {
            price = 19.6;
        }
    } else if (fruit === "Pineapple") {
        if (size === "small") {
            price = 42.10;
        } else if (size === "big") {
            price = 24.8;
        }
    } else if (fruit === "Raspberry") {
        if (size === "small") {
            price = 20;
        } else if (size === "big") {
            price = 15.2;
        }
    }

    let totalPrice = 0

    if (size === "small") {
        totalPrice = price * 2 * quantity;
    } else if (size === "big") {
        totalPrice = price * 5 * quantity;
    }
    
    let discount = 0;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        discount = 0.15 * totalPrice;
    } else if (totalPrice > 1000) {
        discount = totalPrice / 2;
    }



    console.log(`${(totalPrice - discount).toFixed(2)} lv.`);
}


function fitnessCard(input) {
    let totalSum = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let cardPrice = 0;
    if (gender === "m") {
        if (sport === "Gym") {
            cardPrice = 42;
        } else if (sport === "Boxing") {
            cardPrice = 41;
        } else if (sport === "Yoga") {
            cardPrice = 45;
        } else if (sport === "Zumba") {
            cardPrice = 34;
        } else if (sport === "Dances") {
            cardPrice = 51;
        } else if (sport === "Pilates") {
            cardPrice = 39;
        }
    } else if (gender === "f") {
        if (sport === "Gym") {
            cardPrice = 35;
        } else if (sport === "Boxing") {
            cardPrice = 37;
        } else if (sport === "Yoga") {
            cardPrice = 42;
        } else if (sport === "Zumba") {
            cardPrice = 31;
        } else if (sport === "Dances") {
            cardPrice = 53;
        } else if (sport === "Pilates") {
            cardPrice = 37;
        }
    }

    let discount = 0;
    if (age <= 19) {
        discount = cardPrice * 0.2;
    }

    let totalPrice = cardPrice - discount;

    if (totalPrice <= totalSum) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(totalPrice - totalSum).toFixed(2)} more.`);
    }
}


function petsFood(input) {
    let days = Number(input[0]);
    let foodQuantity = Number(input[1]);
    let index = 2;
    let count = 0;
    
    let dogEat = 0;
    let catEat = 0;
    let biscuitsEat = 0;
    
    for (let i = 0; i < days; i++) {
        count++;
        let dogFood = Number(input[index]);
        index++; 
        let catFood = Number(input[index]);
        
        dogEat += dogFood;
        catEat += catFood;
        
        if (count === 3) {
            biscuitsEat += 0.1 * (dogFood + catFood);
            count = 0;
        }
        index++;
    }
    let totalEat = dogEat + catEat;
    let dogPercent = dogEat / totalEat * 100;
    let catPercent = catEat / totalEat * 100;
    let totalPercent = totalEat / foodQuantity * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuitsEat)}gr.`);
    console.log(`${totalPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercent.toFixed(2)}% eaten from the cat.`);
}


function trekkingMania(input) {
    let groups = Number(input[0]);
    let index = 1;
    let totalka = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    for (let i = 1; i <= groups; i++) {
        let people = Number(input[index]) 
        if (people <= 5) {
            a += people;
        } else if (people >= 6 && people <= 12) {
            b += people;
        } else if (people >= 13 && people <= 25) {
            c += people;
        } else if (people >= 26 && people <= 40) {
            d += people;
        } else if (people > 40) {
            e += people;
        }
        totalka += people;
        index++;
    }
    let aPer = a / totalka * 100;
    let bPer = b / totalka * 100;
    let cPer = c / totalka * 100;
    let dPer = d / totalka * 100;
    let ePer = e / totalka * 100;
    console.log(aPer.toFixed(2) + "%");
    console.log(bPer.toFixed(2) + "%");
    console.log(cPer.toFixed(2) + "%");
    console.log(dPer.toFixed(2) + "%");
    console.log(ePer.toFixed(2) + "%");
}

function puppyCare(input) {
    let totalFood = Number(input[0]);
    let food = 1000 * totalFood; //kg --> g
    let index = 1;
    let totalEat = 0;
    while (true) {
        let inputingText = input[index];
        if (inputingText === "Adopted") {
            break;
        }
        let dogEat = Number(inputingText);
        
        totalEat += dogEat;
        index++;
    }

    if (totalEat <= food) {
        console.log(`Food is enough! Leftovers: ${(food - totalEat)} grams.`);
    
    } else {
       console.log(`Food is not enough. You need ${totalEat - food} grams more.`);
    }
}


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
            counter--;
            console.log("No more space!");
            break;
        }
        index++;
    }
    console.log(`Statistic: ${counter} suitcases loaded.`);
}

function christmasTournament(input) {
    let days = Number(input[0]);
    let index = 0;
    let moneyPerDay = 0;
    let totalMoney = 0;
    let count = 0;

    let winRate = 0;
    let loseRate = 0;
    let totalWinRate = 0;
    let totalLoseRate = 0;

    while(true) {
        index++;
        let sport = input[index];
        if (sport === "Finish") {
            count++;
            moneyPerDay = winRate * 20;
            if (winRate > loseRate) {
                moneyPerDay = moneyPerDay * 1.1;
                totalWinRate++;
            } else {
                totalLoseRate++;
            }
            totalMoney += moneyPerDay;
            if (totalWinRate > totalLoseRate && count === days) {
                totalMoney = totalMoney * 1.2;
            }
            winRate = 0;
            loseRate = 0;
            
            if (count === days) {
                break;
            }
            continue;
        }
        index++;
        let result = input[index];
        
        if (result === "win") {
            winRate++;
        } else {
            loseRate++;
        }
    }
    if (totalLoseRate < totalWinRate) {
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }
}