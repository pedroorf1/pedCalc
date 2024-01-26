export default {
  getBlacklistRE: () =>
    blacklist([
      /assets\/raw\/.*/,
      /crashlytics\/.*/,
      /firebase\/.*/,
      /website\/.*/,
    ]),
};
