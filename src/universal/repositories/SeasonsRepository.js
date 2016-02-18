import Repository from './Repository';

class SeasonsRepository extends Repository {
  constructor(options) {
    super(options);
    this.namespace = 'seasons';
  }

  findAll() {
    return this.client.get(this.api());
  }
}
export default Repository.getInstance(SeasonsRepository);
