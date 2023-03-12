import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {LocalNotification} from './source/services/LocalPushController';
import Button from './source/components/Button';
import RemotePushController from './source/services/RemotePushController';

const App = () => {
  //onPressHandler
  const handelButtonPress = () => {
    LocalNotification();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={handelButtonPress}>Local Push Notification</Button>
      {/* remote notification */}
      <RemotePushController />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});

export default App;
