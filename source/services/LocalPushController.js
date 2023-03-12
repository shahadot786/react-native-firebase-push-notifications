import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: function (notification) {
    //console.log('Local Notification', notification);
  },
  popInitialNotification: true,
  requestPermissions: true,
});

PushNotification.createChannel(
  {
    channelId: 'channel-id2',
    channelName: 'my-channel2',
    channelDescription: 'A channel for notification in Hello Super Star',
    playSound: true,
    soundName: 'default',
    vibrate: true,
    vibration: 1000,
  },
  //created => console.log(`channel created ${created}`),
);

export const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: 'channel-id',
    channelName: 'my-channel',
    autoCancel: true,
    bigText: 'This is a local Notification demo from Hello Super Start',
    subText: 'Local Notification Demo',
    title: 'Local Notification Title',
    message: 'Hey, Expand me!!',
    playSound: true,
    soundName: 'default',
    vibrate: true,
    vibration: 1000,
    priority: 'high',
    // actions: ['Yes', 'No'],
    invokeApp: true,
    color: '#28db4f',
  });
};
