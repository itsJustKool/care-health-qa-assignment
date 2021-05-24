import logger from "../../utility/log";
import Screen from "./screen";

class MessagesScreen extends Screen {
  // ==================
  //      Elements
  // ==================
  get _conversationListIOS() {
    return browser.isIOS
      ? $$(
          '//XCUIElementTypeCollectionView[@name="ConversationList"]/XCUIElementTypeCell'
        )
      : "";
  }

  get _msgField() {
    return browser.isIOS
      ? $('//XCUIElementTypeTextField[@name="messageBodyField"]')
      : $(
          '//android.widget.EditText[@resource-id="com.google.android.apps.messaging:id/compose_message_text"]'
        );
  }

  get _sendBtn() {
    return browser.isIOS
      ? $('//XCUIElementTypeButton[@name="sendButton"]')
      : $(
          '//android.widget.ImageView[@resource-id="com.google.android.apps.messaging:id/send_message_button_icon"]'
        );
  }

  get _sentMessages() {
    return browser.isIOS
      ? $$("//XCUIElementTypeCell[contains(@name, 'Your iMessage')]")
      : $$(
          '//android.widget.TextView[@resource-id="com.google.android.apps.messaging:id/message_text"]'
        );
  }

  get _startChatBtnAndroid() {
    return browser.isIOS
      ? ""
      : $('//android.widget.Button[@content-desc="Start chat"]');
  }

  get _recipientFieldAndroid() {
    return browser.isIOS
      ? ""
      : $(
          '//android.widget.MultiAutoCompleteTextView[@resource-id="com.google.android.apps.messaging:id/recipient_text_view"]'
        );
  }

  // ==================
  //      Methods
  // ==================

  selectFirstConversationIOS() {
    logger.info("Messages screen - select 1st conversation");
    browser.waitUntil(() => this._conversationListIOS.length > 0);
    this._conversationListIOS[0].click();
  }

  clickStartChatBtnAndroid() {
    logger.info(`Messages screen - click "Start chat" button`);
    this._startChatBtnAndroid.waitForDisplayed();
    this._startChatBtnAndroid.click();
  }

  inputRecipientNumber(number) {
    logger.info(`Messages screen - input recipient number: "${number}"`);
    this._recipientFieldAndroid.waitForDisplayed();
    this._recipientFieldAndroid.setValue(number);
    browser.pressKeyCode(66);
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
        return element.getText().includes(msg);
      }).length > 0;
    logger.info(`Messages screen - result: ${result}`);
    return result;
  }
}

export default new MessagesScreen();
