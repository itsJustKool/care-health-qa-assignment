import Page from "./page";
import logger from "../../utility/log";

class ProductDetailsPage extends Page {
  // ==================
  //      Elements
  // ==================
  get _quantityField() {
    return $("input#quantity_wanted");
  }

  get _sizeSelector() {
    return $("select#group_1");
  }

  get _colorsToPick() {
    return $$("ul#color_to_pick_list a.color_pick");
  }

  get _addToCartBtn() {
    return $("p#add_to_cart button");
  }

  // ==================
  //      Methods
  // ==================
  inputQuantity(n) {
    logger.info(`Product details page - input quantity: ${n}`);
    this._quantityField.waitForClickable();
    this._quantityField.setValue(n);
  }

  selectSize(size) {
    logger.info(`Product details page - select size: ${size}`);
    this._sizeSelector.waitForExist();
    this._sizeSelector.selectByVisibleText(size);
  }

  selectColorByName(color) {
    logger.info(`Product details page - select color by name: ${color}`);
    browser.waitUntil(() => this._colorsToPick.length > 0);
    const colorToPick = this._colorsToPick.filter(
      (element) => element.getAttribute("name") === color
    )[0];
    colorToPick.click();
  }

  clickAddToCartBtn() {
    logger.info(`Product details page - click "Add to cart" button`);
    this._addToCartBtn.waitForClickable();
    this._addToCartBtn.click();
  }
}

export default new ProductDetailsPage();
