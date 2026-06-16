'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import styles from './product.module.css';

type ScreenshotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function Screenshot({ src, alt, width, height }: ScreenshotProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        className={styles.imageButton}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${alt} — открыть на весь экран`}
      >
        <Image className={styles.image} src={src} alt={alt} width={width} height={height} />
        <span className={styles.zoom} aria-hidden="true">
          <ZoomIn size={20} strokeWidth={1.8} />
        </span>
      </button>

      {open && mounted
        ? createPortal(
            <div
              className={styles.lightbox}
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={close}
            >
              <button className={styles.lightboxClose} type="button" aria-label="Закрыть">
                <X size={28} strokeWidth={1.8} />
              </button>
              <Image
                className={styles.lightboxImage}
                src={src}
                alt={alt}
                width={width}
                height={height}
                onClick={(event) => event.stopPropagation()}
              />
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
