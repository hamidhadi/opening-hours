import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import {Colors} from './theme/colors';
import {OpeningHours} from './components/openingHours';
import {getReadableOpeningHours} from './utils/getReadableOpeningHours';
import {testData} from './testData';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.screenCommon}>
        <View style={[styles.screenCommon, styles.content]}>
          <OpeningHours data={getReadableOpeningHours(testData)} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screenCommon: {
    backgroundColor: Colors.grey1,
    flex: 1,
  },
  content: {
    paddingVertical: '10%',
    paddingHorizontal: '7%',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default App;
