/**
 * Перелічення (enum)
 *
 * Enum - це список іменованих констант, які можна використовувати як змінні.
 * Union Type - це просто список допустимих значень, які можна присвоювати змінним.
 *
 * Якщо не знаєш, що вибрати - завжди починай з union type.
 * Enum варто використовувати лише тоді, коли є реальна потреба в цьому.
 */

/***************** 1 *****************/
// type Status = "pending" | "fulfilled" | "rejected";

enum Status {
  Pending = "pending",
  Fulfilled = "fulfilled",
  Rejected = "canceled",
}

// enum Status {
//   Pending,
//   Fulfilled,
//   Rejected,
// }

// let requestStatus: Status = "fulfilled"; - Union type
let requestStatus: Status = Status.Rejected;

// console.log(requestStatus === Status.Rejected);

/***************** 2 *****************/
// type Code = 200 | 201 | 400 | 500;

// enum ReqCode {
//   Success,
//   Created,
//   NotFound = 617,
//   ServerError,
// }

// let requestCode: ReqCode = ReqCode.NotFound;

// console.log(requestCode);

/***************** 3 *****************/
enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

let userRole: Role = Role.Admin;

interface User {
  username: string;
  role: Role;
}

const user: User = {
  username: "jacob",
  role: userRole,
};

if (user.role === Role.Admin) {
  console.log(`perevirka proyshla`);
}

console.log(Role);
