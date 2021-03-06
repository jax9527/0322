import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonClickStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://reactjs.org/logo-og.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>click me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  buttonClickStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});

export default App;