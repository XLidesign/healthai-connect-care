
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export type NotificationType = "reminder" | "health" | "appointment" | "billing" | "system";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  date: Date;
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const { toast } = useToast();

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockNotifications: Notification[] = [
      {
        id: "1",
        title: "Appointment Reminder",
        message: "You have an appointment with Dr. Smith tomorrow at 10:00 AM",
        type: "appointment",
        read: false,
        date: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
      },
      {
        id: "2",
        title: "Heart Rate Alert",
        message: "Your heart rate was above normal during rest periods today",
        type: "health",
        read: false,
        date: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
      },
      {
        id: "3",
        title: "Bill Payment Due",
        message: "Payment for your recent lab tests is due in 3 days",
        type: "billing",
        read: true,
        date: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
      },
      {
        id: "4",
        title: "Medication Reminder",
        message: "Don't forget to take your evening medication",
        type: "reminder",
        read: true,
        date: new Date(Date.now() - 1000 * 60 * 60 * 48) // 2 days ago
      }
    ];
    
    setNotifications(mockNotifications);
    setUnreadCount(mockNotifications.filter(n => !n.read).length);
  }, []);
  
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
    
    setUnreadCount(prev => Math.max(0, prev - 1));
  };
  
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
    
    setUnreadCount(0);
  };
  
  const addNotification = (notification: Omit<Notification, "id" | "date" | "read">) => {
    const newNotification: Notification = {
      id: Math.random().toString(36).substring(2, 9),
      ...notification,
      read: false,
      date: new Date()
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    setUnreadCount(prev => prev + 1);
    
    toast({
      title: notification.title,
      description: notification.message,
    });
    
    return newNotification.id;
  };
  
  const removeNotification = (id: string) => {
    const notification = notifications.find(n => n.id === id);
    
    if (notification && !notification.read) {
      setUnreadCount(prev => Math.max(0, prev - 1));
    }
    
    setNotifications(prev => prev.filter(n => n.id !== id));
  };
  
  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    addNotification,
    removeNotification
  };
}
