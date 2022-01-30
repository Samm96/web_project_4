//buttons
export const editProfileButton = document.querySelector(".edit-button");
export const addCardButton = document.querySelector(".add-button");

//inputs
export const inputName = document.querySelector("#name");
export const inputJob = document.querySelector("#description");

//local images
const Tramway = require("../images/Palm-Springs-Aerial-Tramway-colorfix.jpg");
const CedarPt = require("../images/Corkscrew_(Cedar_Point)_01.jpg");
const PowWow = require("../images/jess-lindner-xegyDn1-SoY-unsplash-colorfix.jpg");
const ColWilliamsburg = require("../images/Colonial-Williamsburg-Virginiasizefix-2.jpg");
const PuertoRico = require("../images/jennifer-chen-yXJiC2UjIBo-unsplash-colorfix.jpg");
const DisneyWorld = require("../images/sandro-gonzalez-dBEJG6hv224-unsplash.jpg");

//loop for initial cards
export const initialCards = [
  {
    title: "Palm Springs Aerial Tramway",
    url: Tramway,
  },
  {
    title: "Cedar Point, OH",
    url: CedarPt,
  },
  {
    title: "N.A. Pow Wows",
    url: PowWow,
  },
  {
    title: "Colonial Williamsburg",
    url: ColWilliamsburg,
  },
  {
    title: "Old San Juan, Puerto Rico",
    url: PuertoRico,
  },
  {
    title: "Disney World",
    url: DisneyWorld,
  },
];

export const validationConfig = {
  formSelector: ".popup-form__input-container",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".submit-button",
  inactiveButtonClass: "popup-form__submit-button_type_disabled",
  errorTextSelector: ".popup-form__error-text",
  inputHasError: "popup-form__input_has_error",
  errorTextVisible: "popup-form__error-text_visible",
};
