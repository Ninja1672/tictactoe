import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  // constants used
  const playerX = "X";
  const playerO = "O";
  const defaultSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // All my states that are saved between renders
  const [squares, setSquares] = React.useState(defaultSquares);
  const [isX, setIsX] = React.useState(true);
  const [isWon, setIsWon] = React.useState(false);

  // Effects used: These update between every render
  React.useEffect(() => {
    const winStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // functions to break down winstates and current board states so they can be properly checked
    const checkSame = (values) =>
      values.length < 2 || values.every((t) => t == values[0]);
    const indiciesToValues = (indicies) =>
      indicies.map((index) => squares[index]);
    const checkIndicies = (indicies) => checkSame(indiciesToValues(indicies));
    const won = winStates.some(checkIndicies);
    //console.log(won);
    setIsWon(won);
  }, [squares]);

  // Reset the board for endless fun!
  const reset = () => {
    setSquares(defaultSquares);
    setIsWon(false);
  };

  // handles every press except for the reset button
  const handlePress = (index) => {
    if (isWon) {
      return;
    }
    if (squares[index] != playerX && squares[index] != playerO) {
      var newSquares = [...squares];
      newSquares[index] = isX ? playerX : playerO;
      setSquares(newSquares);
      setIsX(!isX);
      // console.log("=============");
      // console.log(squares);
      // console.log(newSquares);
      // console.log(index);
    }
  };

  // Row and Box are to improve stylization and make things look pretty
  // They also encapsulate code so in the return of App there isn't 9 different buttons listed
  const Row = ({ index }) => {
    //console.log(squares);
    const startIndex = index * 3;
    var boxes = [];
    for (var i = 0; i < 3; i++) {
      const boxIndex = startIndex + i;
      boxes.push(<Box key={`box-${i}`} index={boxIndex} />);
    }
    return <View style={styles.row}>{boxes}</View>;
  };

  const Box = ({ index }) => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(index)}
        style={styles.boxStyle}
      >
        <Text style={styles.boxTextStyle}>{squares[index]}</Text>
      </TouchableOpacity>
    );
  };

  const winner = isX ? playerO : playerX;

  // Everything past here is for styling and organization. Feels a lot like html and css
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {isWon ? `Winner is ${winner}` : "TicTacToe"}
        </Text>
      </View>
      <View style={styles.gameBoard}>
        <Row index={0} />
        <Row index={1} />
        <Row index={2} />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={reset} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>RESET</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Actual Styles sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: { justifyContent: "center", alignItems: "center" },
  titleText: { fontSize: 50 },
  gameBoard: {},
  row: {
    // flex: 1
    flexDirection: "row",
    backgroundColor: "gray",
    height: 100,
  },
  boxStyle: {
    backgroundColor: "white",
    width: 100,
    borderWidth: 2,
    justifyContent: "center",
  },
  boxTextStyle: {
    fontSize: 60,
    color: "#000000",
    textAlign: "center",
  },
  buttons: { width: "100%", alignItems: "center" },
  resetButton: { backgroundColor: "#78efff", borderRadius: 15, width: "50%" },
  resetButtonText: { fontSize: 40, color: "#000000", textAlign: "center" },
});
