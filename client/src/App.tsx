import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.ts';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/StoreContext';
import { AchievementModal } from '@/components/Achievement/AchievementModal/AchievementModal';

const App = observer(() => {
    const { userStore } = useStore();

    return (
        <>
            <RouterProvider router={router} />

            <AchievementModal
                isOpen={userStore.isModalOpen}
                onClose={() => userStore.closeModal()}
                achievement={userStore.activeAchievement}
            />
        </>
    );
});

export default App;
