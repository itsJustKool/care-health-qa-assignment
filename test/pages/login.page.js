import Page from "./page";
import logger from "../../utility/log";

class LoginPage extends Page {
  // ==================
  //      Elements
  // ==================
  get _emailField() {
    return $("input#email");
  }

  get _pwdField() {
    return $("input#passwd");
  }

  get _signInBtn() {
    return $("button#SubmitLogin");
  }

  // ==================
  //      Methods
  // ==================
  inputLoginEmail(email) {
    logger.info(`Login page - input email: "${email}"`);
    this._emailField.waitForClickable();
    this._emailField.setValue(email);
  }

  inputLoginPwd(pwd) {
    logger.info(`Login page - input password: "${pwd}"`);
    this._pwdField.waitForClickable();
    this._pwdField.setValue(pwd);
  }

  clickSignInBtn() {
    logger.info('Login page - click "Sign In" button');
    this._signInBtn.waitForClickable();
    this._signInBtn.click();
  }

  login(email, pwd) {
    this.inputLoginEmail(email);
    this.inputLoginPwd(pwd);
    this.clickSignInBtn();
  }
}

export default new LoginPage();
