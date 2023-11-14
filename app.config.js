// Expo web is not replacing process.env variables.
// Issue: https://github.com/expo/expo/issues/23812
const env = Object.fromEntries(
  Object.entries(process.env).filter(([key]) => key.startsWith('EXPO_PUBLIC_')),
);

module.exports = ({ config }) => {
  return {
    ...config,
    extra: { ...env },
  };
};
