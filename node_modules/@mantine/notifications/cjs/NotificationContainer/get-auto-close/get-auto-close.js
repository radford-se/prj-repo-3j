'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getAutoClose(autoClose, notification) {
  if (typeof notification.autoClose === "number") {
    return notification.autoClose;
  }
  if (notification.autoClose === false || autoClose === false) {
    return false;
  }
  return autoClose;
}

exports.default = getAutoClose;
//# sourceMappingURL=get-auto-close.js.map
