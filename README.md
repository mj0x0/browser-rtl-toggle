# Zen RTL Toggle

A lightweight userscript for the **Zen Browser** (and other Firefox-based browsers) that brings the Windows-style `Ctrl + Shift` Right-to-Left (RTL) text toggle to Linux.

## Why?
On Windows, `Ctrl + Shift` toggles the writing direction in most text fields. Linux lacks a system-wide equivalent. This script restores that functionality within the browser.

## Features
- **Toggle RTL/LTR:** Use `Ctrl + Shift` inside any input, textarea, or content-editable div.
- **Smart Alignment:** Automatically handles `text-align` and `direction`.
- **Punctuation:** Uses `unicode-bidi: plaintext` to ensure periods and exclamation marks stay at the correct end of the sentence.

## Installation
1. Install [Violentmonkey](https://violentmonkey.github.io/).
2. Click "Create a new script" and paste the code from `zen-rtl.user.js`.
3. In the Script settings, change run-at to document-idle
4. Save and refresh your tabs.