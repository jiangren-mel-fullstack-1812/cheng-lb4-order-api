import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Customer } from '../models';
import { CustomerRepository } from '../repositories';

export class CustomerController {
  constructor(
    @repository(CustomerRepository)
    public customerRepository: CustomerRepository,
  ) { }

  @post('/customers', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Customer } } },
      },
    },
  })
  async create(@requestBody() customer: Customer): Promise<Customer> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers/count', {
    responses: {
      '200': {
        description: 'Customer model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers', {
    responses: {
      '200': {
        description: 'Array of Customer model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer)) filter?: Filter,
  ): Promise<Customer[]> {
    return await this.customerRepository.find(filter);
  }

  @patch('/customers', {
    responses: {
      '200': {
        description: 'Customer PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() customer: Customer,
    @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers/{id}', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Customer } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Customer> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers/{id}', {
    responses: {
      '204': {
        description: 'Customer PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() customer: Customer,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers/{id}', {
    responses: {
      '204': {
        description: 'Customer PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() customer: Customer,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers/{id}', {
    responses: {
      '204': {
        description: 'Customer DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}
