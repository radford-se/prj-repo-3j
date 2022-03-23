function getAutoClose(autoClose, notification) {
  if (typeof notification.autoClose === "number") {
    return notification.autoClose;
  }
  if (notification.autoClose === false || autoClose === false) {
    return false;
  }
  return autoClose;
}

export default getAutoClose;
//# sourceMappingURL=get-auto-close.js.map
