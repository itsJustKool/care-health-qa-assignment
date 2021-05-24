import MessagesScreen from "../../screens/messages.screen";
import {
  generateRandomString,
  generateRandomNumber,
} from "../../../utility/random";

describe("Care Health - QA assignment", () => {
  it("Mobile test scenario", () => {
    const message = generateRandomString(13);
    const number = generateRandomNumber(9);
    if (browser.isIOS) {
      browser.activateApp("com.apple.MobileSMS");
      MessagesScreen.selectFirstConversationIOS();
    } else {
      browser.activateApp("com.google.android.apps.messaging");
      MessagesScreen.clickStartChatBtnAndroid();
      MessagesScreen.inputRecipientNumber(number);
    }
    MessagesScreen.inputMsg(message);
    MessagesScreen.clickSendBtn();

    expect(MessagesScreen.isMsgSent(message)).toBeTrue();
  });

  afterEach(() => {
    if (browser.isIOS) {
      browser.terminateApp("com.apple.MobileSMS");
    } else {
      browser.terminateApp("com.google.android.apps.messaging");
    }
  });
});
