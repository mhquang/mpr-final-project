import { ScrollView } from "react-native";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import StocksInforScreen from "./Investment/StocksInforScreen";
import CryptoScreen from "./Investment/CryptoScreen";
import BankScreen from "./Investment/BankScreen";
import WalletScreen from "./Investment/WalletScreen";
function InvestmentScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <BankScreen />
        <WalletScreen />
        <StocksInforScreen />
        <CryptoScreen />
      </ScrollView>
    </ScreenLayout>
  );
}

export default InvestmentScreen;
