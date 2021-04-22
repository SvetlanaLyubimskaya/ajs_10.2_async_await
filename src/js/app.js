import GameSavingLoader from './GameSavingLoader';

(async () => {
    // Your code here with await
    try {
        const data = await GameSavingLoader.load();
        const value = await json(data);
        return value;
    } catch {
        return error;
    }
})();
