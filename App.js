import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Rectangle from './components/Rectangle';
import Grid from './components/Grid';

const App = () => {
  const [numberOfRows, setNumberOfRows] = useState('4');
  const [numberOfColumns, setNumberOfColumns] = useState('1');

  const renderGrids = () => {
    const totalMargins = 2 * (parseInt(numberOfColumns, 10) - 1); // total margin space between grids
    const gridWidth = (300 - totalMargins) / parseInt(numberOfColumns, 10); // dynamic width calculation
    const totalVerticalMargins = 2 * (parseInt(numberOfRows, 10) - 1); // total vertical margin space between rows
    const gridHeight = (200 - totalVerticalMargins) / parseInt(numberOfRows, 10); // dynamic height calculation

    const grids = [];
    for (let i = 0; i < parseInt(numberOfRows, 10); i++) {
      const row = [];
      for (let j = 0; j < parseInt(numberOfColumns, 10); j++) {
        row.push(
          <Grid key={`${i}-${j}`} width={gridWidth} height={gridHeight} style={styles.gridItem} />
        );
      }
      grids.push(<View key={i} style={styles.gridRow}>{row}</View>);
    }
    return grids;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>No. of Rows</Text>
        <TextInput
  style={styles.inputBox}
  value={numberOfRows}
  onChangeText={(text) => setNumberOfRows(text)}
  keyboardType="numeric"
  placeholder="Enter number of rows"
/>
        <Text style={styles.inputLabel}>No. of Columns</Text>
        <TextInput
          style={styles.inputBox}
          value={numberOfColumns}
          onChangeText={(text) => setNumberOfColumns(text)}
          keyboardType="numeric"
        />
      </View>

      <Rectangle style={styles.mainRectangle}>
        {renderGrids()}
      </Rectangle>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainRectangle: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    backgroundColor: 'lightblue',
    margin: 2,
  },
  gridRow: {
    flexDirection: 'row',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputLabel: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,
    fontSize: 14,
    width: 110,
    textAlignVertical: 'center',
    marginBottom: 5,
    marginLeft: 10,
  },
  inputBox: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
    marginBottom: 5,
    marginRight: 10,
  },
});

export default App;
