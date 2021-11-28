/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

type StackParamList = {
  MessagesScreen: { channelName: string },
  ChannelsScreen: undefined,
};
type MessagesScreenProps = NativeStackScreenProps<StackParamList, 'MessagesScreen'>;
type ChannelsScreenProps = NativeStackScreenProps<StackParamList, 'ChannelsScreen'>;

const Stack = createNativeStackNavigator<StackParamList>();

const Message: React.FC<{
  displayName: string,
  timestamp: Date,
  text: string,
}> = ({ displayName, timestamp, text }) => {
  return (
    <TouchableHighlight
      onPress={() => { }}
      style={styles.message}
      underlayColor='#1b2730'
    >
      <View>
        <Text style={styles.messageText}>
          <Text style={{ fontWeight: 'bold' }}>{displayName}</Text>
          &ensp;
          <Text style={{ fontSize: 12 }}>{timestamp.toLocaleTimeString()}</Text>
        </Text>
        <Text style={styles.messageText}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const MessagesScreen: React.FC<MessagesScreenProps> = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: route.params.channelName });
  });
  return (
    <ScrollView contentInsetAdjustmentBehavior='automatic'>
      <Message displayName='@me' timestamp={new Date('2021-11-28T12:36:52Z')} text='Hello world' />
      <Message displayName='@me' timestamp={new Date(1638103013000)} text='&#128008;&#8205;&#11035;' />
    </ScrollView>
  );
};

const ChannelsScreen: React.FC<ChannelsScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior='automatic'>
      <TouchableHighlight
        onPress={() => navigation.navigate('MessagesScreen', { channelName: '@me' })}
        style={styles.channelLink}
        underlayColor='#1b2730'
      >
        <Text style={styles.channelLinkText}>
          @me
        </Text>
      </TouchableHighlight>
    </ScrollView>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor='#486880' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTitleAlign: 'center',
            headerTintColor: styles.headerTitle.color,
            contentStyle: styles.content,
          }}>
          <Stack.Screen name="ChannelsScreen" component={ChannelsScreen} options={{ title: 'Channels' }} />
          <Stack.Screen name="MessagesScreen" component={MessagesScreen} options={{ title: 'Messages' }} initialParams={{ channelName: '@me' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#121a20',
  },
  headerTitle: {
    color: 'white',
  },
  content: {
    backgroundColor: '#243440',
  },
  channelLink: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  channelLinkText: {
    color: 'white',
    fontSize: 18,
  },
  message: {
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  messageText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
