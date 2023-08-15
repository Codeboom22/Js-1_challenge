// =================TEST DATA FOR QUESTION 1===========
// Case1:
const mainCourseCount1 = 2;
const appetizerCount1 = 1;
const dessertCount1 = 3;
const restaurantLocation1 = "Domestic";
const totalBill = 2 * 4000 + 1000 + 3 * 5000;
console.log(totalBill);
const billDiscount = (15 * totalBill) / 100;
console.log(billDiscount);

//Case 2:
const mainCourseCount2 = 3;
const appetizerCount2 = 2;
const dessertCount2 = 2;
const restaurantLocation2 = "International";
const totalBill2 = 3 * 4000 + 2 * 1000 + 2 * 5000;
const surCharge = (15 * totalBill2) / 100 + totalBill2;
console.log(totalBill2);
console.log(surCharge);

// =================TEST DATA FOR QUESTION 2===========
const age1 = 20;
const vehicleType1 = "C";
if (age1 < 16) {
  console.log(`not eligible`);
} else {
  console.log(`eligible`);
}

// Output: "Eligible"

const age2 = 16;
const vehicleType2 = "M";
if (age2 < 16) {
  console.log(`not eligible`);
} else {
  console.log(`eligible`);
}
// Output: "Eligible"

const age3 = 14;
const vehicleType3 = "S";
if (age3 < 16) {
  console.log(`not eligible`);
} else {
  console.log(`eligible`);
}

// Output: "Not Eligible"

// =================TEST DATA FOR QUESTION 3===========

const customerAge1 = 50;
const purchaseAmount1 = 80;
console.log(purchaseAmount1);
// Output: 80

const customerAge2 = 65;
const purchaseAmount2 = 120;
const discountPrice2 = (20 * 120) / 100;
const amountTopay = console.log(purchaseAmount2 - discountPrice2);
// Output: 96

const customerAge3 = 30;
const purchaseAmount3 = 150;
const discountPrice3 = (10 * 150) / 100;
const serVicefee = console.log(purchaseAmount3 - discountPrice3);
// Output: 135
