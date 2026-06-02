'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { AnimationController } from './animation-controller';
import styles from './animation-layer.module.css';

export function AnimationLayer() {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(-320);
  const y = useMotionValue(-320);
  const smoothX = useSpring(x, { damping: 38, mass: 0.35, stiffness: 420 });
  const smoothY = useSpring(y, { damping: 38, mass: 0.35, stiffness: 420 });
  const [cursorState, setCursorState] = useState({
    isFocused: false,
    isVisible: false,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      AnimationController.disable();
      return;
    }

    const controller = new AnimationController({
      onCursorStateChange: setCursorState,
      x,
      y,
    });

    controller.start();

    return () => {
      controller.stop();
    };
  }, [prefersReducedMotion, x, y]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className={styles.cursorGlow}
      style={{
        opacity: cursorState.isFocused ? 1 : 0,
        scale: cursorState.isFocused ? 1.25 : 0.82,
        x: smoothX,
        y: smoothY,
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    />
  );
}
