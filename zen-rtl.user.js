// ==UserScript==
// @name        Zen Windows-Style RTL Toggle (Strict)
// @match       *://*/*
// @grant       none
// @run-at      document-start
// @version     1.2
// @description Brings Windows-style Ctrl+Shift RTL toggle to Zen Browser.
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {

        const isModifierOnly = e.key === "Control" || e.key === "Shift";

        if (e.ctrlKey && e.shiftKey && !e.altKey && isModifierOnly) {

            let el = document.activeElement;

            // Ensure we are in a text field or editable area
            if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) {

                const currentDir = el.getAttribute('dir') || window.getComputedStyle(el).direction;
                const isRTL = currentDir === 'rtl';

                // Flip values
                const newDir = isRTL ? 'ltr' : 'rtl';
                const newAlign = isRTL ? 'left' : 'right';

                // Apply changes
                el.setAttribute('dir', newDir);
                el.style.setProperty('direction', newDir, 'important');
                el.style.setProperty('text-align', newAlign, 'important');
                // The "BiDi" Magic: This handles the cursor and punctuation correctly 
                el.style.setProperty('unicode-bidi', 'plaintext', 'important');

                console.log(`[RTL Toggle] Switched ${el.tagName} to ${newDir.toUpperCase()}`);
            }
        }
    }, true);
})();