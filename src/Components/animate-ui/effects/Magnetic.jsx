"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

function Magnetic({
  children,
  strength = 0.5,
  range = 120,
  springOptions = { stiffness: 100, damping: 10, mass: 0.5 },
  onlyOnHover = false,
  disableOnTouch = true,
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  ...props
}) {
  const localRef = React.useRef(null);

  const isTouchDevice = React.useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer:coarse)").matches;
  }, []);

  const [active, setActive] = React.useState(!onlyOnHover);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, springOptions);
  const y = useSpring(rawY, springOptions);

  const compute = React.useCallback(
    (e) => {
      if (!localRef.current) return;
      const { left, top, width, height } =
        localRef.current.getBoundingClientRect();
      const cx = left + width / 2;
      const cy = top + height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if ((active || !onlyOnHover) && dist <= range) {
        const factor = (1 - dist / range) * strength;
        rawX.set(dx * factor);
        rawY.set(dy * factor);
      } else {
        rawX.set(0);
        rawY.set(0);
      }
    },
    [active, onlyOnHover, range, strength, rawX, rawY]
  );

  React.useEffect(() => {
    if (disableOnTouch && isTouchDevice) return;
    const handle = (e) => compute(e);
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [compute, disableOnTouch, isTouchDevice]);

  return (
    <motion.div
      ref={localRef}
      style={{ display: "inline-block", ...style, x, y }}
      onMouseEnter={(e) => {
        if (onlyOnHover) setActive(true);
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        if (onlyOnHover) setActive(false);
        rawX.set(0);
        rawY.set(0);
        if (onMouseLeave) onMouseLeave(e);
      }}
      onMouseMove={(e) => {
        if (onlyOnHover) compute(e);
        if (onMouseMove) onMouseMove(e);
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { Magnetic };
