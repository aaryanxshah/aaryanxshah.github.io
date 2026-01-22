'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useWaveform } from './WaveformProvider';
import { generateWaveformPath } from './waveformUtils';
import { COLORS } from '@/lib/constants';

interface WaveformCanvasProps {
  className?: string;
}

export function WaveformCanvas({ className }: WaveformCanvasProps) {
  const { currentConfig } = useWaveform();
  const [dimensions, setDimensions] = useState({ width: 1200, height: 120 });
  const [path, setPath] = useState('');
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: 120,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.016; // ~60fps
      const newPath = generateWaveformPath(
        dimensions.width,
        dimensions.height,
        currentConfig,
        timeRef.current
      );
      setPath(newPath);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, currentConfig]);

  return (
    <div className={className}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={COLORS.rose} stopOpacity="0.6" />
            <stop offset="50%" stopColor={COLORS.amber} stopOpacity="0.8" />
            <stop offset="100%" stopColor={COLORS.rose} stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Shadow/glow layer */}
        <motion.path
          d={path}
          fill="none"
          stroke={COLORS.rose}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.3}
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />

        {/* Main waveform */}
        <motion.path
          d={path}
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
      </svg>
    </div>
  );
}
