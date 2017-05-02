import * as aws from 'aws-sdk';
import State from '../../state/State';

export default class StateRepository {

    private db: aws.DynamoDB.DocumentClient;

    constructor() {
        this.db = new aws.DynamoDB.DocumentClient();
    }

    public get(gameid: string): Promise<State> {
        let stateReq = this.db.get({
            Key: { gameid: gameid },
            TableName: 'mafia-react-dev-adam'
        });

        return stateReq
            .promise()
            .then(output => output.Item as State);
    }

    public put(state: State): Promise<void> {
        return new Promise<void>(() => {});
    }
}