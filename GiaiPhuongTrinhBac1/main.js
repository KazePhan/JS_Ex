function phuongTrinhBac1(a, b) {
  if (a == 0 && b == 0) {
    console.log('Vo nghiem');
  } else if (a == 0 && b != 0) {
    console.log('Vo nghiem');
  } else if (a != 0 && b == 0) {
    console.log('x=0');
  } else {
    console.log('x= ' + -b / a);
  }
}
console.log(phuongTrinhBac1(5, 0));
