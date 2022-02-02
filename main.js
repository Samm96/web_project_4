!function(){"use strict";var e={243:function(e,t,r){e.exports=r.p+"d3edfb3fe0284e46cb86.jpg"},769:function(e,t,r){e.exports=r.p+"05f1a4a8dccb609a7ff3.jpg"},199:function(e,t,r){e.exports=r.p+"4317d98e0be2323014f4.jpg"},408:function(e,t,r){e.exports=r.p+"c699805af844af80a2db.jpg"},462:function(e,t,r){e.exports=r.p+"0bbb8e918e3becd29120.jpg"},329:function(e,t,r){e.exports=r.p+"205114d203f083e3e22b.jpg"}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,r),i.exports}r.p="",function(){class e{constructor(e,t){this._config=e,this._formElement=t}enableValidation(){this.setEventListeners()}setEventListeners(){this._inputs=this._formElement.querySelectorAll(this._config.inputSelector),this._submitBtn=this._formElement.querySelector(this._config.submitButtonSelector),this._inputs.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e,this._formElement),this._updateSubmitButton()}))}))}_updateSubmitButton(){const e=this._checkFieldsValidity(this._inputs);this._setSubmitButtonState(e)}_setSubmitButtonState(e){this._submitBtn.disabled=e}_checkFieldsValidity(){return Array.from(this._inputs).some((e=>!e.validity.valid))}_checkInputValidity(e){e.validity.valid?(this._removeErrorStyles(e),this._hideErrorMessage(e)):(this._addErrorStyles(e),this._showErrorMessage(e))}_removeErrorStyles(e){e.classList.remove(this._config.inputHasError)}_hideErrorMessage(e){this._formElement.querySelector(".".concat(e.id,"-error")).classList.remove(this._config.errorTextVisible)}_addErrorStyles(e){e.classList.add(this._config.inputHasError)}_showErrorMessage(e){const t=this._formElement.querySelector(".".concat(e.id,"-error"));t.textContent=e.validationMessage,t.classList.add(this._config.errorTextVisible)}resetValidation(){this._updateSubmitButton(),this._inputs.forEach((e=>{this._hideErrorMessage(e),this._removeErrorStyles(e)}))}}class t{constructor(e,t){let{data:r,handleCardClick:s,handleTrashClick:o}=e;this._template=document.querySelector("#".concat(t)),this._data=r,this._handleCardClick=s,this._handleTrashClick=o}createCard(){this._card=this._template.content.cloneNode(!0).querySelector(".element");const e=this._card.querySelector(".element__title"),t=this._card.querySelector(".element__image");return t.src=this._data.url,t.alt=this._data.title,e.textContent=this._data.title,this._setEventListeners(),this._card}_setEventListeners(){this._card.querySelector(".element__image").addEventListener("click",(e=>{this._handleCardClick(e)})),this._card.querySelector("#delete-card-button").addEventListener("click",(()=>{this._handleTrashClick()})),this._card.querySelector(".like-button").addEventListener("click",(()=>{this._toggleLike()}))}_toggleLike(){this._card.querySelector(".like-button").classList.toggle("like-button_active")}_deleteCard(){this._card.remove()}}class s{constructor(e){this._popupElement=document.querySelector("#".concat(e)),this._handleEscClose=this._handleEscClose.bind(this)}open(){this._popupElement.classList.add("popup-form_open"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("popup-form_open"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose(e){"Escape"===e.key&&this.close()}setEventListeners(){this._popupElement.addEventListener("click",(e=>{(e.target===this._popupElement||e.target.classList.contains("close-button"))&&this.close()}))}}class o extends s{constructor(e){let{popupSelector:t,handleFormSubmit:r}=e;super(t),this._form=this._popupElement.querySelector(".popup-form__input-container"),this._formInputs=this._popupElement.querySelectorAll(".popup-form__input"),this._handleFormSubmit=r}_getInputValues(){return this._formValues={},this._formInputs.forEach((e=>{this._formValues[e.name]=e.value})),this._formValues}setEventListeners(){super.setEventListeners(),this._popupElement.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this.close()}))}resetForm(){this._form.reset()}}const i=[{title:"Palm Springs Aerial Tramway",url:r(199)},{title:"Cedar Point, OH",url:r(769)},{title:"N.A. Pow Wows",url:r(462)},{title:"Colonial Williamsburg",url:r(243)},{title:"Old San Juan, Puerto Rico",url:r(408)},{title:"Disney World",url:r(329)}],n={formSelector:".popup-form__input-container",inputSelector:".popup-form__input",submitButtonSelector:".submit-button",inactiveButtonClass:"popup-form__submit-button_type_disabled",errorTextSelector:".popup-form__error-text",inputHasError:"popup-form__input_has_error",errorTextVisible:"popup-form__error-text_visible"},l=(document.querySelector("#profile-pic-button"),document.querySelector("#edit-button")),c=document.querySelector(".add-button"),a=(document.querySelector("#confirmation-button"),document.querySelector("#name")),u=document.querySelector("#description"),p=new class extends s{open(e){let{url:t,title:r}=e;this._popupElement.querySelector(".popup-form__caption").textContent=r,this._imgElement=this._popupElement.querySelector(".popup-form__image"),this._imgElement.src=t,this._imgElement.alt=r,super.open()}}("image-popup"),d=e=>new t({data:e,handleCardClick:()=>{p.open(e)},handleTrashClick:()=>{E.open()}},"card-template").createCard(),m=new class{constructor(e,t){let{items:r,renderer:s}=e;this._items=r,this._renderer=s,this._container=document.querySelector(".".concat(t))}renderItem(){this._items.forEach((e=>{this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({items:i,renderer:e=>{m.addItem(d(e))}},"elements"),_=new class{constructor(e){let{nameSelector:t,descriptionSelector:r}=e;this._nameElement=document.querySelector(".".concat(t)),this._descriptionElement=document.querySelector(".".concat(r))}getUserInfo(){return{name:this._nameElement.textContent,description:this._descriptionElement.textContent}}setUserInfo(e){let{name:t,description:r}=e;this._nameElement.textContent=t,this._descriptionElement.textContent=r}}({nameSelector:"profile__name",descriptionSelector:"profile__description"}),h=new o({popupSelector:"edit-popup-form",handleFormSubmit:e=>{_.setUserInfo(e)}}),f=new o({popupSelector:"create-popup-form",handleFormSubmit:e=>{m.addItem(d(e)),f.resetForm()}}),E=new class extends s{constructor(e){let{popupSelector:t}=e;super(t)}setEventListeners(){this._popupElement.querySelector("#confirmation-button").addEventListener("click",this.deleteCard())}deleteCard(){document.querySelector(".element").closest(".element")}}({popupSelector:"delete-confirmation-popup"}),S=new e(n,document.querySelector("#edit-popup-form"));S.enableValidation();const b=new e(n,document.querySelector("#create-popup-form"));b.enableValidation(),l.addEventListener("click",(()=>{h.open();const{name:e,description:t}=_.getUserInfo();a.value=e,u.value=t,S.resetValidation()})),c.addEventListener("click",(()=>{f.resetForm(),b.resetValidation(),f.open()})),m.renderItem(i),p.setEventListeners(),h.setEventListeners(),f.setEventListeners(),E.setEventListeners()}()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQzdDWCxjQUFlLGtCQUNmWSxpQkFBbUJuQyxJQUNqQndFLEVBQVNPLFlBQVkvRSxNQUluQmlGLEVBQXNCLElBQUkvQyxFQUFjLENBQzVDWCxjQUFlLG9CQUNmWSxpQkFBbUJuQyxJQUNqQjRELEVBQVNTLFFBQVE3RCxFQUFXUixJQUM1QmlGLEVBQW9CcEMsZUFJbEJjLEVBQXlCLElJeEVoQixjQUFxQ3JDLEVBQ2hEbkUsWUFBWSxHQUFpQixJQUFqQixjQUFDb0UsR0FBZ0IsRUFDekJhLE1BQU1iLEdBR1Y3RCxvQkFDSUosS0FBS2tFLGNBQWN6RCxjQUFjLHdCQUF3QkksaUJBQWlCLFFBQVNiLEtBQUs0SCxjQUc1RkEsYUFDSTlFLFNBQVNyQyxjQUFjLFlBQVlvSCxRQUFRLGNKOERPLENBQ3hENUQsY0FBZSw4QkFHWDZELEVBQXVCLElBQUlsSSxFQUMvQitGLEVBQ0E3QyxTQUFTckMsY0FBYyxxQkFFekJxSCxFQUFxQjNILG1CQUVyQixNQUFNNEgsRUFBc0IsSUFBSW5JLEVBQzlCK0YsRUFDQTdDLFNBQVNyQyxjQUFjLHVCQUV6QnNILEVBQW9CNUgsbUJBRXBCNEYsRUFBa0JsRixpQkFBaUIsU0FBUyxLQUMxQzZHLEVBQXFCckQsT0FDckIsTUFBTSxLQUFDZSxFQUFELFlBQU9vQyxHQUFlTixFQUFTSyxjQUNyQ3RCLEVBQVVaLE1BQVFELEVBQ2xCYyxFQUFTYixNQUFRbUMsRUFDakJNLEVBQXFCdkYscUJBR3ZCeUQsRUFBY25GLGlCQUFpQixTQUFTLEtBQ3RDOEcsRUFBb0JwQyxZQUNwQndDLEVBQW9CeEYsa0JBQ3BCb0YsRUFBb0J0RCxVQVF0QmlDLEVBQVNPLFdBQVdwQixHQUNwQlUsRUFBVy9GLG9CQUNYc0gsRUFBcUJ0SCxvQkFDckJ1SCxFQUFvQnZILG9CQUNwQmlHLEVBQXVCakcsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhEZWxldGVDb25maXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIEZvcm0gVmFsaWRhdGlvbiBjbGFzcyBjb2RlXG5cbi8vIFwiY29uZmlnXCIgPSBhcnJheSBvZiBzZWxlY3RvcnMgJiBcImZvcm1FbGVtZW50XCIgPSBmb3JtXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uOiBpdCB3aWxsIHVzZSBwYXJhbWV0ZXJzIGZvcm0gYW5kIHNldHRpbmdzLlxuICAvLyBzZWxlY3QgYWxsIG9mIHRoZSBpbnB1dHNcbiAgLy8vIHdhbnQgdG8gc2VsZWN0IHN1Ym1pdCBidXR0b24gaW4gdGhzIGZ4IHRvb1xuICAvLy8gYWRkIGEgcGFydCB0aGF0IGhhcyBhIGNvbmRpdGlvbiB3aGVyZSB0aGVyZSBpcyBhbiBlcnJvciBhbmQgd2hhdCB0byBkbyB0aGVuXG4gIC8vLyBhZGQgYnV0dG9uIGRpc2FibGUgdG9nZ2xlXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0cyA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICB0aGlzLl9jb25maWcuaW5wdXRTZWxlY3RvclxuICAgICk7XG4gICAgdGhpcy5fc3VibWl0QnRuID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX2NvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG4gICAgLy9jaGVja3MgaW4gcHV0IHZhbGlkaXR5ICYgY2hlY2sgYWxsIGlucHV0cyBmb3IgdmFsaWRpdHlcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dCwgdGhpcy5fZm9ybUVsZW1lbnQpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdWJtaXRCdXR0b24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3VwZGF0ZVN1Ym1pdEJ1dHRvbigpIHtcbiAgICBjb25zdCBoYXNFcnJvcnMgPSB0aGlzLl9jaGVja0ZpZWxkc1ZhbGlkaXR5KHRoaXMuX2lucHV0cyk7XG4gICAgdGhpcy5fc2V0U3VibWl0QnV0dG9uU3RhdGUoaGFzRXJyb3JzKTtcbiAgfVxuXG4gIC8vIHRvZ2dsZXMgdGhlIGJ1dHRvbiBiZXR3ZWVuIGRpc2FibGVkIGFuZCBlbmFibGVkXG4gIF9zZXRTdWJtaXRCdXR0b25TdGF0ZShoYXNFcnJvcnMpIHtcbiAgICB0aGlzLl9zdWJtaXRCdG4uZGlzYWJsZWQgPSBoYXNFcnJvcnM7XG4gIH1cblxuICAvLyB0dXJuIGlucHV0cyBpbnRvIGFuIGFycmF5LCB0YWtlIHNvbWUgaW5wdXQ7IHJldHVybiBzb2x1dGlvbiBpZiBpbnB1dCBpcyBpbnZhbGlkXG4gIF9jaGVja0ZpZWxkc1ZhbGlkaXR5KCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2lucHV0cykuc29tZSgoaW5wdXQpID0+ICFpbnB1dC52YWxpZGl0eS52YWxpZCk7XG4gIH1cblxuICAvLyByZW1vdmVzL2hpZGVzIGVycm9ycyBpZiBpbnB1dHMgYXJlIHZhbGlkXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUVycm9yU3R5bGVzKGlucHV0KTtcbiAgICAgIHRoaXMuX2hpZGVFcnJvck1lc3NhZ2UoaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRFcnJvclN0eWxlcyhpbnB1dCk7XG4gICAgICB0aGlzLl9zaG93RXJyb3JNZXNzYWdlKGlucHV0KTtcbiAgICB9XG4gIH1cblxuICBfcmVtb3ZlRXJyb3JTdHlsZXMoaW5wdXQpIHtcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5pbnB1dEhhc0Vycm9yKTtcbiAgfVxuXG4gIF9oaWRlRXJyb3JNZXNzYWdlKGlucHV0KSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5lcnJvclRleHRWaXNpYmxlKTtcbiAgfVxuXG4gIF9hZGRFcnJvclN0eWxlcyhpbnB1dCkge1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmlucHV0SGFzRXJyb3IpO1xuICB9XG5cbiAgX3Nob3dFcnJvck1lc3NhZ2UoaW5wdXQpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtpbnB1dC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5lcnJvclRleHRWaXNpYmxlKTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVTdWJtaXRCdXR0b24oKTtcblxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUVycm9yTWVzc2FnZShpbnB1dCk7XG4gICAgICB0aGlzLl9yZW1vdmVFcnJvclN0eWxlcyhpbnB1dCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gdG8gY2hlY2sgdG8gc2VlIGlmIHNvbWV0aGluZyBpcyBiZWluZyBncmFiYmVkIGNvcnJlY3RseVxuLy8vIHZpYSBkZXYgdG9vbHM6IGkuZS4gdHlwZSBcImlucHV0LmlkXCIgdG8gc2VlIHdoaWNoIGlucHV0IGZ1bmN0aW9uIGlzIGdyYWJiaW5nXG4iLCJleHBvcnQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKHsgZGF0YSwgaGFuZGxlQ2FyZENsaWNrLCBoYW5kbGVUcmFzaENsaWNrfSwgdGVtcGxhdGVTZWxlY3Rvcikge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGVtcGxhdGVTZWxlY3Rvcn1gKTtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgdGhpcy5faGFuZGxlVHJhc2hDbGljayA9IGhhbmRsZVRyYXNoQ2xpY2s7XG4gIH1cblxuICBjcmVhdGVDYXJkKCkge1xuICAgIHRoaXMuX2NhcmQgPSB0aGlzLl90ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRcIik7XG4gICBcbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9fdGl0bGVcIik7XG4gICAgY29uc3QgaW1nRWxlbWVudCA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19pbWFnZVwiKTtcblxuICAgIGltZ0VsZW1lbnQuc3JjID0gdGhpcy5fZGF0YS51cmw7XG4gICAgaW1nRWxlbWVudC5hbHQgPSB0aGlzLl9kYXRhLnRpdGxlO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuX2RhdGEudGl0bGU7XG5cbiAgICAvLyBjbGljayBvbiBpbWcgdG8gb3BlbiBpbWcgbW9kYWwgKGNhdXNlcyBpbml0aWFsIGNhcmRzIG5vdCB0byBzaG93IHVwKVxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5fY2FyZDtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHsgIFxuICAgIGNvbnN0IGltZ0VsZW1lbnQgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9faW1hZ2VcIik7XG5cbiAgICBpbWdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKGRhdGEpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1jYXJkLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlVHJhc2hDbGljaygpO1xuICAgIH0pO1xuXG4gICAgLy8gbGlrZS91bmxpa2UgYnV0dG9uXG4gICAgdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmxpa2UtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl90b2dnbGVMaWtlKCk7XG4gICAgfSk7XG4gIH1cblxuICBfdG9nZ2xlTGlrZSgpIHtcbiAgICB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIubGlrZS1idXR0b25cIikuY2xhc3NMaXN0LnRvZ2dsZShcImxpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgfVxuXG4gIF9kZWxldGVDYXJkKCkge1xuICAgIHRoaXMuX2NhcmQucmVtb3ZlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BvcHVwU2VsZWN0b3J9YCk7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwLWZvcm1fb3BlblwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwLWZvcm1fb3BlblwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vIGlmIGNsaWNrIG91dHNpZGUgcG9wdXAgb3IgY2xpY2sgb24geCBidXR0b24sIGNsb3NlIHBvcHVwLlxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5fcG9wdXBFbGVtZW50IHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlLWJ1dHRvblwiKSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0IH0pIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtZm9ybV9faW5wdXQtY29udGFpbmVyXCIpO1xuICAgIHRoaXMuX2Zvcm1JbnB1dHMgPVxuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXAtZm9ybV9faW5wdXRcIik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xuXG4gICAgdGhpcy5fZm9ybUlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XG4gIH1cbn1cbiIsIi8vbG9jYWwgaW1hZ2VzXG5jb25zdCBUcmFtd2F5ID0gcmVxdWlyZShcIi4uL2ltYWdlcy9QYWxtLVNwcmluZ3MtQWVyaWFsLVRyYW13YXktY29sb3JmaXguanBnXCIpO1xuY29uc3QgQ2VkYXJQdCA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvQ29ya3NjcmV3XyhDZWRhcl9Qb2ludClfMDEuanBnXCIpO1xuY29uc3QgUG93V293ID0gcmVxdWlyZShcIi4uL2ltYWdlcy9qZXNzLWxpbmRuZXIteGVneURuMS1Tb1ktdW5zcGxhc2gtY29sb3JmaXguanBnXCIpO1xuY29uc3QgQ29sV2lsbGlhbXNidXJnID0gcmVxdWlyZShcIi4uL2ltYWdlcy9Db2xvbmlhbC1XaWxsaWFtc2J1cmctVmlyZ2luaWFzaXplZml4LTIuanBnXCIpO1xuY29uc3QgUHVlcnRvUmljbyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvamVubmlmZXItY2hlbi15WEppQzJVaklCby11bnNwbGFzaC1jb2xvcmZpeC5qcGdcIik7XG5jb25zdCBEaXNuZXlXb3JsZCA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvc2FuZHJvLWdvbnphbGV6LWRCRUpHNmh2MjI0LXVuc3BsYXNoLmpwZ1wiKTtcblxuLy9sb29wIGZvciBpbml0aWFsIGNhcmRzXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiUGFsbSBTcHJpbmdzIEFlcmlhbCBUcmFtd2F5XCIsXG4gICAgdXJsOiBUcmFtd2F5LFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ2VkYXIgUG9pbnQsIE9IXCIsXG4gICAgdXJsOiBDZWRhclB0LFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTi5BLiBQb3cgV293c1wiLFxuICAgIHVybDogUG93V293LFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ29sb25pYWwgV2lsbGlhbXNidXJnXCIsXG4gICAgdXJsOiBDb2xXaWxsaWFtc2J1cmcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJPbGQgU2FuIEp1YW4sIFB1ZXJ0byBSaWNvXCIsXG4gICAgdXJsOiBQdWVydG9SaWNvLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRGlzbmV5IFdvcmxkXCIsXG4gICAgdXJsOiBEaXNuZXlXb3JsZCxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uQ29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLnBvcHVwLWZvcm1fX2lucHV0LWNvbnRhaW5lclwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cC1mb3JtX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuc3VibWl0LWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwLWZvcm1fX3N1Ym1pdC1idXR0b25fdHlwZV9kaXNhYmxlZFwiLFxuICBlcnJvclRleHRTZWxlY3RvcjogXCIucG9wdXAtZm9ybV9fZXJyb3ItdGV4dFwiLFxuICBpbnB1dEhhc0Vycm9yOiBcInBvcHVwLWZvcm1fX2lucHV0X2hhc19lcnJvclwiLFxuICBlcnJvclRleHRWaXNpYmxlOiBcInBvcHVwLWZvcm1fX2Vycm9yLXRleHRfdmlzaWJsZVwiLFxufTtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhEZWxldGVDb25maXJtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aERlbGV0ZUNvbmZpcm0uanNcIjtcblxuaW1wb3J0IHtcbiAgaW5pdGlhbENhcmRzLFxuICB2YWxpZGF0aW9uQ29uZmlnLFxufSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzLmpzXCI7XG5cbi8vYnV0dG9uc1xuY29uc3QgZWRpdFByb2ZpbGVJbWdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtcGljLWJ1dHRvblwiKTtcbmNvbnN0IGVkaXRQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWJ1dHRvblwiKTtcbmNvbnN0IGFkZENhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1idXR0b25cIik7XG5jb25zdCBkZWxldGVDb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtYXRpb24tYnV0dG9uXCIpO1xuXG4vL2lucHV0c1xuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuY29uc3QgaW5wdXRKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuXG5cbmNvbnN0IGltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCJpbWFnZS1wb3B1cFwiKTtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChcbiAgICB7XG4gICAgICBkYXRhLFxuICAgICAgaGFuZGxlQ2FyZENsaWNrOiAoKSA9PiB7XG4gICAgICAgIGltYWdlUG9wdXAub3BlbihkYXRhKVxuICAgICAgfSxcbiAgICAgIGhhbmRsZVRyYXNoQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgZGVsZXRlQ29uZmlybVBvcHVwRm9ybS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhcmQtdGVtcGxhdGVcIlxuICApO1xuICByZXR1cm4gY2FyZC5jcmVhdGVDYXJkKCk7XG59O1xuXG5jb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcbiAgICAgIGNhcmRMaXN0LmFkZEl0ZW0oY3JlYXRlQ2FyZChkYXRhKSk7XG4gICAgfSxcbiAgfSxcbiAgXCJlbGVtZW50c1wiXG4pO1xuXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIG5hbWVTZWxlY3RvcjogXCJwcm9maWxlX19uYW1lXCIsXG4gIGRlc2NyaXB0aW9uU2VsZWN0b3I6IFwicHJvZmlsZV9fZGVzY3JpcHRpb25cIixcbn0pO1xuXG5jb25zdCBlZGl0UHJvZmlsZVBvcHVwRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgcG9wdXBTZWxlY3RvcjogXCJlZGl0LXBvcHVwLWZvcm1cIixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEpID0+IHtcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhKTtcbiAgfSxcbn0pO1xuXG5jb25zdCBjcmVhdGVDYXJkUG9wdXBGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cFNlbGVjdG9yOiBcImNyZWF0ZS1wb3B1cC1mb3JtXCIsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChkYXRhKSA9PiB7XG4gICAgY2FyZExpc3QuYWRkSXRlbShjcmVhdGVDYXJkKGRhdGEpKTtcbiAgICBjcmVhdGVDYXJkUG9wdXBGb3JtLnJlc2V0Rm9ybSgpO1xuICB9LFxufSk7XG5cbmNvbnN0IGRlbGV0ZUNvbmZpcm1Qb3B1cEZvcm0gPSBuZXcgUG9wdXBXaXRoRGVsZXRlQ29uZmlybSh7XG4gIHBvcHVwU2VsZWN0b3I6IFwiZGVsZXRlLWNvbmZpcm1hdGlvbi1wb3B1cFwiXG59KTtcblxuY29uc3QgZWRpdFByb2ZpbGVWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcbiAgdmFsaWRhdGlvbkNvbmZpZyxcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXBvcHVwLWZvcm1cIilcbik7XG5lZGl0UHJvZmlsZVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmNvbnN0IGNyZWF0ZUNhcmRWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcbiAgdmFsaWRhdGlvbkNvbmZpZyxcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcG9wdXAtZm9ybVwiKVxuKTtcbmNyZWF0ZUNhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5lZGl0UHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBlZGl0UHJvZmlsZVBvcHVwRm9ybS5vcGVuKCk7XG4gIGNvbnN0IHtuYW1lLCBkZXNjcmlwdGlvbn0gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBpbnB1dE5hbWUudmFsdWUgPSBuYW1lO1xuICBpbnB1dEpvYi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICBlZGl0UHJvZmlsZVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbn0pO1xuXG5hZGRDYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNyZWF0ZUNhcmRQb3B1cEZvcm0ucmVzZXRGb3JtKCk7XG4gIGNyZWF0ZUNhcmRWYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGNyZWF0ZUNhcmRQb3B1cEZvcm0ub3BlbigpO1xufSk7XG5cbi8vZGVsZXRlQ29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvL2RlbGV0ZUNvbmZpcm1Qb3B1cEZvcm0uZGVsZXRlQ2FyZCgpO1xuLy99KTtcblxuXG5jYXJkTGlzdC5yZW5kZXJJdGVtKGluaXRpYWxDYXJkcyk7XG5pbWFnZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5lZGl0UHJvZmlsZVBvcHVwRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xuY3JlYXRlQ2FyZFBvcHVwRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xuZGVsZXRlQ29uZmlybVBvcHVwRm9ybS5zZXRFdmVudExpc3RlbmVycygpOyIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIG9wZW4oeyB1cmwsIHRpdGxlIH0pIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1mb3JtX19jYXB0aW9uXCIpLnRleHRDb250ZW50ID1cbiAgICAgIHRpdGxlO1xuICAgIHRoaXMuX2ltZ0VsZW1lbnQgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1mb3JtX19pbWFnZVwiKTtcbiAgICB0aGlzLl9pbWdFbGVtZW50LnNyYyA9IHVybDtcbiAgICB0aGlzLl9pbWdFbGVtZW50LmFsdCA9IHRpdGxlO1xuXG4gICAgc3VwZXIub3BlbigpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29udGFpbmVyU2VsZWN0b3J9YCk7XG4gIH1cbiAgLy8gbG9vcHMgdGhyb3VnaCBlYWNoIG9mIHRoZSBpdGVtcyB0aGF0IHdlcmUgY2FsbGVkIGluIGFuZCBjYWxscyB0aGUgcmVuZGVyZXIgb24gdGhhdCBpdGVtXG4gIHJlbmRlckl0ZW0oKSB7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3RvciwgZGVzY3JpcHRpb25TZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lU2VsZWN0b3J9YCk7XG4gICAgdGhpcy5fZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZGVzY3JpcHRpb25TZWxlY3Rvcn1gKTtcbiAgfVxuICAvL3JldHVybnMgYW4gb2JqZWN0IHdpdGggaW5mbyBhYm91dCB0aGUgdXNlclxuICBnZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5fZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50LFxuICAgIH07XG4gIH1cbiAgLy90YWtlcyBuZXcgdXNlciBkYXRhIGFuZCBhZGRzIGl0IG9uIHRoZSBwYWdlXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgZGVzY3JpcHRpb24gfSkge1xuICAgIHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aERlbGV0ZUNvbmZpcm0gZXh0ZW5kcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3Ioe3BvcHVwU2VsZWN0b3J9KSB7XG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIH1cbiAgICBcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5kZWxldGVDYXJkKCkpO1xuICAgIH1cblxuICAgIGRlbGV0ZUNhcmQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudFwiKS5jbG9zZXN0KFwiLmVsZW1lbnRcIik7XG4gICAgfVxufVxuXG4vLyBlc2MgYnV0dG9uIGlzbid0IGNsb3NpbmcgdGhpcyBtb2RhbCJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsInAiLCJGb3JtVmFsaWRhdG9yIiwiY29uc3RydWN0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsInRoaXMiLCJfY29uZmlnIiwiX2Zvcm1FbGVtZW50IiwiZW5hYmxlVmFsaWRhdGlvbiIsInNldEV2ZW50TGlzdGVuZXJzIiwiX2lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3VwZGF0ZVN1Ym1pdEJ1dHRvbiIsImhhc0Vycm9ycyIsIl9jaGVja0ZpZWxkc1ZhbGlkaXR5IiwiX3NldFN1Ym1pdEJ1dHRvblN0YXRlIiwiZGlzYWJsZWQiLCJBcnJheSIsImZyb20iLCJzb21lIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9yZW1vdmVFcnJvclN0eWxlcyIsIl9oaWRlRXJyb3JNZXNzYWdlIiwiX2FkZEVycm9yU3R5bGVzIiwiX3Nob3dFcnJvck1lc3NhZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbnB1dEhhc0Vycm9yIiwiaWQiLCJlcnJvclRleHRWaXNpYmxlIiwiYWRkIiwiZXJyb3JNZXNzYWdlRWxlbWVudCIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJyZXNldFZhbGlkYXRpb24iLCJDYXJkIiwidGVtcGxhdGVTZWxlY3RvciIsImRhdGEiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVUcmFzaENsaWNrIiwiX3RlbXBsYXRlIiwiZG9jdW1lbnQiLCJfZGF0YSIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlVHJhc2hDbGljayIsImNyZWF0ZUNhcmQiLCJfY2FyZCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJ0aXRsZUVsZW1lbnQiLCJpbWdFbGVtZW50Iiwic3JjIiwidXJsIiwiYWx0IiwidGl0bGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfdG9nZ2xlTGlrZSIsInRvZ2dsZSIsIl9kZWxldGVDYXJkIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJvcGVuIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsImtleSIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9mb3JtIiwiX2Zvcm1JbnB1dHMiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9nZXRJbnB1dFZhbHVlcyIsIl9mb3JtVmFsdWVzIiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJyZXNldEZvcm0iLCJyZXNldCIsImluaXRpYWxDYXJkcyIsInJlcXVpcmUiLCJ2YWxpZGF0aW9uQ29uZmlnIiwiZm9ybVNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImVycm9yVGV4dFNlbGVjdG9yIiwiZWRpdFByb2ZpbGVCdXR0b24iLCJhZGRDYXJkQnV0dG9uIiwiaW5wdXROYW1lIiwiaW5wdXRKb2IiLCJpbWFnZVBvcHVwIiwiX2ltZ0VsZW1lbnQiLCJkZWxldGVDb25maXJtUG9wdXBGb3JtIiwiY2FyZExpc3QiLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwicmVuZGVySXRlbSIsIml0ZW0iLCJhZGRJdGVtIiwiZWxlbWVudCIsInByZXBlbmQiLCJ1c2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImRlc2NyaXB0aW9uU2VsZWN0b3IiLCJfbmFtZUVsZW1lbnQiLCJfZGVzY3JpcHRpb25FbGVtZW50IiwiZ2V0VXNlckluZm8iLCJkZXNjcmlwdGlvbiIsInNldFVzZXJJbmZvIiwiZWRpdFByb2ZpbGVQb3B1cEZvcm0iLCJjcmVhdGVDYXJkUG9wdXBGb3JtIiwiZGVsZXRlQ2FyZCIsImNsb3Nlc3QiLCJlZGl0UHJvZmlsZVZhbGlkYXRvciIsImNyZWF0ZUNhcmRWYWxpZGF0b3IiXSwic291cmNlUm9vdCI6IiJ9