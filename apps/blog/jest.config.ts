/* eslint-disable */
export default {
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  displayName: 'blog',
  preset: '../../jest.preset.cjs',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/blog',
};
