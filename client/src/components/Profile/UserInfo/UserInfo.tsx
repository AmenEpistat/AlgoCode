import styles from './UserInfo.module.scss';

interface Props {
    name: string;
    email: string;
    status: string;
}

const UserInfo = ({ name, status, email }: Props) => {
    return (
        <div className={styles['user-info']}>
            <h2 className={styles['user-info__name']}>{name}</h2>
            <p className={styles['user-info__email']}>{email}</p>
            <p className={styles['user-info__status']}>{status}</p>
        </div>
    );
};

export default UserInfo;
