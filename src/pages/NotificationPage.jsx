import React, { useState, useEffect } from "react";


const Notification = ({ message, type, onClose }) => {
  const notificationTypes = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  };

  const notificationIcons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
    warning: "⚠️",
  };

  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prevProgress - 1;
      });
    }, 50); 

    return () => clearInterval(timer); 
  }, [onClose]);

  return (
    <div
      className={`flex items-center p-4 mb-4 rounded-lg shadow-lg text-white transition-all ease-in-out transform duration-300 ${notificationTypes[type]} opacity-90`}
    >
      <span className="mr-3 text-2xl">{notificationIcons[type]}</span>
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-lg font-semibold hover:text-opacity-80"
      >
        &times;
      </button>
      <div className="w-full mt-2 bg-white h-1 rounded-full">
        <div
          className={`h-1 rounded-full ${notificationTypes[type]}`}
          style={{ width: `${progress}%`, transition: "width 0.05s ease-out" }}
        ></div>
      </div>
    </div>
  );
};

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [position, setPosition] = useState("top-5 right-5"); 

  
  const triggerNotification = (message, type) => {
    const id = new Date().getTime(); 
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id, message, type },
    ]);
  };

  
  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== id)
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Enhanced Myntra-Style Notifications
        </h1>
        <p className="text-gray-600 mt-2">
          Click below to trigger different types of notifications
        </p>
      </div>

      <div className="space-x-4 mb-8">
        <button
          onClick={() =>
            triggerNotification(
              "Success! Your order has been placed.",
              "success"
            )
          }
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Show Success Notification
        </button>
        <button
          onClick={() =>
            triggerNotification("Oops! Something went wrong.", "error")
          }
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Show Error Notification
        </button>
        <button
          onClick={() =>
            triggerNotification("Here is some information for you!", "info")
          }
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Show Info Notification
        </button>
        <button
          onClick={() =>
            triggerNotification("Warning! Check your settings.", "warning")
          }
          className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Show Warning Notification
        </button>
      </div>

      
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setPosition("top-5 right-5")}
          className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Top-Right
        </button>
        <button
          onClick={() => setPosition("bottom-5 left-5")}
          className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Bottom-Left
        </button>
        <button
          onClick={() => setPosition("bottom-5 right-5")}
          className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Bottom-Right
        </button>
      </div>

     
      <div className={`fixed ${position} space-y-4 z-50 max-w-xs`}>
        {notifications.map((notif) => (
          <Notification
            key={notif.id}
            message={notif.message}
            type={notif.type}
            onClose={() => removeNotification(notif.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
