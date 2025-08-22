/**
 * Узагальнені типи (generics)
 */

/***************** 1 *****************/
function foo<T>(value: T): void {
  console.log(value);
}

// foo(5);
// foo("hello");
// foo(false);
// foo([1, "hello"]);
// foo<number[]>([1, 2]);

// interface User {
//   username: string;
//   age: number;
// }

// foo<User>({ username: "mango", age: 5 });

/***************** 2 *****************/
// function getFirstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }

// console.log(getFirstElement([10, 20, 30])); // 10
// getFirstElement(["Alice", "Bob"]); // "Alice"

/***************** 3 *****************/
function shuffle<T>(array: T[]): T[] {
  return array.slice().sort(() => Math.random() - 0.5);
}

// const mixedNums = shuffle([1, 2, 3, 4]);
// const mixedWords = shuffle(["apple", "banana", "cherry"]);

// console.log({ mixedNums, mixedWords });

/***************** 4 *****************/
function saveToStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

// saveToStorage("user", "Jacob Peterson");
// saveToStorage("clicks", 8);
// saveToStorage("clicks-2", { dsadsa: 5 });

function loadFromStorage(key: string) {
  const item = localStorage.getItem(key);
  if (item !== null) {
    return JSON.parse(item);
  }
  return null;
}

// const user = loadFromStorage("user");
// const clicks = loadFromStorage("clicks");

/***************** 5 *****************/
function max<T>(array: T[], selector: (element: T) => T[keyof T]) {
  return array.reduce((prev, curr) =>
    selector(curr) > selector(prev) ? curr : prev
  );
}

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 800 },
];

const mostExpensive = max(products, (p) => p.price);
// → { name: "Laptop", price: 1000 }

console.log(mostExpensive);

interface User {
  id: number;
  name: string;
}

const getUser = (): Promise<User> => {
  return new Promise<User>((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
};

getUser().then((user) => console.log(user.name));
