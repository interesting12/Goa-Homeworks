function bubbleSort(arr) {
  let n = arr.length;

  // გადავუაროთ მასივს for loop-ით
  for (let i = 0; i < n - 1; i++) {
    // ერთი სრული ლუპის შემდეგ ყველაზე დიდი ელემენტი გადადის მასივის ბოლოში
    for (let j = 0; j < n - 1 - i; j++) {
      // თუ მარცხენა ელემენტი დიდია მარჯვენაზე
      if (arr[j] > arr[j + 1]) {
        // ვუცვლით ადგილებს
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// test
console.log(bubbleSort([5, 3, 8, 4, 2]));




function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // ელემენტი, რომლის ჩასმაც გვინდა
    let j = i - 1;

    // ქურენთზე დიდი ელემენტი გადაგვაქვს მარჯვნივ
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // ელემენტების მარჯვნივ გადატანის შემდეგ გაჩნდა ცარიელი ადგილი, სადაც უნდა ჩავსვათ ქურენთი
    arr[j + 1] = current;
  }
  return arr;
}

// test
console.log(insertionSort([9, 1, 5, 3, 7]));




function selectionSort(arr) {
  let n = arr.length; // უბრალოდ ვინახავთ მასივის სიგრძეს,

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // ვპოულობთ მინიმუმს დაუხარისხებელ ნაწილში
    for (let j = i + 1; j < n; j++) {
        // შედარება: თუ ახალი ელემენტი უფრო პატარაა, ვანახლებთ minIndex-ს
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // ვუცვლით ადგილებს
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

// test
console.log(selectionSort([64, 25, 12, 22, 11]));





function countingSort(arr) {
  let max = Math.max(...arr); //ვიპოვოთ მასივში ყველაზე დიდი მნიშვნელლობა

  // შევავსოთ მასივი 0-ებით
  let count = new Array(max + 1).fill(0);

  // დავითვალოთ რამდენჯერ გვხვდება თითო რიცხვი
  for (let num of arr) {
    count[num]++;
  }

  let sortedArr = [];
  
  //  დავალაგოთ, დავსორტოთ მასივი
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      count[i]--;
    }
  }

  return sortedArr;
}

// test
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));






// ვამოწმებთ არის თუ არა დასორტილი
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

// რენდომათ ვურევთ, ვჩეხავთ ელემენტებს
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function bogoSort(arr) {

    // ვჩეხავთ ელემენტებს სანამ მასივი არ დალაგდება
  while (!isSorted(arr)) {
    shuffle(arr);
  }
  return arr;
}

// test
console.log(bogoSort([3, 2, 1]));