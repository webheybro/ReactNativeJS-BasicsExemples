import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  StyleSheet,
  Platform,
} from "react-native";
import styled from "styled-components";

const PartHeader = () => (
  <View>
    <Title>React NATIVE</Title>
    <SubTitle>Discover this new Framework</SubTitle>
  </View>
);

const ExempleText = () => (
  <BlockTxt>
    <Text numberOfLines={1} style={{ padding: 10 }}>
      Hello React Native - this is a pretty long text and see what happen!
    </Text>
    <Text style={{ padding: 10 }}>
      Hello React Native - this is a pretty long text nowrapped
    </Text>
  </BlockTxt>
);

const ExempleImgAssets = () => (
  <BlockImg>
    <SubTitle>IMG - assets</SubTitle>
    <Image source={require("./assets/favicon.png")} />
  </BlockImg>
);
const ExempleImgURL = () => (
  <BlockImg>
    <SubTitle>IMG With URL : https://picsum.photos/200/300</SubTitle>
    <Image
      source={{
        width: 150,
        height: 200,
        uri: "https://picsum.photos/200/300",
      }}
    />
  </BlockImg>
);

const ExempleImgTouchableOpacity = () => (
  <BlockImg>
    <SubTitle>TouchableOpacity</SubTitle>
    <TouchableOpacity
      style={{ textAlign: "center" }}
      onPress={() => console.log("TouchableOpacity")}
    >
      <Image
        fadeDuration={4000}
        source={{
          width: 150,
          height: 200,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </TouchableOpacity>
  </BlockImg>
);
const ExempleImgTouchableWithoutFeedback = () => (
  <BlockImg>
    <SubTitle>TouchableWithoutFeedback</SubTitle>
    <TouchableWithoutFeedback
      onPress={() => console.log("TouchableWithoutFeedback ?")}
    >
      <Image
        source={{
          width: 150,
          height: 200,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </TouchableWithoutFeedback>
  </BlockImg>
);
const ExempleImgTouchableHighlight = () => (
  <BlockImg>
    <SubTitle>TouchableHighlight</SubTitle>
    <TouchableHighlight onPress={() => console.log("TouchableHighlight ?")}>
      <Image
        source={{
          width: 150,
          height: 200,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </TouchableHighlight>
  </BlockImg>
);
const ExempleTouchableNativeFeedback = () => (
  <BlockImg>
    <SubTitle>TouchableNativeFeedback</SubTitle>
    <TouchableNativeFeedback
      onPress={() => console.log("TouchableNativeFeedback ?")}
    >
      <View
        style={{
          width: 200,
          height: 50,
          backgroundColor: "dodgerblue",
        }}
      ></View>
    </TouchableNativeFeedback>
  </BlockImg>
);
const ExempleBtn = () => (
  <BlockImg>
    <SubTitle>Button</SubTitle>
    <Button title="poute" onPress={() => console.log("click on Btn")} />
  </BlockImg>
);
const ExempleAlert = () => (
  <BlockImg>
    <SubTitle>Alert</SubTitle>
    <Button
      title="Alert"
      color="orange"
      onPress={() =>
        Alert.alert("My title", "My message", [
          { text: "Yes", onPress: () => console.log("yes") },
          { text: "No", onPress: () => console.log("no") },
        ])
      }
    />
    <Button
      title="Prompt"
      color="orange"
      onPress={() =>
        Alert.prompt("My title", "My message", (text) => console.log(text))
      }
    />
  </BlockImg>
);
const ExempleStyleSheet = () => (
  <BlockImg>
    <SubTitle>Multiple classes in styleSheet</SubTitle>
    <View style={[styles.test, styles.otherColor]}></View>
  </BlockImg>
);
const ExempleDeviceOrientation = () => {
  const { landscape } = useDeviceOrientation();
  return (
    <BlockImg>
      <SubTitle>Device Orientation</SubTitle>
      <View
        style={{
          backgroundColor: landscape ? "white" : "black",
          height: 20,
          width: "50%",
        }}
      ></View>
    </BlockImg>
  );
};

const ExempleViewFlex = () => {
  //flexDirection: "row"
  //flexDirection: "culumns"
  return (
    <View
      style={{
        backgroundColor: "lightgrey",
        padding: 10,
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: "space-around", //flex-end, flex-start, space-around, space-evenly, space-between
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "blue", width: 100, height: 300 }}></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          alignSelf: "flex-end",
        }}
      ></View>
    </View>
  );
};

const ExempleViewFlexWrap = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        flex: 1, //flex-end, flex-start, space-around, space-evenly, space-between
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <View
        style={{ backgroundColor: "greenyellow", width: 100, height: 100 }}
      ></View>
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }}></View>
      <View style={{ backgroundColor: "blue", width: 100, height: 100 }}></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      ></View>
    </View>
  );
};

const ExempleViewFlexOther = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        //flex: 1, //flex-end, flex-start, space-around, space-evenly, space-between
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "greenyellow",
          height: 100,
          width: 300,
          flex: -1, //same of flexShrink
          //flexBasis: 400, //replace width or height... why ? i don't know
          flexGrow: 1, //extend, same flex: 1
          flexShrink: 1, //cut for real size available
        }}
      ></View>
      <View style={{ backgroundColor: "blue", width: 100, height: 100 }}></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
    </View>
  );
};

export default function App() {
  //console.log(Dimensions.get("screen")); //REACT NATIVE
  //console.log(useDimensions()); //HOOKS
  return (
    <ScrollView style={{ backgroundColor: "#21618c" }}>
      <Container>
        <SafeContainer>
          <PartHeader />
          <ExempleText />
          <ExempleImgAssets />
          <ExempleImgURL />
          <ExempleImgTouchableOpacity />
          <ExempleImgTouchableWithoutFeedback />
          <ExempleImgTouchableHighlight />
          <ExempleTouchableNativeFeedback />
          <ExempleBtn />
          <ExempleAlert />
          <ExempleStyleSheet />
          <ExempleDeviceOrientation />
          <ExempleViewFlex />
          <ExempleViewFlexWrap />
          <ExempleViewFlexOther />
        </SafeContainer>
        <StatusBar style="auto" />
      </Container>
    </ScrollView>
  );
}
//WARNING DONT WORK ON BROWSER RUN
const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  padding-top: ${Platform.OS === "android" ? "30px" : "30px"};
`;

const SafeContainer = styled.SafeAreaView``;

const Title = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
`;
const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  color: white;
`;
const BlockImg = styled.View`
  padding: 20px;
  display: flex;
  align-items: center;
`;
const BlockTxt = styled.View`
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  margin: 10px;
  border-radius: 10px;
`;

const styles = StyleSheet.create({
  test: {
    backgroundColor: "red",
    height: 100,
    width: 300,
  },
  otherColor: {
    backgroundColor: "green",
  },
});
