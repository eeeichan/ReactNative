import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Modal,
  SafeAreaView
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_text: '',
      saved_text: []
    };
  }

  handleOnChange = text => {
    this.setState({ input_text: text });
  };

  handleClick = () => {
    let s_t = Object.assign([], this.state.saved_text);
    s_t.push(this.state.input_text);
    this.setState({ saved_text: s_t });
  };

  render() {
    let saved = this.state.saved_text;
    let Texts = [];
    for (let i = 0; i < saved.length; i++) {
      Texts.push(<Text>{saved[i]}</Text>);
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.viewTextInput]}>{Texts}</View>

        <View style={[styles.viewTextInput]}>
          <TextInput
            autoCapitalize="none"
            keyboardType="text"
            placeholder="Enter Text"
            placeholderTextColor="#888888"
            returnKeyType="go"
            onSubmitEditing={this.handleClick}
            onChangeText={text => this.handleOnChange(text)}
            clearButtonMode="while-editing"
            style={styles.viewInput}
            autoFocus={true}
          />
          {/* <View style={styles.viewURLInput__button}>
            <Button
              disabled={!this.state.isLengthExists}
              title="Go!"
              accessibilityLabel="Access to inputed URL"
              onPress={() => {
                this.handleClick();
              }}
            />
          </View> */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewURLInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 16
  },
  viewInput: {
    textAlign: 'left',
    borderBottomWidth: 1,
    paddingVertical: 8
  },
  viewURLInput__button: {
    top: 16
  },
  viewModal: {
    flex: 1
  },
  viewModal__aside: {
    paddingBottom: 24
  },
  viewTextInput: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'System',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 16,
    margin: 20
  },
  viewTextField: {
    margin: 20,
    fontSize: 12,
    borderStyle: 'solid'
  }
});
