import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Customer extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  contact?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
