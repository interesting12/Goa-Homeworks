
function changeCount( change ) {
  const coins = change.split(" ");
  let total = 0;
  for (let coin of coins) {
    total += CHANGE[coin];
  }
  return `$${total.toFixed(2)}`;
}
