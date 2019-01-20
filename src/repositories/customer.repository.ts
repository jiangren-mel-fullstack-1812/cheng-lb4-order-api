import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Customer} from '../models';
import {MlabDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id
> {
  constructor(
    @inject('datasources.mlab') dataSource: MlabDataSource,
  ) {
    super(Customer, dataSource);
  }
}
