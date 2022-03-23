import { useContext } from 'react';
import { NotificationsContext } from '../Notifications.context.js';

function useNotifications() {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error("@mantine/notifications: NotificationsProvider was not found in tree");
  }
  return context;
}

export { useNotifications };
//# sourceMappingURL=use-notifications.js.map
