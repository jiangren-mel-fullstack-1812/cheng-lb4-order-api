import { Entity, model, property } from '@loopback/repository';

@model()
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'object',
    required: true,
  })
  customer: object;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  toppings: string[];

  @property({
    type: 'string',
  })
  status?: string;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}
