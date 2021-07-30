import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";

import ListItem from "./ListItem";

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        renderItem={this.renderItem}
        data={this.props.libraries}
        keyExtractor={(library) => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
