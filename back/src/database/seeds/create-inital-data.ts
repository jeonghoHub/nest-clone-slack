import { DataSource } from 'typeorm';
import { Workspaces } from '../../entities/Workspaces';
import { Channels } from '../../entities/Channels';

export class CreateInitalData {
  public async run(dataSource: DataSource): Promise<any> {
    await dataSource
      .createQueryBuilder()
      .insert()
      .into(Workspaces)
      .values([{ id: 1, name: 'Sleact', url: 'sleact' }]);
    await dataSource
      .createQueryBuilder()
      .insert()
      .into(Channels)
      .values([{ id: 1, name: '일반', WorkspaceId: 1, private: false }]);
  }
}
