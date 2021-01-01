// @ts-check
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { useStore } from "./store";
import { toggle } from "./store/creator";
import logo from "./logo.svg";
import AppMascara from "./AppMascara";
import HeaderMascara from "./HeaderMascara";
import ImgMascara from "./ImgMascara";
import { carriesFood, whichItem, duct, logger } from "cryptid";

export const Page = () => {
  const [{ togglevault }, dispatch] = useStore();
  const { isToggled } = togglevault;
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    dispatch(toggle());
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleName();
  };

  const onKeyPressHandler = () => {
    console.log("Fill me with logic");
  };

  const handleName = () => {
    const container = ["rucksack", "knapsack", "backpack", "pouch", "etui"];
    const food = ["bread", "shrimp", "tomato"];
    const inventory = ["lint"];

    const carriesFoodify = carriesFood();
    const whichFoodify = whichItem(food, "inventory");
    const whichContainerify = whichItem(container, "inventory");
    const fillInventoryify = whichItem(inventory, "inventory");

    const createInventory = duct(
      carriesFoodify,
      whichFoodify,
      whichContainerify,
      fillInventoryify,
      logger
    );

    createInventory({ strength: 25 });
  };

  return (
    <AppMascara>
      <HeaderMascara>
        <ImgMascara onClick={handleClick} {...{ isToggled }}>
          <img src={logo} alt="logo" />
        </ImgMascara>
        <h1>🍞 Mold</h1>
        <div
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyPress={onKeyPressHandler}
        >
          <p>{t("changeanimation")}</p>
        </div>
        <button type="button" onClick={() => changeLanguage("de")}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage("en")}>
          en
        </button>
      </HeaderMascara>
    </AppMascara>
  );
};

const Loader = () => <div>loading...</div>;

const App = () => (
  <Suspense fallback={<Loader />}>
    <Page />
  </Suspense>
);

export default App;
