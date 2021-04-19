import read from './reader';
import json from './parser';

export default class GameSavingLoader {
    static load() {
        const data = await read(); // возвращается Promise!
        return json(data); // возвращается Promise!
    }
}