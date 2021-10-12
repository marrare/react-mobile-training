import React from "react";
import { Button, View, Text } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", marginTop: "20%" }}>
        <Icon name="user-circle-o" color="#517fa4" size={100} />

        <Input keyboardType="default" style={{ marginTop: "10%" }} placeholder="Login" />
        <Input secureTextEntry={true} style={{ marginTop: "10%" }} placeholder="Senha" />

        <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <Button
            style={{ justifyContent: "flex-end" }}
            title="Login"
            onPress={() => this.props.navigation.navigate("Cadastro")}
          />
        </View>
      </View>
    );
  }
}
