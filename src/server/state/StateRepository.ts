import * as aws from 'aws-sdk';
import GameState from '../../game/GameState';

export default class StateRepository {

    private db: aws.DynamoDB.DocumentClient;

    constructor() {
        aws.config.update({ region: "us-west-2" });
        this.db = new aws.DynamoDB.DocumentClient();
    }

    public get(gameid: string): Promise<GameState> {
        let stateReq = this.db.get({
            Key: { gameid: gameid },
            TableName: 'mafia-react-dev-adam'
        });

        return stateReq
            .promise()
            .then(output => output.Item as GameState);
    }

    public put(state: GameState): Promise<void> {
        let stateReq = this.db.put({
            TableName: 'mafia-react-dev-adam',
            Item: state
        });

        return stateReq.promise()
            .then(output => { });
    }
}
