import type { MotionValue } from 'motion/react';

const interactiveSelector = 'a, button, [data-cursor-focus]';
const revealSelector = '[data-motion-reveal]';
const motionReadyAttribute = 'data-motion-ready';
const motionStateAttribute = 'data-motion-state';
const motionDelayAttribute = 'data-motion-delay';

type CursorState = {
  isFocused: boolean;
  isVisible: boolean;
};

type AnimationControllerParams = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  onCursorStateChange: (state: CursorState) => void;
};

export class AnimationController {
  private readonly x: MotionValue<number>;

  private readonly y: MotionValue<number>;

  private readonly onCursorStateChange: (state: CursorState) => void;

  private observer: IntersectionObserver | null = null;

  private cursorState: CursorState = {
    isFocused: false,
    isVisible: false,
  };

  constructor({ x, y, onCursorStateChange }: AnimationControllerParams) {
    this.x = x;
    this.y = y;
    this.onCursorStateChange = onCursorStateChange;
  }

  start() {
    document.documentElement.setAttribute(motionReadyAttribute, 'true');
    this.observeRevealItems();
    window.addEventListener('pointermove', this.handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', this.handlePointerLeave);
  }

  stop() {
    this.observer?.disconnect();
    this.observer = null;
    this.setCursorState({ isFocused: false, isVisible: false });
    document.documentElement.removeAttribute(motionReadyAttribute);
    window.removeEventListener('pointermove', this.handlePointerMove);
    window.removeEventListener('pointerleave', this.handlePointerLeave);
  }

  static disable() {
    document.documentElement.removeAttribute(motionReadyAttribute);
  }

  private observeRevealItems() {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    for (const item of revealItems) {
      const delay = item.getAttribute(motionDelayAttribute);

      if (delay) {
        item.style.setProperty('--motion-order', delay);
      }
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          entry.target.setAttribute(motionStateAttribute, 'visible');
          this.observer?.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
      },
    );

    for (const item of revealItems) {
      this.observer.observe(item);
    }
  }

  private handlePointerMove = (event: PointerEvent) => {
    this.x.set(event.clientX - 160);
    this.y.set(event.clientY - 160);
    this.setCursorState({
      isFocused: this.hasInteractiveTarget(event.target),
      isVisible: true,
    });
  };

  private handlePointerLeave = () => {
    this.setCursorState({ isFocused: false, isVisible: false });
  };

  private hasInteractiveTarget(target: EventTarget | null) {
    return target instanceof Element && target.closest(interactiveSelector) !== null;
  }

  private setCursorState(nextState: CursorState) {
    if (
      this.cursorState.isFocused === nextState.isFocused &&
      this.cursorState.isVisible === nextState.isVisible
    ) {
      return;
    }

    this.cursorState = nextState;
    this.onCursorStateChange(nextState);
  }
}
