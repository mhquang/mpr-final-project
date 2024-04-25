import { StyleSheet, View } from "react-native";
import { crypto } from './../../data/investment/crypto';
import InvestmentItem from "../../components/ui/items/InvestmentItem";
import Title from "../../components/ui/Title";

function CryptoScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Crypto</Title>
      {crypto.map((item, index) => {
        return (
          <InvestmentItem
            key={index}
            name={item.name}
            code={item.code}
            money={item.money}
            interest={item.interest}
            buttonText={"Buy"}
          />
        );
      })}
    </View>
  );
}

export default CryptoScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
});
