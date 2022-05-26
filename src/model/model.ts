export enum RouterKeys {
  insertUser = 'add',
  updateUser = 'update',
  deleteUser = 'delete',
  findUser = 'find',
}

export enum PostgresConfigKeys {
  POSTGRES_HOST = 'POSTGRES_HOST',
  POSTGRES_PORT = 'POSTGRES_PORT',
  POSTGRES_USERNAME = 'POSTGRES_USERNAME',
  POSTGRES_PASSWORD = 'POSTGRES_PASSWORD',
  POSTGRES_DATABASE = 'POSTGRES_DATABASE',
  POSTGRES_SCHEMA = 'POSTGRES_SCHEMA',
  TYPE = 'postgres',
}

export enum DbStatusKeys {
  DELETE = 'DELETE USER ID: ',
  FAIL_TO_DELETE = 'USER NOT DELETED ',
  FAIL_FIND_ID = 'USER NOT FIND WHIT ID: ',
  SELECT = 'FIND USER SUCCESS',
  FAIL_TO_SELECT = 'USER NOT FIND ',
  UPDATE = 'USER UPDATED',
  FAIL_TO_UPDATE = 'UPDATE FAILED ',
  INSERT = 'INSERT USER WHIT ID: ',
  FAIL_TO_INSERT = 'USER NOT INSERTED ',
}

export const logInit = 'DocumentStore:Init';

export enum MicroConfig {
  logInit = 'MasterOrchestrator:Init',
  logMessage = 'Server Start Port: ',
}
