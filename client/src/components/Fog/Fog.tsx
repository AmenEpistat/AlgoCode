import { classNames } from '../../utils/classNames';
import styles from './Fog.module.scss';

interface FogProps {
    className: string;
}

const Fog = ({ className }: FogProps) => {
    return (
        <>
            <div className={classNames(styles.fog, className)}>
                <div
                    className={classNames(
                        styles.fog__image,
                        styles['fog__image--big']
                    )}
                />
                <div
                    className={classNames(
                        styles.fog__image,
                        styles['fog__image--small']
                    )}
                />
            </div>

            <div className={classNames(styles.fog, styles.fog__slow)}>
                <div
                    className={classNames(
                        styles.fog__image,
                        styles['fog__image--big']
                    )}
                />
            </div>
        </>
    );
};

export default Fog;
