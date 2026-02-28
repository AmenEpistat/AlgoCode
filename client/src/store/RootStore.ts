import { UserStore } from './UserStore';
import { ContentStore } from './ContentStore';

export class RootStore {
    userStore: UserStore;
    contentStore: ContentStore;

    constructor() {
        this.contentStore = new ContentStore(this);
        this.userStore = new UserStore(this);
    }
}

export const rootStore = new RootStore();
