// try hide adddresBar for mobile devices

const hideAddressBar = (win) => {
  if (!win) return;
  const doc = win.document;

  if (!win.navigator.standalone && !win.location.hash && win.addEventListener) {
    win.scrollTo(0, 1);

    let scrollTop = 1;
    const getScrollTop = () => (win.pageYOffset
      || (doc.compatMode === 'CSS1Compat' && doc.documentElement.scrollTop)
      || doc.body.scrollTop || 0);

    const bodycheck = setInterval(() => {
      if (doc.body) {
        clearInterval(bodycheck);
        scrollTop = getScrollTop();
        win.scrollTo(0, scrollTop === 1 ? 0 : 1);
      }
    }, 15);

    win.addEventListener('load', () => {
      setTimeout(() => {
        if (getScrollTop() < 20) {
          win.scrollTo(0, scrollTop === 1 ? 0 : 1);
        }
      }, 0);
    }, false);
  }
};

export default hideAddressBar;
