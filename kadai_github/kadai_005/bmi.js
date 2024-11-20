// 体重と身長の定義
const weight = 68; // kg
const height = 1.7; // m

// BMI計算式
const bmi = weight / (height * height);

// 結果をコンソールに出力
console.log("体重:", weight, "kg");
console.log("身長:", height, "m");
console.log("BMI:", bmi.toFixed(2)); // 小数点以下2桁に丸める