import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
  color: string;
}

const RippleEffect = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback((event: MouseEvent | TouchEvent) => {
    // Get coordinates for both mouse and touch events
    let clientX: number, clientY: number;
    
    if ('touches' in event) {
      clientX = event.touches[0]?.clientX || event.changedTouches[0]?.clientX;
      clientY = event.touches[0]?.clientY || event.changedTouches[0]?.clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }
    
    const x = clientX;
    const y = clientY;
    
    // Dark theme compatible colors with subtle glow
    const colors = [
      'rgba(59, 130, 246, 0.3)', // Blue
      'rgba(147, 51, 234, 0.3)', // Purple  
      'rgba(236, 72, 153, 0.3)', // Pink
      'rgba(34, 197, 94, 0.3)',  // Green
      'rgba(249, 115, 22, 0.3)', // Orange
      'rgba(6, 182, 212, 0.3)',  // Cyan
      'rgba(168, 85, 247, 0.3)', // Violet
      'rgba(245, 158, 11, 0.3)', // Amber
    ];
    
    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 800);
  }, []);

  // Add event listeners on mount
  React.useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      createRipple(event);
    };

    // Add listeners to capture phase to ensure we get all clicks
    document.addEventListener('mousedown', handleClick, true);
    document.addEventListener('touchstart', handleClick, true);

    return () => {
      document.removeEventListener('mousedown', handleClick, true);
      document.removeEventListener('touchstart', handleClick, true);
    };
  }, [createRipple]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${ripple.color}, transparent 70%)`,
              boxShadow: `0 0 20px ${ripple.color}`,
            }}
            initial={{
              width: 0,
              height: 0,
              opacity: 0.8,
            }}
            animate={{
              width: 300,
              height: 300,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleEffect;