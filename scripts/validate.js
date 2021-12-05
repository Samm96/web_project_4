// const forms = document.forms;
const forms = document.forms;
const editForm = document.forms.edit;
const createForm = document.forms.create;

const accountName = forms.elements.name;
const description = forms.elements.description;
const title = forms.elements.title;
const image = forms.elements.imageLink;

const editSubmitBtn = editForm.querySelector(".submit-button");
const createSubmitBtn = createForm.querySelector(".submit-button");

const submitBtn = forms.elements.submit;


// if there is more than 0 letters in input, form = valid
editForm.addEventListener("input", function (evt) {
    const isValid = accountName.value.length > 0 && description.value.length > 0;
    setSubmitButtonState(isValid);
});

//createForm.addEventListener("input", function (evt) {
  //  const isValid = image.pattern === true && title.value.length > 0;
    //setSubmitButtonState(isValid);
//});

// if form valid, remove disabled. vice versa
function setSubmitButtonState (isFormValid) {
    if(isFormValid) {
        editSubmitBtn.removeAttribute("disabled");
        editSubmitBtn.classList.remove("submit-button_type_disabled");
        createSubmitBtn.removeAttribute("disabled");
        createSubmitBtn.classList.remove("submit-button_type_disabled");
    } else {
        editSubmitBtn.setAttribute("disabled", true);
        editSubmitBtn.classList.add("submit-button_type_disabled");
        createSubmitBtn.setAttribute("disabled", true);
        editSubmitBtn.classList.add("submit-button_type_disabled");
    }
};