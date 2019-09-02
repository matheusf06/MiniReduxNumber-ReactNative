import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "./actions/actions";

class Home extends Component {

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.numberplus()} style={styles.texto}>
        <Text style={{fontSize: 35, color: '#764abc'}}>Mini Redux Number</Text>
        <Text style={{fontSize: 25}}>{this.props.number}</Text>
        <Text>Pressione em qualquer lugar da tela</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  texto:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

const mapStateToProps = state =>({
  number: state.number
});

export default connect(mapStateToProps,mapDispatchToProps)(Home)