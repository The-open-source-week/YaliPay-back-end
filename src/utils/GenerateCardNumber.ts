export function GenerateAccountNumber() {
  let accountNumberGenerated = '1';

  for (let i = 0; i < 6; i++) {
    accountNumberGenerated += Math.floor(Math.random() * 10).toString();
  }
  accountNumberGenerated += '001';

  return accountNumberGenerated;
}
