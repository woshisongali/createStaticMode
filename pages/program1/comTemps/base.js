export const isMobile = () => {
  let inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  let weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  let UA = window.navigator.userAgent.toLowerCase()
  let isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
  // let isPhone = UA && /iphone|ipad|ipod|ios/.test(UA)
  let isPhone = UA && UA.indexOf('iphone') > 0
  return isAndroid || isPhone
}