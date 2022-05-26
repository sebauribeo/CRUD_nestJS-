import { EntityRepository, Repository } from 'typeorm';
import { DocumentEntity } from '../entities/document.entity';

@EntityRepository(DocumentEntity)
export class DocumentRepository extends Repository<DocumentEntity> {}