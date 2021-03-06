import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { DocumentRepository } from 'src/model/repository/document.repository';
import { userDTO } from '../DTO/user.dto';
import { DbStatusKeys } from '../model/model';

@Injectable()
export class UserService {
  public logger = new Logger(UserService.name);

  constructor(private documentRepository: DocumentRepository) {}

  async selectUser(id: any) {
    try {
      const response = await this.documentRepository.findOne(id);
      if (!response) {
        this.logger.debug(DbStatusKeys.FAIL_TO_UPDATE);
        throw new Error(DbStatusKeys.FAIL_FIND_ID + id);
      } else {
        this.logger.debug(DbStatusKeys.SELECT);
        return {
          status: HttpStatus.OK,
          user: response,
        };
      }
    } catch (e) {
      this.logger.debug(DbStatusKeys.FAIL_FIND_ID + id);
      return {
        status: HttpStatus.BAD_REQUEST,
        details: e.message,
      };
    }
  }

  async updateUser(data: any) {
    try {
      const response = await this.documentRepository.update(data.id, data);
      if (response.affected === 1) {
        this.logger.debug(DbStatusKeys.UPDATE);
        return {
          status: HttpStatus.CREATED,
          details: DbStatusKeys.UPDATE,
        };
      } else {
        this.logger.debug(DbStatusKeys.FAIL_FIND_ID + data.id);
        throw new Error(DbStatusKeys.FAIL_FIND_ID + data.id);
      }
    } catch (e) {
      this.logger.debug(DbStatusKeys.FAIL_TO_UPDATE);
      return {
        status: HttpStatus.BAD_REQUEST,
        details: e.message,
      };
    }
  }

  async insertUser(data: userDTO) {
    try {
      const response = await this.documentRepository.save(data);
      this.logger.debug(DbStatusKeys.INSERT + response.id);
      return {
        status: HttpStatus.CREATED,
        details: DbStatusKeys.INSERT + response.id,
      };
    } catch (e) {
      this.logger.debug(DbStatusKeys.FAIL_TO_INSERT);
      return {
        status: HttpStatus.BAD_REQUEST,
        details: e.message,
      };
    }
  }

  async deleteUser(id: any) {
    try {
      const response = await this.documentRepository.delete(id);
      if (response.affected === 1) {
        this.logger.verbose(DbStatusKeys.DELETE + id);
        return {
          status: HttpStatus.OK,
          details: DbStatusKeys.DELETE + id,
        };
      } else {
        this.logger.debug(DbStatusKeys.FAIL_FIND_ID + id);
        throw new Error(DbStatusKeys.FAIL_FIND_ID + id);
      }
    } catch (e) {
      this.logger.debug(DbStatusKeys.FAIL_TO_DELETE);
      return {
        status: HttpStatus.NOT_FOUND,
        details: e.message,
      };
    }
  }
}