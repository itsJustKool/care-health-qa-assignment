import Page from "../page";
import logger from "../../../utility/log";

class ConfirmModal extends Page {
  // ==================
  //      Elements
  // ==================
  get _proceedToCheckoutBtn() {
    return $("a[title='Proceed to checkout']");
  }

  // ==================
  //      Methods
  // ==================
  clickProceedToCheckoutBtn() {
    logger.info('Confirm Modal - click "Proceed to checkout" button');
    this._proceedToCheckoutBtn.waitForClickable();
    this._proceedToCheckoutBtn.click();
  }
}

export default new ConfirmModal();
