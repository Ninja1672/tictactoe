import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  let squares = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
  ];

  let playerTurn = 0;
  const playerX = 'x';
  const playerO = 'o';

  const reset = () =>{
    squares = [
      0, 1, 2,
      3, 4, 5,
      6, 7, 8
    ];
  };

  const topLeft = () => {
    if (Number.isInteger(squares[0])){
      if (playerTurn % 2 == 0){
        squares[0] = playerX
        playerTurn++
      }
      else{
        squares[0] = playerO
        playerTurn++
      }
    };
  };

  return (
    <View style={styles.container}>
      <View id='top' style={{flexDirection: 'row', }}>
      {/* Top Left */}
      <TouchableOpacity
        onPress={topLeft}
        style={{ backgroundColor: 'white', marginLeft: '5%' }}>
        <Text style={{ fontSize: 20, color: '#000000' }}>{squares[0]}</Text>
      </TouchableOpacity>
      
      {/* Top Middle */}
      <TouchableOpacity
        onPress={topLeft}
        style={{ backgroundColor: 'white', marginLeft: '5%' }}>
        <Text style={{ fontSize: 20, color: '#000000' }}>{squares[1]}</Text>
      </TouchableOpacity>
      
      {/* Top Right */}
      <TouchableOpacity
        onPress={topLeft}
        style={{ backgroundColor: 'white', marginLeft: '5%' }}>
        <Text style={{ fontSize: 20, color: '#000000' }}>{squares[2]}</Text>
      </TouchableOpacity>
      </View>

      <View id='mid' style={{flexDirection: 'row', }}>
      {/* Middle Left */}
      <TouchableOpacity
        onPress={topLeft}
        style={{ backgroundColor: 'white', marginLeft: '5%' }}>
        <Text style={{ fontSize: 20, color: '#000000' }}>{squares[3]}</Text>
      </TouchableOpacity>

      {/* Middle Middle */}
      <TouchableOpacity
        onPress={topLeft}
        style={{ backgroundColor: 'white', marginLeft: '5%' }}>
        <Text style={{ fontSize: 20, color: '#000000' }}>{squares[4]}</Text>
      </TouchableOpacity>

      {/* Middle Right */}
      <TouchableOpacity
        onPress={topLeft}
        style={{ backgroundColor: 'white', marginLeft: '5%' }}>
        <Text style={{ fontSize: 20, color: '#000000' }}>{squares[5]}</Text>
      </TouchableOpacity>
      </View>

      <View id='bot' style={{flexDirection: 'row',}}>
      {/* Bottom Left */}
      <TouchableOpacity
        onPress={topLeft}
        style={{ backgroundColor: 'white', marginLeft: '5%' }}>
        <Text style={{ fontSize: 20, color: '#000000' }}>{squares[6]}</Text>
      </TouchableOpacity>

      {/* Bottom Middle */}
      <TouchableOpacity
        onPress={topLeft}
        style={{ backgroundColor: 'white', marginLeft: '5%' }}>
        <Text style={{ fontSize: 20, color: '#000000' }}>{squares[7]}</Text>
      </TouchableOpacity>

      {/* Bottom Right */}
      <TouchableOpacity
        onPress={topLeft}
        style={{ backgroundColor: 'white', marginLeft: '5%' }}>
        <Text style={{ fontSize: 20, color: '#000000',  }}>{squares[8]}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
      <View>
      <TouchableOpacity
        onPress={reset}
        style={{ backgroundColor: 'white', marginLeft: '-25%' }}>
        <Text style={{ fontSize: 20, color: '#000000',  }}>CLICK ME TO RESET</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginLeft: '37%'
    
  },
});
