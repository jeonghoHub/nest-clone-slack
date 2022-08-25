import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces/:url')
export class WorkspacesController {
  @Get()
  getMyWorkSpaces() {}

  @Post()
  createWorkSpace() {}

  @Get(':url/members')
  getAllMembersFromWorkspace() {}

  @Post(':url/members')
  inviteMembersToWorkspace() {}

  @Delete(':url/members/:id')
  kickMemberFromWorkspace() {}

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {}
}
