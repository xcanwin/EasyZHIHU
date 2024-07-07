// ==UserScript==
// @name         EasyZHIHU
// @description  这是一款促进知乎极致简洁和高效的插件。免费共享大量创新功能，如：净化页面、免登录、展示全屏等。让我们的学习体验无比简洁、专注、高效、畅快。
// @version      6.0
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
    overflow-y: scroll;
}

/*净化页面*/
.Sticky /*隐藏[置顶的][顶部的]菜单栏*/,
.aria-answer-count /*隐藏[正文的]回答数量栏*/
{
    display: none;
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
	padding: 32px 48px 32px 48px;
    margin-top: 32px;
}

/*展示全屏*/
.aria-centered-wrapper {
    width: 78%;
}
.aria-answer-wrapper {
    padding: unset;
}

/*正文背景*/
.aria-primary-color-style.aria-secondary-background {
    background: unset;
}

/*正文的图片居中*/
.css-1ygg4xu img.content_image, .css-1ygg4xu img.origin_image {
    width: unset !important;
}

/*正文分割线*/
.List-item + .List-item::after {
    left: -40px;
    right: -40px;
    height: 3px;
    background: linear-gradient(to right, #ffffff, #bdbdbd, #ffffff);
    border-bottom: unset;
    border-color: unset;
}

`;

    if (location.href.match(/https:\/\/www.zhihu.com\/question\/(\d+)(?:\/answer\/(\d+))?/)) {
        location.href = location.href.replace("www.zhihu.com", "www.zhihu.com/aria");
    } else if (location.href.match(/https:\/\/www.zhihu.com\/aria\/question\/(\d+)(?:\/answer\/(\d+))?/)) {
        GM_addStyle(purify_style_pc);
    }

})();
