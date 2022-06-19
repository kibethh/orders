import { Publisher, OrderCreatedEvent, Subjects } from "@kbhhtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
