let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
};


services.price = function () {
    let total = 0;
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
            total += parseInt(this[key]);
        }
    }
    return total + " грн";
};


services.minPrice = function () {
    let prices = [];
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
            prices.push(parseInt(this[key]));
        }
    }
    return Math.min(...prices) + " грн";
};


services.maxPrice = function () {
    let prices = [];
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
            prices.push(parseInt(this[key]));
        }
    }
    return Math.max(...prices) + " грн";
};


services["Розбити скло"] = "200 грн";

console.log("Загальна вартість: ", services.price());
console.log("Мінімальна ціна: ", services.minPrice());
console.log("Максимальна ціна: ", services.maxPrice());
