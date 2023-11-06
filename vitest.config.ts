import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

// workspace별 세팅이 필요하다면 vitest.workspace 파일을 생성한다.

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'setupTest.ts',
    },
  })
);
