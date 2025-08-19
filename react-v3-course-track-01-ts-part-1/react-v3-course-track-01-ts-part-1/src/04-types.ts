/**
 * - Union
 * - Літеральні типи ( )
 */

/***************** 1 *****************/
// "pending", "shipped", "delivered", "canceled"
type Status = "pending" | "shipped" | "delivered" | "canceled";

let status: Status = "pending";

status = "shipped";

// console.log(status);

/***************** 2 *****************/
// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"

type Delivery = "courier" | "drone" | "pickup";
type DeliveryTime = "morning" | "afternoon" | "evening";

interface Order {
  username: string;
  email: string;
  total: number;
  delivery: Delivery;
  deliveryTime: DeliveryTime;
}

const order: Order = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  total: 120,
  delivery: "pickup",
  deliveryTime: "morning",
};

console.log(order);
