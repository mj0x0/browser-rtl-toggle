// ==UserScript==
// @name        Zen Windows-Style RTL Toggle (Strict)
// @match       *://*/*
// @grant       none
// @run-at      document-idle
// @version     1.3
// @description Brings Windows-style Ctrl+Shift RTL toggle to Zen Browser.
// ==/UserScript==

(function() {
    'use strict';

    // Use a standard bubble listener (false) instead of capturing (true)
    document.addEventListener('keydown', function(e) {
        
        // Logic to detect if Ctrl + Shift were pressed
        const isModifierOnly = e.key === "Control" || e.key === "Shift";

        if (e.ctrlKey && e.shiftKey && !e.altKey && isModifierOnly) {
            let el = document.activeElement;

            if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) {
                // Determine current state
                const currentDir = el.getAttribute('dir') || window.getComputedStyle(el).direction;
                const isRTL = currentDir === 'rtl';

                const newDir = isRTL ? 'ltr' : 'rtl';
                const newAlign = isRTL ? 'left' : 'right';

                // Apply changes via style rather than heavy DOM manipulation where possible
                el.setAttribute('dir', newDir);
                el.style.direction = newDir;
                el.style.textAlign = newAlign;
                el.style.unicodeBidi = 'plaintext';
            }
        }
    }, false); 
})();