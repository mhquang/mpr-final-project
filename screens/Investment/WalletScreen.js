import { StyleSheet, View } from "react-native";
import { randomIncrease } from "../../util/randomIncrease";
import { useContext, useEffect, useState } from "react";

import InvestmentItem from "../../components/ui/items/InvestmentItem";
import Title from "../../components/ui/Title";
import { AuthContext } from "../../store/auth-context";

function WalletScreen() {
  const authCtx = useContext(AuthContext);
  const wallet = authCtx.userData?.wallet;
  return (
    <View style={styles.rootContainer}>
      {wallet.length > 0 && (
        <>
          <Title>Wallet</Title>
          {wallet.map((item, index) => {
            return (
              <InvestmentItem
                key={index}
                name={item.name}
                code={item.code}
                money={item.money}
                interest={item.interest}
                buttonText={"Sell"}
                isIncrease={item.isIncrease}
              />
            );
          })}
        </>
      )}
    </View>
  );
}

export default WalletScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
});
