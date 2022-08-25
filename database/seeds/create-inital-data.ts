import { DataSource } from 'typeorm';
import { Workspaces } from '../../src/entities/Workspaces';

export class CreateInitalData {
  public async run(dataSource: DataSource): Promise<Any> {
    await dataSource
      .createQueryBuilder()
      .insert()
      .into(Workspaces)
      .values([{ id: 1, name: 'Sleact', Url: 'sleact' }]);
  }
}
