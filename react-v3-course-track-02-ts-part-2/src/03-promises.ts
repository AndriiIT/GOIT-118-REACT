/**
 * Типізація промісів
 */

// function Promise2<T>(resolve: (value: T) => {}) {}

/***************** 1 *****************/
const getData = () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hello, TypeScript!"), 1000);
  });
};

// type CustomArray<T, X> = (T | X)[];

// const customArray: CustomArray<number, string> = [1, 2, 3];

// getData().then((result) => console.log(result)); // "Hello, TypeScript!"

/***************** 2 *****************/
interface User {
  id: number;
  name: string;
}

const getUser = () => {
  return new Promise<User>((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
};

// getUser().then((user) => console.log(user.name)); // "Alice"

const getUsers = () => {
  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    }, 1000);
  });
};

// getUsers().then((users) => console.log(users[0].name)); // "Alice"

// type Nullable<T> = T | null | undefined;

// interface Person {
//   country: Nullable<{
//     title: string;
//     capital: string;
//   }>;
//   house: Nullable<{
//     street: string;
//     houseNumber: number;
//   }>;
// }

// const person: Person = {
//   country: null,
// };
