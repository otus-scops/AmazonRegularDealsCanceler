// ==UserScript==
// @name         AmazonRegularDealsCanceler
// @namespace    http://github.com/otus-scops/AmazonRegularDealsCanceler/AmazonRegularDealsCenceler.user.js
// @version      0.1
// @description  Amazon.co.jpの定期お得便の初期選択をキャンセルします
// @author       otusscops
// @match        https://www.amazon.co.jp/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    if(document.querySelector("#buyBoxAccordion") !== null)
    {
        document.querySelector("#buyBoxAccordion i").click();
    }
})();
