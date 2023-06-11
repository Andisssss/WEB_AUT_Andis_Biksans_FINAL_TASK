import practiceFormPage from "../pageComponent/practiceForm.page";

describe("DemoQA spec", () => {

  context("Practice form fill", () => {
    beforeEach(() => {
      practiceFormPage.visit();

    });

    it("testcase1", () =>{

      practiceFormPage.firstNameField.type("Joe");
      practiceFormPage.lastNameField.type("Doe");
      practiceFormPage.emailField.type("notarealemail@gmail.com");
      practiceFormPage.maleCheckButton.click({force: true});
      practiceFormPage.phoneNumberField.type("22222222");
      practiceFormPage.dateOfBirthField.click({force: true});
      practiceFormPage.yearMenuSelect.select("1930");
      practiceFormPage.monthMenuSelect.select("1");
      practiceFormPage.dayMenuSelect.contains("28").click();
      practiceFormPage.subjectsField.type("Economics");
      practiceFormPage.autoSelectButton.click();
      practiceFormPage.musicCheckButton.click({force: true});
      practiceFormPage.pictureUploadButton.get("input[type=file]").selectFile("files/me.jpg");
      practiceFormPage.currentAddressField.type("Random street ipsum 1b");
      practiceFormPage.stateAndCityAreaButton.contains("Select State").click({force: true});
      practiceFormPage.selectNCRButton.click();
      practiceFormPage.stateAndCityAreaButton.contains("Select City").click({force: true});
      practiceFormPage.selectDelhiButton.click({force: true});
      practiceFormPage.submitButton.click({force: true});

      practiceFormPage.formTableValidate.contains("td", "Joe Doe")
      practiceFormPage.formTableValidate.contains("td", "notarealemail@gmail.com")
      practiceFormPage.formTableValidate.contains("td", "Male")
      practiceFormPage.formTableValidate.contains("td", "22222222")
      practiceFormPage.formTableValidate.contains("td", "28 January,1930")
      practiceFormPage.formTableValidate.contains("td", "Economics")
      practiceFormPage.formTableValidate.contains("td", "Music")
      practiceFormPage.formTableValidate.contains("td", "me.jpg")
      practiceFormPage.formTableValidate.contains("td", "Random street ipsum 1b")
      practiceFormPage.formTableValidate.contains("td", "NCR Delhi")
 
    });

  });
});