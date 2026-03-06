import WorldMap from '@/components/WorldMap/WorldMap.tsx';
import '@/styles/pages/login-page.scss';
import { AUTH_URLS } from '@/config/api.ts';
import { LOGIN_BACKGROUND_ISLANDS } from '@/mocks/island.ts';
import { Button } from 'antd';
import { GithubFilled } from '@ant-design/icons';

const LoginPage = () => {
    const handleLogin = (provider: 'google' | 'github') => {
        window.location.href =
            provider === 'google' ? AUTH_URLS.GOOGLE : AUTH_URLS.GITHUB;
    };

    return (
        <section className='login-page'>
            <div className='login-page__background-container'>
                <WorldMap islands={LOGIN_BACKGROUND_ISLANDS} />
            </div>

            <div className='login-page__overlay'>
                <section className='login-page__content'>
                    <p className='login-page__subtitle'>
                        Твое приключение в мир алгоритмов начинается здесь
                    </p>
                </section>

                <div className='login-page__auth-card auth-card'>
                    <h1 className='auth-card__title'>AlgoCode</h1>
                    <p className='auth-card__footer'>
                        By clicking &#34;Sign Up&#34;, you agree to our Terms
                        and you have read our Privacy Policy.
                    </p>
                    <div className='auth-card__buttons'>
                        <Button
                            size='large'
                            className='btn btn-google'
                            type={'text'}
                            onClick={() => handleLogin('google')}
                        />

                        <Button
                            size='large'
                            className='btn btn-github'
                            type={'text'}
                            onClick={() => handleLogin('github')}
                        >
                            <GithubFilled className='btn-github__icon' />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
