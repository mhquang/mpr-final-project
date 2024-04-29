import { StyleSheet, View } from "react-native";
import { crypto } from "./../../data/investment/crypto";
import { randomIncrease } from "../../util/randomIncrease";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/auth-context";

import InvestmentItem from "../../components/ui/items/InvestmentItem";
import Title from "../../components/ui/Title";

function CryptoScreen() {
  const [increases, setIncreases] = useState({});
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const timer = setInterval(() => {
      const random = randomIncrease(crypto);
      setIncreases(random);
    }, 30000); // 1mins
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Title>Crypto</Title>
      {crypto.map((item, index) => {
        const isBought = authCtx.userData?.wallet?.some((walletItem) =>
          Object.values(walletItem).some((coin) => coin.name === item.name)
        );
        return isBought ? null : (
          <InvestmentItem
            key={index}
            name={item.name}
            code={item.code}
            money={item.money}
            interest={item.interest}
            buttonText={"Buy"}
            isIncrease={increases[item.code] || false}
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
