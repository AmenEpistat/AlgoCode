import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/StoreContext';
import { useEffect } from 'react';
import UserCard from '@/components/Profile/UserCard/UserCard.tsx';
import '@/styles/pages/profile-page.scss';

const ProfilePage = observer(() => {
    const { userStore } = useStore();

    useEffect(() => {
        userStore.loadProfile();
        userStore.loadCalendarData();
    }, []);

    if (userStore.isLoading) return <div>Загрузка...</div>;

    return (
        <div className='profile-page content-wrapper'>
            <header>
                <h1>{userStore.username}</h1>
                <UserCard />
            </header>
        </div>
    );
});

export default ProfilePage;
