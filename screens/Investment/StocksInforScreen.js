import { StyleSheet, View } from "react-native";
import { stocks } from "./../../data/investment/stocks";
import { randomIncrease } from "../../util/randomIncrease";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/auth-context";

import InvestmentItem from "../../components/ui/items/InvestmentItem";
import Title from "../../components/ui/Title";

function StocksInforScreen() {
  const [increases, setIncreases] = useState({});
  const authCtx = useContext(AuthContext);
  const wallet = authCtx.userData?.wallet;

  useEffect(() => {
    const timer = setInterval(() => {
      const random = randomIncrease(stocks);
      setIncreases(random);
    }, 30000); // 1 mins
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Title>Stocks</Title>
      {stocks.map((item, index) => {
        const isInWallet = wallet.some(
          (walletItem) => walletItem.code === item.code
        );
        return (
          <InvestmentItem
            key={index}
            name={item.name}
            code={item.code}
            money={item.money}
            interest={item.interest}
            isIncrease={increases[item.code] || false}
            isBought={isInWallet}
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
