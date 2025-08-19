/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 * - Типізація методів
 */

/***************** 1 *****************/
// interface User {
//   username: string;
//   age: number;
// }

// const allUsers: User[] = [
//   { username: "poly", age: 20 },
//   { username: "jacob", age: 30 },
//   { username: "mango", age: 25 },
// ];

// function getUserNames(users: User[]): string[] {
//   return users.map((user) => user.username);
// }

// const names = getUserNames(allUsers);

// console.log(names);

/***************** 2 *****************/
// function greet(username: string, age?: number): void {
//   if (age !== undefined) {
//     console.log(`${username}, ${age}`);

//     return;
//   }

//   console.log(username);
// }

// function greet(username: string, age?: number) {
//   console.log(age === undefined ? username : `${username}, ${age}`);
// }

// greet("poly", 15);

// greet("jacob");

/***************** 3 *****************/
// interface User {
//   username: string;
//   greet: (message: string) => string;
// }

// const jacob: User = {
//   username: "Jacob",
//   greet: (message) => {
//     return message;
//   },
// };

// jacob.greet("Welcome!");

/***************** 4 *****************/
// interface Player {
//   username: string;
//   isOnline: boolean;
// }

// const allPlayers: Player[] = [
//   { username: "poly", isOnline: false },
//   { username: "jacob", isOnline: true },
//   { username: "adrian", isOnline: false },
// ];

// interface GamePlatform {
//   getOnlinePlayers: (players: Player[]) => Player[];
//   getPlayerNames: (players: Player[]) => string[];
// }

// const platform: GamePlatform = {
//   getOnlinePlayers: (players) => {
//     return players.filter((player) => player.isOnline);
//   },
//   getPlayerNames: (players) => {
//     return players.map((player) => player.username);
//   },
// };

// platform.getOnlinePlayers(allPlayers);
// platform.getPlayerNames(allPlayers);

// type ArrowFunc = (name: string) => void;

// const arrowFunc: ArrowFunc = (name) => {
//   console.log(name);
// };

// const arrowFunc = (name: string): void => {
//   console.log(name);
// };

// arrowFunc("Andrii");

// type Person = { name: string; age?: number };

// const arrowFunc = ({ name, age }: Person): void => {
//   console.log(name, age);
// };

// arrowFunc({ name: "Andrii", age: 50 });
