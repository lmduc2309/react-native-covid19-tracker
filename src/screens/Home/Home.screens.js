import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Menubar from "../../router/Menubar";
import actions from "./Home.actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const PropsType = {
  getTotalAll: PropTypes.func,
  data: PropTypes.object,
};

function Home({ getTotalAll, data }) {
  const [formState, setFormState] = useState({
    values: {},
    touched: {},
  });
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date().getDate(); //Current Date
  const month = new Date().getMonth() + 1; //Current Month
  const year = new Date().getFullYear(); //Current Year
  const hours = new Date().getHours(); //Current Hours
  const min = new Date().getMinutes(); //Current Minutes
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
      <Menubar name="Home" />
      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={styles.headerContent}>
            <Text style={styles.headerDate}>
              {monthNames[month]} {date} {year}, {hours}:{min}
            </Text>
            <Text style={styles.headerTitle}>sdasdasd</Text>
            <Text style={styles.headerNumber}>
              {data.Global.TotalConfirmed}
            </Text>
          </View>
        </View>
      </ScrollView>
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
  img: {
    width: 30,
    height: 30,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flex: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  container: {
    padding: 20,
    flex: 1,
  },

  header: {},
  headerContent: {
    marginTop: 10,
  },
  headerDate: {
    fontSize: 14,
    fontWeight: "400",
    color: "#35343A",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#35343A",
    marginVertical: 8,
  },
  headerNumber: {
    fontSize: 45,
    fontWeight: "500",
    color: "#35343A",
  },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  caseContainer: {
    marginTop: 20,
  },
});
