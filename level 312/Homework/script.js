function countingSort(arr, j) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

//თითოეული რიცხვიდან ვიღებთ შესაბამის ციფრს და ვითვლით რამდენჯერ გვხვდება ის
  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / j) % 10;
    count[digit]++;
  }
//prefix sum
  for (let d = 1; d < 10; d++) {
    count[d] += count[d - 1];
  }
// მასივს უკნიდან ვუყვებით, სტაბილურობისთვის
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / j) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
//output მასივიდან ვსვამთ დალაგებულ ელემენტებს arr-ში
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}
function radixSort(arr) {
// ვპოულობთ ყველაზე დიდ რიცხვს
  if (arr.length <= 1) return arr;

  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
// ვალაგებთ თითოეული ციფრის მიხედვით
  for (let j = 1; Math.floor(max / j) > 0; j *= 10) {
    countingSort(arr, j);
  }
  return arr;
}
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66])); // output : [2, 24, 45, 66, 75, 90, 170, 802]