'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface KineticTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function KineticText({ children, className = '', as = 'h1' }: KineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 20, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / 30;
      const deltaY = (e.clientY - centerY) / 30;

      x.set(deltaX);
      y.set(deltaY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  const letters = children.split('');
  const Tag = as;

  return (
    <div ref={containerRef} className="overflow-visible">
      <Tag className={className}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            style={{
              x: useTransform(x, (v) => v * (1 + index * 0.1)),
              y: useTransform(y, (v) => v * (1 + index * 0.05)),
            }}
            whileHover={{ scale: 1.2, color: '#ec4899' }}
            transition={{ duration: 0.1 }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}

interface ScrambleTextProps {
  children: string;
  className?: string;
}

export function ScrambleText({ children, className = '' }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isHovering, setIsHovering] = useState(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(children);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        children
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return children[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1 / 3;
      if (iteration >= children.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isHovering, children]);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      data-hover
    >
      {displayText}
    </span>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({ children, className = '', onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { damping: 15, stiffness: 150 });
  const y = useSpring(0, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={className}
        data-hover
      >
        {children}
      </Component>
    </motion.div>
  );
}
