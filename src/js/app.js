import GameSavingLoader from './GameSavingLoader';

(async () => {
    // Your code here with await
    try {
        const data = await GameSavingLoader.load();
        return json(data);
    } catch {
        return error;
    }
})();
