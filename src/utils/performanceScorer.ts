import { Product } from '../types/product';

/**
 * Calculates a benchmark performance score for gaming and heavy workloads.
 * Higher score = more powerful CPU/GPU, faster RAM, and higher refresh rate.
 */
export function getProductPerformanceScore(product: Product): number {
  let score = 3000;
  const proc = product.specs.processor.toLowerCase();
  const screen = product.specs.screen.toLowerCase();

  // 1. Processor & GPU Classification
  if (
    proc.includes('i9') ||
    proc.includes('14900hx') ||
    proc.includes('rtx 4070') ||
    proc.includes('rtx 4080') ||
    proc.includes('rtx 4090')
  ) {
    // Ultra High-End Gaming Laptop (i9 + RTX 4070)
    score += 9000;
  } else if (proc.includes('apple m') || proc.includes('m2') || proc.includes('m3')) {
    // Apple Silicon M-series
    score += 7400;
  } else if (proc.includes('a18 pro') || proc.includes('a17 pro')) {
    // Flagship iPhone Bionic Pro
    score += 7200;
  } else if (proc.includes('snapdragon 8 gen 3') || proc.includes('8 gen 3')) {
    // Flagship Android Snapdragon 8 Gen 3
    score += 7100;
  } else if (proc.includes('dimensity 9300') || proc.includes('9300+')) {
    // Flagship MediaTek Dimensity 9300+
    score += 7000;
  } else if (proc.includes('snapdragon 8 gen 2') || proc.includes('8 gen 2')) {
    score += 6300;
  } else if (proc.includes('dimensity 8300') || proc.includes('8300-ultra')) {
    // Mid-flagship Gaming Performance (POCO X6 Pro)
    score += 5900;
  } else if (proc.includes('snapdragon 7+ gen 3') || proc.includes('7+ gen 3')) {
    score += 5600;
  } else if (proc.includes('i7') || proc.includes('13500h') || proc.includes('i5-13500h')) {
    score += 5100;
  } else if (proc.includes('a16 bionic') || proc.includes('a15 bionic')) {
    score += 5200;
  } else if (proc.includes('snapdragon 7s gen 3') || proc.includes('7s gen 3')) {
    score += 4300;
  } else if (proc.includes('exynos 1480') || proc.includes('1480')) {
    score += 3600;
  } else if (proc.includes('dimensity 7050') || proc.includes('7050')) {
    score += 3500;
  } else if (proc.includes('dimensity 6100') || proc.includes('6100+') || proc.includes('dimensity 6300')) {
    score += 2000;
  } else {
    score += 2200;
  }

  // 2. RAM capacity
  const ramMatch = product.specs.ram.match(/(\d+)\s*GB/i);
  if (ramMatch) {
    const ramGb = parseInt(ramMatch[1], 10);
    score += ramGb * 60; // 32GB -> +1920, 16GB -> +960, 12GB -> +720, 8GB -> +480
  }

  // 3. Display Refresh Rate (Critical for gaming smoothness)
  if (screen.includes('240hz')) {
    score += 800;
  } else if (screen.includes('165hz') || screen.includes('144hz')) {
    score += 500;
  } else if (screen.includes('120hz')) {
    score += 300;
  }

  // 4. Gaming Tags
  if (
    product.tags.some(
      (t) =>
        t.toLowerCase().includes('เกม') ||
        t.toLowerCase().includes('gaming') ||
        t.toLowerCase().includes('rog')
    )
  ) {
    score += 400;
  }

  return score;
}
