export const useStore = (() => {
    let storeInstance;

    const createStoreInstance = () => {
        let store = 'My Initial Data';

        const getStore = () => {
            return store;
        }

        const setStore = (newStore) => {
            store = newStore;
            return store;
        }
        return [getStore, setStore]; // later subscription, unsubscribe
    }
    return () => {
        if (!storeInstance) {
            storeInstance = createStoreInstance();
        }
        return storeInstance;
    }
}) (); //IIFE