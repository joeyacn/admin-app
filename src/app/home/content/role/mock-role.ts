import { Role } from './role';

export const ROLE: Role[] = [
  { id: 1, codes: ['code001'], name: '1aaa', description: 'description001', parentId: 2 },
  { id: 2, codes: ['code002'], name: '2aaa', description: 'description002', parentId: 1 },
  { id: 3, codes: ['code002'], name: '3aaa', description: 'description003', parentId: 1 },
  { id: 4, codes: ['code003'], name: '4aaa', description: 'description004', parentId: 1 },
  { id: 5, codes: ['code004'], name: '5aaa', description: 'description005', parentId: 1 },
  { id: 6, codes: ['code005'], name: '6aaa', description: 'description006', parentId: 1 }
];

export const CODE: string[] = [
  'code001', 'code002', 'code003', 'code004', 'code005'
];
