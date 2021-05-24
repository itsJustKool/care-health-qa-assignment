import HomePage from "../../pages/home.page";
import LoginPage from "../../pages/login.page";
import ProductsPage from "../../pages/products.page";
import ProductDetailsPage from "../../pages/productDetails.page";
import ConfirmModal from "../../pages/components/confirmModal.page";
import CheckoutPage from "../../pages/checkout.page";

import loginData from "../../data/login.data";

describe("Care Health - QA assignment", () => {
  it("web test scenario", () => {
    browser.maximizeWindow();
    browser.url("");
    HomePage.clickSignInBtn();
    LoginPage.login(loginData.email, loginData.password);
    HomePage.hoverWomenLink();
    HomePage.clickWomenSummerDressesSubmenu();
    ProductsPage.hoverProductByIndex(2);
    ProductsPage.clickMoreBtnByIndex(2);
    ProductDetailsPage.inputQuantity(2);
    ProductDetailsPage.selectSize("L");
    ProductDetailsPage.selectColorByName("White");
    ProductDetailsPage.clickAddToCartBtn();
    ConfirmModal.clickProceedToCheckoutBtn();
    CheckoutPage.completeCheckOutByBankWire();

    expect(CheckoutPage.isOrderComplete()).toBeTrue();
  });
});
