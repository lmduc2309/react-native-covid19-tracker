import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import actions from "./Home.actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PropsType = {
  getTotalAll: PropTypes.func,
  data: PropTypes.object,
};

function ChartView({ getTotalAll, data }) {
  const [formState, setFormState] = useState({
    values: {},
    touched: {},
  });
  useEffect(() => {
    getTotalAll();
  }, [getTotalAll]);
  useEffect(() => {
    setFormState((formState) => ({
      ...formState,
      values: data,
    }));
    console.log(data);
  }, [data]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>ChartView</Text>
      </View>
    </View>
  );
}

Home.propTypes = PropsType;

const mapStateToProps = (state) => {
  return {
    data: state.HomeReducer.data,
  };
};

const mapDispatchToProps = {
  getTotalAll: actions.getTotalCovidAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });