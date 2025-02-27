// singleton store

export const useStore = (() => {
    var storeInstance;
    
    const createStoreInstance = () => {
        var storeData = "My Initial Data";
        var getStore = () => {
            return storeData;
        }
        var setStore = (data) => {
            storeData = data;
            return storeData;
        }
        return [getStore, setStore];
    }

    return () => {
        if(!storeInstance) storeInstance = createStoreInstance();
        return storeInstance;
    }
})(); // IIFE