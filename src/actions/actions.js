import robot from "robotjs";
import lodash from "lodash";

const clickToBuyButtonFunc = () => {
  robot.mouseClick();
};

const clickToBuyButton = lodash.debounce(clickToBuyButtonFunc, 100);

const moveToBuyButtonFunc = () => {
  robot.moveMouse(1811, 560);

  clickToBuyButton();
};

const moveToBuyButton = lodash.debounce(moveToBuyButtonFunc, 250);

const scrollToBuyButtonFunc = () => {
  robot.scrollMouse(0, -180);

  moveToBuyButton();
};

const scrollToBuyButton = lodash.debounce(scrollToBuyButtonFunc, 1800);

const moveToMetamaskFunc = () => {
  robot.mouseClick();
  robot.moveMouse(1811, 300);

  scrollToBuyButton();
};

const moveToMetamask = lodash.debounce(moveToMetamaskFunc, 300);

const buyFunc = () => {
  robot.mouseClick();

  moveToMetamask();
};

const clickToBuy = lodash.debounce(buyFunc, 1500);

export const BuyPlant = () => {
  robot.moveMouse(1490, 260);

  clickToBuy();
};
