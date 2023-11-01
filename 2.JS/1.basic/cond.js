let score = 90;

console.log("--- if ---");
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// ---------------------

console.log("--- switch ---");
switch (
  score // 조건에 따라서 jump 를 하는 기능
) {
  case 90:
    console.log("A");
    console.log("AA");
    break;
    console.log("AAA");
  case 90:
    console.log("B");
    break;
  case 70:
    console.log("C");
    break;
}
console.log("--- The END ---");
