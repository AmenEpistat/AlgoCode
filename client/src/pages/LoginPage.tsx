import WorldMap from '@/components/WorldMap/WorldMap.tsx';
import '@/styles/pages/login-page.scss';
import { AUTH_URLS } from '@/config/api.ts';
import { LOGIN_BACKGROUND_ISLANDS } from '@/mocks/island.ts';
import { Button } from 'antd';

const LoginPage = () => {
    const handleLogin = (provider: 'google' | 'github') => {
        window.location.href =
            provider === 'google' ? AUTH_URLS.GOOGLE : AUTH_URLS.GITHUB;
    };

    return (
        <div className='login-page'>
            <div className='login-page__background-container'>
                <WorldMap islands={LOGIN_BACKGROUND_ISLANDS} />
            </div>

            <div className='login-page__overlay'>
                <div className='login-page__auth-card auth-card'>
                    <h1 className='auth-card__title'>AlgoCode</h1>
                    <p className='auth-card__subtitle'>
                        Твое приключение в мир алгоритмов начинается здесь
                    </p>

                    <div className='auth-card__buttons'>
                        <Button
                            size='large'
                            className='btn btn-google'
                            onClick={() => handleLogin('google')}
                        >
                            <span>Войти через Google</span>
                        </Button>

                        <Button
                            size='large'
                            className='btn btn-github'
                            onClick={() => handleLogin('github')}
                        >
                            <span>Войти через GitHub</span>
                        </Button>
                    </div>

                    <p className='auth-card__footer'>
                        Авторизуясь, ты принимаешь правила честной игры
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
