import { ScrollView } from "react-native";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import StocksInforScreen from "./Investment/StocksInforScreen";
import CryptoScreen from "./Investment/CryptoScreen";
function InvestmentScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <StocksInforScreen />
        <CryptoScreen />
      </ScrollView>
    </ScreenLayout>
  );
}

export default InvestmentScreen;
