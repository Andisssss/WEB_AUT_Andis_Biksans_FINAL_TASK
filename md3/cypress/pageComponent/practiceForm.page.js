import basePage from "./base.page";

class practiceFormPage extends basePage{

    static get url(){
        return "/automation-practice-form";
    }

    static get firstNameField(){
        return cy.get("#firstName");
    }

    static get lastNameField(){
        return cy.get("#lastName");
    }

    static get emailField(){
        return cy.get("#userEmail");
    }

    static get maleCheckButton(){
        return cy.get("#gender-radio-1");
    }

    static get phoneNumberField(){
        return cy.get("#userNumber");
    }

    static get dateOfBirthField(){
        return cy.get("#dateOfBirthInput");
    }

    static get yearMenuSelect(){
        return cy.get(".react-datepicker__year-select");
    }

    static get monthMenuSelect(){
        return cy.get(".react-datepicker__month-select");
    }

    static get dayMenuSelect(){
        return cy.get(".react-datepicker__day");
    }

    static get subjectsField(){
        return cy.get(".subjects-auto-complete__value-container");
    }

    static get autoSelectButton(){
        return cy.get(".subjects-auto-complete__menu");
    }

    static get musicCheckButton(){
        return cy.get("#hobbies-checkbox-3");
    }

    static get pictureUploadButton(){
        return cy.get("#uploadPicture");
    }

    static get currentAddressField(){
        return cy.get("#currentAddress");
    }

    static get stateAndCityAreaButton(){
        return cy.get("#stateCity-wrapper");
    }

    static get selectNCRButton(){
        return cy.get("#react-select-3-option-0")
    }
    static get selectDelhiButton(){
        return cy.get("#react-select-4-option-0")
    }

    static get submitButton(){
        return cy.get("#submit")
    }

    static get formTableValidate(){
        return cy.get(".table")
    }
}

export default practiceFormPage;