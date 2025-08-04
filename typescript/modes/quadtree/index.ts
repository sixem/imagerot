import { TMode, IRotItem } from '../../types';

interface QuadtreePixelationOptions {
    maxDepth?: number; // Default: 8 (maximum recursion depth to prevent too fine subdivision)
    varianceThreshold?: number; // Default: 50 (threshold for color variance; higher means less subdivision)
}

interface QuadNode {
    x: number;
    y: number;
    size: number;
    children?: QuadNode[]; // Array of 4 children or undefined if leaf
    averageR: number;
    averageG: number;
    averageB: number;
}

const quadtree: TMode = async ({ data, width, height }: IRotItem, options: QuadtreePixelationOptions = {}) => {
    if (data.length === 0) return data;

    const maxDepth = options.maxDepth ?? 8;
    const varianceThreshold = options.varianceThreshold ?? 50;

    // Helper to compute average color and variance for a square region
    const computeStats = (x: number, y: number, size: number): { avgR: number, avgG: number, avgB: number, variance: number } => {
        let sumR = 0, sumG = 0, sumB = 0;
        let sumSqR = 0, sumSqG = 0, sumSqB = 0;
        const pixelCount = size * size;

        for (let dy = 0; dy < size; dy++) {
            for (let dx = 0; dx < size; dx++) {
                const px = x + dx;
                const py = y + dy;
                if (px >= width || py >= height) continue; // Clamp to bounds
                const idx = (py * width + px) * 4;
                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];
                sumR += r;
                sumG += g;
                sumB += b;
                sumSqR += r * r;
                sumSqG += g * g;
                sumSqB += b * b;
            }
        }

        const avgR = sumR / pixelCount;
        const avgG = sumG / pixelCount;
        const avgB = sumB / pixelCount;

        // Variance as average squared difference (for RGB combined)
        const varR = (sumSqR / pixelCount) - avgR * avgR;
        const varG = (sumSqG / pixelCount) - avgG * avgG;
        const varB = (sumSqB / pixelCount) - avgB * avgB;
        const variance = (varR + varG + varB) / 3;

        return { avgR, avgG, avgB, variance };
    };

    // Recursive function to build the quadtree
    const buildTree = (x: number, y: number, size: number, depth: number): QuadNode => {
        const { avgR, avgG, avgB, variance } = computeStats(x, y, size);

        const node: QuadNode = { x, y, size, averageR: avgR, averageG: avgG, averageB: avgB };

        if (variance > varianceThreshold && depth < maxDepth && size > 1) {
            const half = Math.floor(size / 2);
            node.children = [
                buildTree(x, y, half, depth + 1),                // Top-left
                buildTree(x + half, y, half, depth + 1),         // Top-right
                buildTree(x, y + half, half, depth + 1),         // Bottom-left
                buildTree(x + half, y + half, half, depth + 1)   // Bottom-right
            ];
        }

        return node;
    };

    // Build the root quadtree (full image)
    const root = buildTree(0, 0, Math.min(width, height), 0); // Assume square for simplicity; adjust if needed

    // Function to fill the buffer with average colors from leaf nodes
    const fillBuffer = (node: QuadNode) => {
        if (!node.children) {
            // Leaf: fill the region with average color
            const r = Math.floor(node.averageR);
            const g = Math.floor(node.averageG);
            const b = Math.floor(node.averageB);

            for (let dy = 0; dy < node.size; dy++) {
                for (let dx = 0; dx < node.size; dx++) {
                    const px = node.x + dx;
                    const py = node.y + dy;
                    if (px >= width || py >= height) continue;
                    const idx = (py * width + px) * 4;
                    data[idx] = r;
                    data[idx + 1] = g;
                    data[idx + 2] = b;
                    // Alpha unchanged
                }
            }
        } else {
            // Recurse on children
            node.children.forEach(fillBuffer);
        }
    };

    fillBuffer(root);

    return data;
};

export { quadtree };