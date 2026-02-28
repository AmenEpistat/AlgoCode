import { createContext, useContext, type ReactNode } from 'react';
import { rootStore, RootStore } from './RootStore';

export const StoreContext = createContext<RootStore | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    return (
        <StoreContext.Provider value={rootStore}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    const store = useContext(StoreContext);
    if (!store) {
        throw new Error('useStore должен использоваться внутри StoreProvider');
    }
    return store;
};
