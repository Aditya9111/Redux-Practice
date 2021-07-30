import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
} from "react-native";

import { CardSection } from "./common";
import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends Component {
  componentDidUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, selectedLibraryId } = this.props;

    if (library.item.id === selectedLibraryId) {
      return (
        <CardSection>
          <Text>{library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

const mapStateToProps = (state) => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
