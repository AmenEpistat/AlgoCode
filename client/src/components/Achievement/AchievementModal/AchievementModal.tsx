import { motion, AnimatePresence } from 'framer-motion';
import styles from './AchievementModal.module.scss';
import Confetti from 'react-confetti';
import type { Achievement } from '@/types/achievement.ts';
import { Button } from 'antd';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    achievement: Achievement | null;
}

export const AchievementModal = ({ isOpen, onClose, achievement }: Props) => {
    if (!achievement) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={styles['achievement-modal']} onClick={onClose}>
                    <Confetti
                        numberOfPieces={250}
                        recycle={false}
                        gravity={0.2}
                    />

                    <motion.div
                        initial={{ scale: 0, rotate: -10, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className={styles['achievement-modal__content']}
                    >
                        <div
                            className={
                                styles['achievement-modal__badge-wrapper']
                            }
                        >
                            <motion.img
                                animate={{ rotateY: 360 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                src={achievement.svgPath}
                                alt={achievement.name}
                            />
                        </div>

                        <div>
                            <h2 className={styles['achievement-modal__title']}>
                                Новый трофей!
                            </h2>
                            <h3 className={styles['achievement-modal__name']}>
                                {achievement.name}
                            </h3>
                            <p
                                className={
                                    styles['achievement-modal__description']
                                }
                            >
                                {achievement.description}
                            </p>
                        </div>

                        <Button
                            className={'ant-btn-secondary'}
                            onClick={onClose}
                        >
                            В коллекцию!
                        </Button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
