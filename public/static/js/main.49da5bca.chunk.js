(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(5),i=t.n(o),c=(t(15),t(9)),s=t(1),l=t(6),u=t.n(l),p=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("a",{href:"https://markbryginskii.github.io/mesto-react/index.html"},r.a.createElement("img",{className:"header__logo",src:e.logo,alt:"\u041c\u0435\u0441\u0442\u043e"})))},d=r.a.createContext(),m=function(e){var a=r.a.useContext(d),t=e.owner._id===a._id,n=e.likes.some((function(e){return e._id===a._id}));return r.a.createElement("li",{className:"photo-card"},r.a.createElement("button",{type:"button",onClick:function(){e.onCardDelete(e)},className:"photo-card__trash-icon ".concat(!t&&"photo-card__trash-icon_hide"),value:""}),r.a.createElement("img",{className:"photo-card__image",src:e.link,alt:e.name,onClick:function(){e.onCardClick(e)}}),r.a.createElement("div",{className:"photo-card__footer"},r.a.createElement("h3",{className:"photo-card__title"},e.name),r.a.createElement("div",{className:"photo-card__like-container"},r.a.createElement("button",{type:"button",onClick:function(){e.onCardLike(e)},className:"photo-card__like-icon ".concat(n&&"photo-card__like-icon_active")}),r.a.createElement("p",{className:"photo-card__like-counter"},e.likes.length))))},_=function(e){var a=r.a.useContext(d);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-container"},r.a.createElement("img",{className:"profile__avatar",alt:"\u0430\u0432\u0430\u0442\u0430\u0440",src:a.avatar}),r.a.createElement("button",{onClick:e.onEditAvatarClick,type:"button",className:"profile__avatar-edit-button"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__info-row"},r.a.createElement("p",{className:"profile__user-name"},a.name),r.a.createElement("button",{onClick:e.onEditProfileClick,type:"button",className:"profile__edit-button"})),r.a.createElement("p",{className:"profile__user-about"},a.about)),r.a.createElement("button",{onClick:e.onAddPlaceClick,type:"button",className:"profile__add-button"})),r.a.createElement("section",{className:"photo-grid"},r.a.createElement("ul",{className:"photo-cards"},e.cards.map((function(a){return r.a.createElement(m,Object.assign({onCardClick:e.onCardClick,onCardLike:e.onCardLikeClick,onCardDelete:e.onCardDeleteClick,key:a._id},a))})))))};var h=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))},f=function(e){return r.a.createElement("div",{id:"popupIncreasePhoto",className:"popup popup_min-transparent ".concat(e.card&&"popup_opened")},r.a.createElement("div",{className:"popup__image-container"},r.a.createElement("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),r.a.createElement("img",{className:"popup__image",src:e.card&&e.card.link,alt:e.card&&e.card.name}),r.a.createElement("figure",{className:"popup__image-figure"},e.card&&e.card.name)))},v=function(e){return r.a.createElement("form",{id:"popup".concat(e.name),onSubmit:e.onSubmit,className:"popup popup_half-transparent ".concat(e.isOpen&&"popup_opened"),noValidate:!0},r.a.createElement("div",{className:"popup__form-container popup__form-container_".concat(e.popupSize)},r.a.createElement("button",{onClick:e.onClose,type:"reset",className:"popup__close-button",value:""}),r.a.createElement("h2",{className:"popup__title"},e.title),e.children))},E=function(e){var a=r.a.useContext(d),t=r.a.useState(""),n=Object(s.a)(t,2),o=n[0],i=n[1],c=r.a.useState(""),l=Object(s.a)(c,2),u=l[0],p=l[1];r.a.useEffect((function(){i(a.name),p(a.about)}),[a]);return r.a.createElement(v,{name:"EditProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",popupSize:"large",isOpen:e.isOpen,onClose:e.onClose},r.a.createElement("div",{className:"popup__input-container"},r.a.createElement("input",{onChange:function(e){i(e.target.value)},value:o,"data-field-name":"name",id:"popup__user-name",type:"text",className:"popup__text-field",autoFocus:!0,placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),r.a.createElement("span",{id:"popup__user-name-error",className:"popup__input-error"})),r.a.createElement("div",{className:"popup__input-container"},r.a.createElement("input",{onChange:function(e){p(e.target.value)},value:u,"data-field-name":"about",id:"popup__user-about",type:"text",className:"popup__text-field",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0}),r.a.createElement("span",{id:"popup__user-about-error",className:"popup__input-error"})),r.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),e.onUpdateUser({name:o,about:u})},className:"popup__save-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))},b=function(e){var a=r.a.useRef();return r.a.createElement(v,{name:"EditAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",popupSize:"medium",isOpen:e.isOpen,onClose:e.onClose},r.a.createElement("div",{className:"popup__input-container"},r.a.createElement("input",{ref:a,"data-field-name":"avatar",id:"popup__avatar-link",type:"url",className:"popup__text-field",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{id:"popup__avatar-link-error",className:"popup__input-error"})),r.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:a.current.value})},className:"popup__save-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))},C=function(e){var a=r.a.useState(""),t=Object(s.a)(a,2),n=t[0],o=t[1],i=r.a.useState(""),c=Object(s.a)(i,2),l=c[0],u=c[1];return r.a.createElement(v,{name:"AddPhoto",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",popupSize:"large",isOpen:e.isOpen,onClose:e.onClose},r.a.createElement("div",{className:"popup__input-container"},r.a.createElement("input",{onChange:function(e){o(e.target.value)},"data-field-name":"name",id:"popup__card-name",type:"text",className:"popup__text-field",autoFocus:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0}),r.a.createElement("span",{id:"popup__card-name-error",className:"popup__input-error"})),r.a.createElement("div",{className:"popup__input-container"},r.a.createElement("input",{onChange:function(e){u(e.target.value)},"data-field-name":"link",id:"popup__card-link",type:"url",className:"popup__text-field",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{id:"popup__card-link-error",className:"popup__input-error"})),r.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),e.onAddCard({name:n,link:l})},className:"popup__save-button"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))},k=t(7),g=t(8),N=new(function(){function e(a){Object(k.a)(this,e),this._baseUrl=a.baseUrl,this._headers=a.headers}return Object(g.a)(e,[{key:"handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject("Error : ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch(this._baseUrl+"/cards",{method:"GET",headers:this._headers}).then((function(a){return e.handleOriginalResponse(a)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch(this._baseUrl+"/users/me",{method:"GET",headers:this._headers}).then((function(a){return e.handleOriginalResponse(a)}))}},{key:"setUserInfo",value:function(e){var a=this;return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return a.handleOriginalResponse(e)}))}},{key:"setUserAvatar",value:function(e){var a=this;return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return a.handleOriginalResponse(e)}))}},{key:"addCard",value:function(e){var a=this;return fetch(this._baseUrl+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return a.handleOriginalResponse(e)}))}},{key:"deleteCard",value:function(e){var a=this;return fetch(this._baseUrl+"/cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return a.handleOriginalResponse(e)}))}},{key:"addCardLike",value:function(e){var a=this;return fetch(this._baseUrl+"/cards/likes/"+e,{method:"PUT",headers:this._headers}).then((function(e){return a.handleOriginalResponse(e)}))}},{key:"removeCardLike",value:function(e){var a=this;return fetch(this._baseUrl+"/cards/likes/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return a.handleOriginalResponse(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"aa78f1a9-4e3b-428a-a9f7-5265cbc9b3da","Content-Type":"application/json"}}),O=function(){var e=r.a.useState(""),a=Object(s.a)(e,2),t=a[0],n=a[1];r.a.useEffect((function(){N.getUserInfo().then((function(e){n(e)}))}),[]);var o=r.a.useState(!1),i=Object(s.a)(o,2),l=i[0],m=i[1],v=r.a.useState(!1),k=Object(s.a)(v,2),g=k[0],O=k[1],y=r.a.useState(!1),U=Object(s.a)(y,2),S=U[0],j=U[1],x=r.a.useState(!1),L=Object(s.a)(x,2),A=L[0],P=L[1],w=r.a.useState([]),R=Object(s.a)(w,2),D=R[0],T=R[1];r.a.useEffect((function(){N.getInitialCards().then((function(e){T(e)}))}),[]);var I=r.a.useState(),q=Object(s.a)(I,2),z=q[0],J=q[1],B=function(){m(!1),O(!1),j(!1),P(!1),J(null)};return r.a.createElement(d.Provider,{value:t},r.a.createElement("div",{className:"root"},r.a.createElement(p,{logo:u.a}),r.a.createElement(_,{onEditAvatarClick:function(){m(!l)},onEditProfileClick:function(){O(!g)},onAddPlaceClick:function(){j(!S)},cards:D,onCardClick:function(e){J(e)},onCardLikeClick:function(e){(e.likes.some((function(e){return e._id===t._id}))?N.removeCardLike(e._id):N.addCardLike(e._id)).then((function(a){var t=D.map((function(t){return t._id===e._id?a:t}));T(t)}))},onCardDeleteClick:function(e){N.deleteCard(e._id).then((function(){var a=D.filter((function(a){return a._id!==e._id}));T(a)}))}}),r.a.createElement(h,null),r.a.createElement(b,{isOpen:l,onClose:B,onUpdateAvatar:function(e){var a=e.avatar;N.setUserAvatar({avatar:a}).then((function(e){n(e)})).then((function(){B()}))}}),r.a.createElement(E,{isOpen:g,onClose:B,onUpdateUser:function(e){var a=e.name,t=e.about;N.setUserInfo({name:a,about:t}).then((function(e){console.log(e),n(e)})).then((function(){B()}))}}),r.a.createElement(C,{isOpen:S,onClose:B,onAddCard:function(e){var a=e.name,t=e.link;N.addCard({name:a,link:t}).then((function(e){T([].concat(Object(c.a)(D),[e]))})).then((function(){B()}))}}),r.a.createElement(f,{card:z,isOpen:A,onClose:B})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t.p+"static/media/header-logo.c6f11019.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.49da5bca.chunk.js.map