import logger from "../../utility/log";
import Screen from "./screen";

class iOSMsgScreen extends Screen {
  // ==================
  //      Elements
  // ==================
  get _startChatBtn() {
    return $('//android.widget.Button[@content-desc="Start chat"]');
  }

  get _recipientField() {
    return $(
      '//android.widget.MultiAutoCompleteTextView[@resource-id="com.google.android.apps.messaging:id/recipient_text_view"]'
    );
  }

  get _msgField() {
    return $(
      '//android.widget.EditText[@resource-id="com.google.android.apps.messaging:id/compose_message_text"]'
    );
  }

  //android.widget.ImageView[@resource-id="com.google.android.apps.messaging:id/send_message_button_icon"]

  // ==================
  //      Methods
  // ==================

  selectFirstConversation() {
    logger.info("Messages screen - select 1st conversation");
    browser.waitUntil(() => this._conversationList.length > 0);
    this._conversationList[0].click();
  }

  inputMsg(msg) {
    logger.info(`Messages screen - input message: "${msg}"`);
    this._msgField.waitForDisplayed();
    this._msgField.setValue(msg);
  }

  clickSendBtn() {
    logger.info(`Messages screen - click "Send" button`);
    this._sendBtn.waitForDisplayed();
    this._sendBtn.click();
  }

  isMsgSent(msg) {
    logger.info(`Messages screen - check if the message "${msg}" is sent`);
    browser.waitUntil(() => this._sentMessages.length > 0);
    const result =
      this._sentMessages.filter((element) => {
        return element.getText().includes(`Your iMessage, ${msg}`);
      }).length > 0;
    logger.info(`Messages screen - result: ${result}`);
    return result;
  }
}

export default new iOSMsgScreen();
