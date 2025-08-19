/**
 * - Типізація об'єктів
 * - Використання interface
 * - Опціональні (?) та readonly поля
 */

// type Person = {
//   username?: string;
//   email?: string;
//   isOnline?: boolean;
//   readonly age?: number;
//   location?: {
//     country?: string;
//     city?: string;
//   };
// };

// interface PersonI {
//   username?: string;
//   email?: string;
//   isOnline?: boolean;
//   readonly age?: number;
//   location?: {
//     country?: string;
//     city?: string;
//   };
// }

interface Person {
  username?: string;
  email?: string;
  isOnline?: boolean;
  readonly age?: number;
  location?: {
    country?: string;
    city?: string;
  };
}

const jacob: Person = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  isOnline: false,
  age: 30,
  location: {
    city: "Limassol",
    country: "Cyprus",
  },
};

const poly: Person = {
  username: "Poly",
  email: "p.makko@mail.com",
  isOnline: true,
  age: 20,
};

const andrii: Person = {};

console.log(jacob);

console.log(poly);
