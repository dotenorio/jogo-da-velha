import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const windowWidth = (width * 90) / 100;
const windowWidthPart = windowWidth / 3;

const players = ["O", "X"];
const colors = ["#faafff", "#bbcfff"];

let lastPlayer = players[0];
let lastColor = colors[0];

const whoIsNext = () => {
  if (lastPlayer === players[0]) {
    lastPlayer = players[1];
    lastColor = colors[1];
    return { player: lastPlayer, color: lastColor };
  }
  if (lastPlayer === players[1]) {
    lastPlayer = players[0];
    lastColor = colors[0];
    return { player: lastPlayer, color: lastColor };
  }
};

class RectText extends Component {
  state = { text: "", style: { color: "#faafff" } };

  onTextPress = () => {
    const { player, color } = whoIsNext();
    this.setState({
      text: player,
      style: {
        color: color
      }
    });
  };

  render() {
    return (
      <Text
        style={[styles.rectText, this.state.style]}
        onPress={this.onTextPress}
      >
        {this.state.text}
      </Text>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Jogo da Velha</Text>
      </View>
      <View style={styles.board}>
        <View
          style={[styles.rect, styles.rectBorderBottom, styles.rectBorderRight]}
        >
          <RectText />
        </View>
        <View
          style={[
            styles.rect,
            styles.rectBorderBottom,
            styles.rectBorderRight,
            styles.rectBorderLeft
          ]}
        >
          <RectText />
        </View>
        <View
          style={[styles.rect, styles.rectBorderBottom, styles.rectBorderLeft]}
        >
          <RectText />
        </View>
        <View
          style={[
            styles.rect,
            styles.rectBorderTop,
            styles.rectBorderRight,
            styles.rectBorderBottom
          ]}
        >
          <RectText />
        </View>
        <View style={[styles.rect, styles.rectBorder]}>
          <RectText />
        </View>
        <View
          style={[
            styles.rect,
            styles.rectBorderTop,
            styles.rectBorderLeft,
            styles.rectBorderBottom
          ]}
        >
          <RectText />
        </View>
        <View
          style={[styles.rect, styles.rectBorderTop, styles.rectBorderRight]}
        >
          <RectText />
        </View>
        <View
          style={[
            styles.rect,
            styles.rectBorderTop,
            styles.rectBorderRight,
            styles.rectBorderLeft
          ]}
        >
          <RectText />
        </View>
        <View
          style={[[styles.rect, styles.rectBorderTop, styles.rectBorderLeft]]}
        >
          <RectText />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>by @dotenorio</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    backgroundColor: "#192965",
    padding: 5,
    width: width,
    borderBottomWidth: 5,
    borderBottomColor: "#bbcfff"
  },
  headerText: {
    color: "#f0efef",
    fontSize: 50,
    padding: 20,
    textAlign: "center"
  },
  board: {
    flex: 1,
    backgroundColor: "#f0efef",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    padding: 5
  },
  rect: {
    width: windowWidthPart,
    height: windowWidthPart
  },
  rectText: {
    textAlign: "center",
    lineHeight: windowWidthPart,
    height: windowWidthPart,
    fontSize: 100,
    textShadowColor: "#192965",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },
  rectBorder: {
    borderWidth: 2
  },
  rectBorderTop: {
    borderTopWidth: 2
  },
  rectBorderRight: {
    borderRightWidth: 2
  },
  rectBorderBottom: {
    borderBottomWidth: 2
  },
  rectBorderLeft: {
    borderLeftWidth: 2
  },
  footer: {
    backgroundColor: "#f0efef",
    padding: 5,
    width: width,
    borderTopWidth: 1,
    borderTopColor: "#faafff"
  },
  footerText: {
    color: "#192965",
    fontSize: 12,
    padding: 10,
    textAlign: "center"
  }
});
