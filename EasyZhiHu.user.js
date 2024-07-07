// ==UserScript==
// @name         EasyZhiHu
// @description  这是一款促进知乎极致简洁和高效的插件。免费共享大量创新功能，如：净化页面、免登录等。让我们的学习体验无比简洁、专注、高效、畅快。
// @version      1.0
// @author       xcanwin
// @namespace    https://github.com/xcanwin/EasyZhiHu/
// @supportURL   https://github.com/xcanwin/EasyZhiHu/
// @license      GPL-2.0-only
// @match        https://www.zhihu.com/question/*
// @match        https://www.zhihu.com/aria/question/*
// @grant        GM_addStyle
// @run-at       document-start
// @downloadURL https://update.greasyfork.org/scripts/499917/EasyZhiHu.user.js
// @updateURL https://update.greasyfork.org/scripts/499917/EasyZhiHu.meta.js
// ==/UserScript==

(function() {
    'use strict';

    const purify_style_pc = `
/*整体缩放*/
body {
    zoom: 65%;
    overflow-y: scroll;
}

/*净化页面*/
.Sticky {
    display: none !important;
}

/*调整标题*/
.aria-centered-wrapper h1 {
    display: flex;
    justify-content: center;
    font-size: 50px;
}
.aria-question-header .aria-question-text .RichText p {
    margin: unset !important;
}

/*调整提问框*/
.aria-question-text {
	background: #f6f6f6;
	padding: 32px 48px 32px 48px !important;
    margin-top: 32px !important;
}

/*展示全屏*/
.aria-centered-wrapper {
    width: 80%;
}
.aria-transform-origin-center-0>.aria-centered-wrapper {
    margin-top: 48px;
}

/*正文的图片居中*/
.css-1ygg4xu img.content_image, .css-1ygg4xu img.origin_image {
    width: unset !important;
}

`;

    if (location.href.match(/https:\/\/www.zhihu.com\/question\/(\d+)(?:\/answer\/(\d+))?/)) {
        location.href = location.href.replace("www.zhihu.com", "www.zhihu.com/aria");
    } else if (location.href.match(/https:\/\/www.zhihu.com\/aria\/question\/(\d+)(?:\/answer\/(\d+))?/)) {
        GM_addStyle(purify_style_pc);
    }

})();
