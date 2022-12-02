import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import vitest from './vitest.config';

export default mergeConfig(
    vitest,
    defineConfig({
        test: {
            exclude: ['src/**/*.itest.ts']
        }
    })
);
