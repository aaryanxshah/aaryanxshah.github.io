import type { WaveformConfig } from '@/lib/constants';

export function generateWaveformPath(
  width: number,
  height: number,
  config: WaveformConfig,
  time: number,
  points: number = 100
): string {
  const { frequency, amplitude, speed } = config;
  const centerY = height / 2;
  const step = width / points;

  let path = `M 0 ${centerY}`;

  for (let i = 0; i <= points; i++) {
    const x = i * step;
    const normalizedX = x / width;

    // Combine multiple sine waves for organic feel
    const wave1 = Math.sin(normalizedX * Math.PI * 2 * frequency + time * speed);
    const wave2 = Math.sin(normalizedX * Math.PI * 4 * frequency + time * speed * 0.5) * 0.3;
    const wave3 = Math.sin(normalizedX * Math.PI * 1 * frequency + time * speed * 1.5) * 0.2;

    // Envelope to fade edges
    const envelope = Math.sin(normalizedX * Math.PI);

    const y = centerY + (wave1 + wave2 + wave3) * amplitude * envelope;

    path += ` L ${x} ${y}`;
  }

  return path;
}

export function interpolateConfig(
  from: WaveformConfig,
  to: WaveformConfig,
  t: number
): WaveformConfig {
  return {
    frequency: from.frequency + (to.frequency - from.frequency) * t,
    amplitude: from.amplitude + (to.amplitude - from.amplitude) * t,
    speed: from.speed + (to.speed - from.speed) * t,
  };
}

export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
