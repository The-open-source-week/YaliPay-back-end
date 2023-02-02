export function GenerateConfirmationCode(): number {
  let codeGenereted: number;

  do {
    codeGenereted = Math.floor(Math.random() * 999999) + 100000;
  } while (codeGenereted > 999999);
  return codeGenereted;
}
