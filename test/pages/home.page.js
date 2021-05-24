import Page from "./page";
import logger from "../../utility/log";

class HomePage extends Page {
  // ==================
  //      Elements
  // ==================
  get _signInBtn() {
    return $("a.login");
  }

  get _womenLink() {
    return $("ul.menu-content a[title='Women']");
  }

  get _womenSummerDressesSubmenu() {
    return $("ul.menu-content a[title='Women'] + ul a[title='Summer Dresses']");
  }

  // ==================
  //      Methods
  // ==================

  clickSignInBtn() {
    logger.info('Home page - click "Sign In" button');
    this._signInBtn.waitForClickable();
    this._signInBtn.click();
  }

  hoverWomenLink() {
    logger.info('Home page - hover on the "Women" link');
    this._womenLink.waitForDisplayed();
    this._womenLink.moveTo();
  }

  clickWomenSummerDressesSubmenu() {
    logger.info('Home page - click "Summer Dresses" submenu');
    this._womenSummerDressesSubmenu.waitForClickable();
    this._womenSummerDressesSubmenu.click();
  }
}

export default new HomePage();
