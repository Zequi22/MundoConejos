import { createElement } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];

const variants = {
  up: { hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -48 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -56 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 56 }, show: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } }
};

export function Reveal({
  children,
  as = 'div',
  variant = 'up',
  delay = 0,
  duration = 0.9,
  amount = 0.2,
  once = false,
  className,
  style,
  ...rest
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return createElement(as, { className, style, ...rest }, children);
  }

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: '0px 0px -10% 0px' }}
      variants={variants[variant] ?? variants.up}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
