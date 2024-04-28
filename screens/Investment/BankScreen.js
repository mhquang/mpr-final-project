import { StyleSheet, View } from "react-native";
import { bank } from "./../../data/investment/bank";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import BankItem from "../../components/ui/items/BankItem";

function BankScreen() {
  const authCtx = useContext(AuthContext);
  const isHaveLoanRepayment = authCtx.userData?.loan > 0;
  const loanRepaymentItemIndex = bank.findIndex(
    (item) => item.name === "Loan Repayment"
  );

  if (isHaveLoanRepayment && loanRepaymentItemIndex === -1) {
    bank.push({
      name: "Loan Repayment",
      isLoanRepayment: true,
    });
  } else if (!isHaveLoanRepayment && loanRepaymentItemIndex !== -1) {
    bank.splice(loanRepaymentItemIndex, 1);
  }

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
            isLoan={item.isLoan}
            isLoanRepayment={item.isLoanRepayment}
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
