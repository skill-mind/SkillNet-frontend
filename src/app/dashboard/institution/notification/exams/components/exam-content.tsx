import Image from 'next/image';
import bellIcon from '@/public/notification-bell.svg';
import userIcon from '@/public/notification-people.svg';

interface NotificationItemProps {
  type: 'user' | 'alert';
  message: string;
  timestamp: string;
}

const NotificationItem = ({ type, message, timestamp }: NotificationItemProps) => {
  const iconSrc = type === 'user' ? userIcon : bellIcon;
  
  return (
    <div className="px-6">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-x-4">
          <Image
            src={iconSrc}
            alt=""
            width={50}
            height={50}
            className="text-zinc-400"
          />
          <span className="text-zinc-200 text-base">{message}</span>
        </div>
        <span className="text-zinc-500 text-sm">{timestamp}</span>
      </div>
      <div className="h-[0.3px] bg-gray-500 mx-" />
    </div>
  );
};

const NotificationsContainer = () => {
  const notifications = [
    {
      id: 1,
      type: 'user' as const,
      message: "Josh registered for your exam",
      timestamp: "5 hrs ago",
    },
    {
      id: 2,
      type: 'alert' as const,
      message: "Web3 Test exam is coming up in 3 days make sure to finalize all details",
      timestamp: "5 hrs ago",
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {notifications.map((notification) => (
        <div 
          key={notification.id}
          className="hover:bg-zinc-800/30 transition-all duration-300"
        >
          <NotificationItem
            type={notification.type}
            message={notification.message}
            timestamp={notification.timestamp}
          />
        </div>
      ))}
    </div>
  );
};

export default NotificationsContainer;