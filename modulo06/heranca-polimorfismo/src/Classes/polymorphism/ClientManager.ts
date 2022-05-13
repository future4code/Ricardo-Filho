import Client from './ClientInterface';

export default class ClientManage {
    constructor(
        protected clients: Client[]
    ) { }

    getClientsQuantity(): number {
        return this.clients.length
    }
}