module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: './components',
          screens: './screens',
          assets: './assets',
        },
      },
      // 'react-native-reanimated/plugin',
      // {
      //   relativeSourceLocation: true,
      // },
    ],
    'nativewind/babel',
    'react-native-reanimated/plugin',
  ],
};
