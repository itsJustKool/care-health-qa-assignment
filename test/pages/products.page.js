import Page from "./page";
import logger from "../../utility/log";

class ProductsPage extends Page {
  // ==================
  //      Elements
  // ==================
  get _productItems() {
    return $$("div.product-container");
  }

  get _moreBtns() {
    return $$("a[title='View']");
  }

  // ==================
  //      Methods
  // ==================
  hoverProductByIndex(index) {
    logger.info(`Products page - hover product with index: ${index}`);
    browser.waitUntil(() => this._productItems.length > 0);
    const targetProduct = this._productItems[index - 1];
    targetProduct.waitForDisplayed();
    targetProduct.scrollIntoView();
    targetProduct.moveTo();
  }

  clickMoreBtnByIndex(index) {
    logger.info(`Products page - click "More" button with index: ${index}`);
    browser.waitUntil(() => this._moreBtns.length > 0);
    this._moreBtns[index - 1].waitForClickable();
    this._moreBtns[index - 1].click();
  }
}

export default new ProductsPage();
