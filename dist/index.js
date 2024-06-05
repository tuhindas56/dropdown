"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dropdown(trigger, content, _a) {
    var keepOpenOnContentClick = _a.keepOpenOnContentClick;
    document.addEventListener("DOMContentLoaded", function () {
        content.hidden = true;
    });
    trigger.addEventListener("click", function (event) {
        content.hidden = content.hidden ? false : true;
        event.stopPropagation();
    });
    document.addEventListener("click", function (e) {
        return toggle(e, content, keepOpenOnContentClick);
    });
}
exports.default = dropdown;
function toggle(e, content, keepOpenOnContentClick) {
    var target = e.target;
    if (keepOpenOnContentClick) {
        if (!(content.contains(target) || target === content)) {
            content.hidden = true;
            return;
        }
    }
    else {
        if (!(target === content)) {
            content.hidden = true;
            return;
        }
    }
}
