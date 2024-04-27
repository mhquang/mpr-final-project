import { StyleSheet, View } from "react-native";
import { bank } from "./../../data/investment/bank";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import BankItem from "../../components/ui/items/BankItem";

function BankScreen() {
  const authCtx = useContext(AuthContext);
  const savings = authCtx.userData?.savings;
  const money = authCtx.userData?.money;
  return (
    <View style={styles.rootContainer}>
      <Title>Bank</Title>
      {bank.map((item, index) => {
        return (
          <BankItem
            key={index}
            name={item.name}
            isDeposit={item.isDeposit}
            interest={item.interest}
            money={money}
            savings={savings}
            isLoan={item.isLoan}
          />
        );
      })}
    </View>
  );
}

export default BankScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
});
