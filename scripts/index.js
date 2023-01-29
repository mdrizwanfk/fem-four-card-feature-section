"use strict";

import LikeButton from "./like-button";

var domContainer = document.querySelector("#like_button_container");
ReactDOM.render(React.createElement(LikeButton, null), domContainer);