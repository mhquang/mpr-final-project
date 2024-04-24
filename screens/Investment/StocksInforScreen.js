import { StyleSheet, View } from "react-native";
import { stocks } from "./../../data/investment/stocks";
import InvestmentItem from "./../../components/ui/InvestmentItem";
import Title from "../../components/ui/Title";

function StocksInforScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Stocks</Title>
      {stocks.map((item, index) => {
        return (
          <InvestmentItem
            key={index}
            name={item.name}
            code={item.code}
            money={item.money}
            interest={item.interest}
          />
        );
      })}
    </View>
  );
}

export default StocksInforScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
});
