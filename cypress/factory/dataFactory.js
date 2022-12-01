import { Credentials } from './users/people';

class DataFactory {
    /**
     * Create an object with email and password from a fixtures file.
     * If no param is passed the object is created with default fixture file info.
     *
     * File must be saved under fixtures/credentials/.
     * @param {string} fileName - The name of the file where the credentials are stored.
     * @example
     *    getLoginCredentials()
     *    getLoginCredentials('file name')
     */
    getLoginCredentials(fileName = 'standar') {
        return new Credentials(require(`../fixtures/credentials/${fileName}`));
    }

}

export default DataFactory;
