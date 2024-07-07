// ==UserScript==
// @name         EasyZHIHU
// @description  这是一款促进知乎极致简洁和高效的插件。免费共享大量创新功能，如：净化页面、免登录、展示全屏、复制文本等。让我们的学习体验无比简洁、专注、高效、畅快。
// @version      11.0
// @author       xcanwin
// @namespace    https://github.com/xcanwin/EasyZHIHU/
// @supportURL   https://github.com/xcanwin/EasyZHIHU/
// @license      GPL-2.0-only
// @match        https://www.zhihu.com/question/*
// @match        https://www.zhihu.com/aria/question/*
// @grant        GM_addStyle
// @run-at       document-start
// @downloadURL https://update.greasyfork.org/scripts/499917/EasyZHIHU.user.js
// @updateURL https://update.greasyfork.org/scripts/499917/EasyZHIHU.meta.js
// ==/UserScript==

(function() {
    'use strict';

    const purify_style_pc = `
/*整体缩放*/
body {
    zoom: 64%;
    overflow-y: scroll !important;
}

/*净化页面*/
.Sticky /*隐藏[置顶的][顶部的]菜单栏*/,
.CornerButtons /*隐藏[底部的]回到顶部按钮*/
{
    display: none !important;
}

/*调整标题*/
.aria-centered-wrapper h1 {
    display: flex;
    justify-content: center;
    font-size: 51.5px;
}
.aria-question-header .aria-question-text .RichText p {
    margin: unset;
}

/*调整提问框*/
.aria-question-text {
	background: #f6f6f6;
	padding: 16px 32px 16px 32px;
    margin-top: 32px;
}

/*展示全屏*/
.aria-centered-wrapper {
    width: 78% !important;
}
.aria-answer-wrapper {
    padding: unset !important;
}

/*调整正文背景*/
.aria-primary-color-style.aria-secondary-background {
    background: unset !important;
}

/*正文的图片居中*/
.css-1ygg4xu img.content_image, .css-1ygg4xu img.origin_image {
    width: unset !important;
}

/*调整正文的回答数量栏*/
.aria-answer-count {
    border-bottom: 4px solid !important;
    border-color: #bdbdbd !important;
    margin: unset !important;
}

/*调整正文分割线*/
.List-item + .List-item::after {
    left: -20px !important;
    right: -20px !important;
    height: 3px;
    background: #bdbdbd;
    border-bottom: unset;
    border-color: unset;
}

/*净化底部*/
.aria-page-wrapper {
    padding-bottom: unset !important;
}

`;

    const current_url = location.href;
    if (current_url.match(/https:\/\/www.zhihu.com\/question\/(\d+)(?:\/answer\/(\d+))?/)) {
        location.href = current_url.replace("www.zhihu.com", "www.zhihu.com/aria");
    } else if (current_url.match(/https:\/\/www.zhihu.com\/aria\/question\/(\d+)(?:\/answer\/(\d+))?/)) {
        GM_addStyle(purify_style_pc);
        window.onload = function() {
            window.history.replaceState(null, '', current_url.replace("www.zhihu.com/aria", "www.zhihu.com"));
        }
    }

})();
