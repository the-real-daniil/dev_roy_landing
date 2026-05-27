'use client';

import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';
import type { ReactNode } from 'react';
import styles from './button.module.css';

type ButtonVariant = 'solid' | 'outline' | 'ghost';

type ButtonProps = Omit<HTMLMotionProps<'a'>, 'children' | 'href'> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  endAdornment?: ReactNode;
};

export function Button({
  children,
  href,
  variant = 'solid',
  className,
  endAdornment = <ArrowUpRight aria-hidden="true" size={24} strokeWidth={2} />,
  ...rest
}: ButtonProps) {
  return (
    <motion.a
      className={clsx(styles.button, styles[variant], className)}
      href={href}
      whileTap={{ scale: 0.97 }}
      transition={{ damping: 26, stiffness: 460, type: 'spring' }}
      {...rest}
    >
      <span>{children}</span>
      {endAdornment}
    </motion.a>
  );
}
