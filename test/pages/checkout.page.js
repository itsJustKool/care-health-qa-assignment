import Page from "./page";
import logger from "../../utility/log";

class CheckoutPage extends Page {
  // ==================
  //      Elements
  // ==================
  get _cartSummaryProceedBtn() {
    return $("p.cart_navigation a[title='Proceed to checkout']");
  }

  get _addressProceedBtn() {
    return $("button[name='processAddress']");
  }

  get _shippingProceedBtn() {
    return $("button[name='processCarrier']");
  }

  get _termsCheckbox() {
    return $("div#uniform-cgv span");
  }

  get _payByBankWireBtn() {
    return $("p.payment_module a.bankwire");
  }

  get _cartTitle() {
    return $("h1#cart_title");
  }

  get _confirmBtn() {
    return $("//button/span[text()='I confirm my order']");
  }

  get _orderCompleteMsg() {
    return $("//strong[text()='Your order on My Store is complete.']");
  }

  // ==================
  //      Methods
  // ==================
  clickCartSummaryProceedBtn() {
    logger.info(
      'Checkout page - click "Proceed to checkout" button in "Summary" step'
    );
    this._cartSummaryProceedBtn.waitForClickable();
    this._cartSummaryProceedBtn.click();
  }

  clickAddressProceedBtn() {
    logger.info(
      'Checkout page - click "Proceed to checkout" button in "Address" step'
    );
    this._addressProceedBtn.waitForClickable();
    this._addressProceedBtn.click();
  }

  clickShippingProceedBtn() {
    logger.info(
      'Checkout page - click "Proceed to checkout" button in "Shipping" step'
    );
    this._shippingProceedBtn.waitForClickable();
    this._shippingProceedBtn.click();
  }

  checkTermOfService() {
    logger.info('Checkout page - check "Terms of service" checkbox');
    this._termsCheckbox.waitForDisplayed();
    if (!this._termsCheckbox.getAttribute("class").includes("checked")) {
      this._termsCheckbox.click();
    }
    browser.waitUntil(() =>
      this._termsCheckbox.getAttribute("class").includes("checked")
    );
  }

  clickPayByBankWireBtn() {
    logger.info('Checkout page - click "Pay by bank wire" button');
    this._payByBankWireBtn.waitForClickable();
    this._payByBankWireBtn.click();
  }

  clickConfirmBtn() {
    logger.info('Checkout page - click "Confirm" button');
    this._confirmBtn.waitForClickable();
    this._confirmBtn.click();
  }

  completeCheckOutByBankWire() {
    this._cartTitle.waitForDisplayed();
    this.clickCartSummaryProceedBtn();
    this.clickAddressProceedBtn();
    this.checkTermOfService();
    this.clickShippingProceedBtn();
    this.clickPayByBankWireBtn();
    this.clickConfirmBtn();
  }

  isOrderComplete() {
    logger.info(
      `Checkout page - check if the "order complete" message is displayed`
    );
    try {
      this._orderCompleteMsg.waitForDisplayed(40000);
      logger.info(`result: True`);
      return true;
    } catch (e) {
      if (
        e.message.includes("element wasn't found") ||
        e.message.includes("not displayed")
      ) {
        logger.info(`result: False`);
        return false;
      }
      throw e;
    }
  }
}

export default new CheckoutPage();
