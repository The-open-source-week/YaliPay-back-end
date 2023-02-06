export function GenerateCVV(): number {
  let cvvGenereted: number;

  do {
    cvvGenereted = Math.floor(Math.random() * 9999) + 1000;
  } while (cvvGenereted > 9999);
  return cvvGenereted;
}
