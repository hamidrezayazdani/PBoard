// Configuration object for the keyboard
const pKeyboard_config = {
    layout_text: [
        // First row of Persian characters
        {
            'ض': { name: 'ض', text: 'ض', shiftText: 'ً', class: 'pKKey' },
            'ص': { name: 'ص', text: 'ص', shiftText: 'ٌ', class: 'pKKey' },
            'ث': { name: 'ث', text: 'ث', shiftText: 'ٍ', class: 'pKKey' },
            'ق': { name: 'ق', text: 'ق', shiftText: 'ريال', class: 'pKKey' },
            'ف': { name: 'ف', text: 'ف', shiftText: '،', class: 'pKKey' },
            'غ': { name: 'غ', text: 'غ', shiftText: '؛', class: 'pKKey' },
            'ع': { name: 'ع', text: 'ع', shiftText: ',', class: 'pKKey' },
            'ه': { name: 'ه', text: 'ه', shiftText: ']', class: 'pKKey' },
            'خ': { name: 'خ', text: 'خ', shiftText: '[', class: 'pKKey' },
            'ح': { name: 'ح', text: 'ح', shiftText: '\\', class: 'pKKey' },
            'ج': { name: 'ج', text: 'ج', shiftText: '}', class: 'pKKey' },
            'چ': { name: 'چ', text: 'چ', shiftText: '{', class: 'pKKey' },
            // ... other keys ...
        },
        // Second row of Persian characters
        {
            'ش': { name: 'ش', text: 'ش', shiftText: 'َ', class: 'pKKey' },
            'س': { name: 'س', text: 'س', shiftText: 'ُ', class: 'pKKey' },
            'ی': { name: 'ی', text: 'ی', shiftText: 'ِ', class: 'pKKey' },
            'ب': { name: 'ب', text: 'ب', shiftText: 'ّ', class: 'pKKey' },
            'ل': { name: 'ل', text: 'ل', shiftText: 'ّ', class: 'pKKey' },
            'ا': { name: 'ا', text: 'ا', shiftText: 'ۀ', class: 'pKKey' },
            'ت': { name: 'ت', text: 'ت', shiftText: 'آ', class: 'pKKey' },
            'ن': { name: 'ن', text: 'ن', shiftText: 'ـ', class: 'pKKey' },
            'م': { name: 'م', text: 'م', shiftText: '«', class: 'pKKey' },
            'ی': { name: 'ی', text: 'ی', shiftText: '»', class: 'pKKey' },
            'ک': { name: 'ک', text: 'ک', shiftText: ':', class: 'pKKey' },
            'گ': { name: 'گ', text: 'گ', shiftText: '"', class: 'pKKey' },

            'return': { name: 'return', text: 'Enter', class: 'pKFunction' },
            // ... other keys ...
        },
        // Third row of Persian characters
        {
            'shift': { name: 'shift', text: '', class: 'pKFunction' },

            'ظ': { name: 'ظ', text: 'ظ', shiftText: 'ة', class: 'pKKey' },
            'ط': { name: 'ط', text: 'ط', shiftText: 'ي', class: 'pKKey' },
            'ز': { name: 'ز', text: 'ز', shiftText: 'ژ', class: 'pKKey' },
            'ر': { name: 'ر', text: 'ر', shiftText: 'ؤ', class: 'pKKey' },
            'ذ': { name: 'ذ', text: 'ذ', shiftText: 'إ', class: 'pKKey' },
            'د': { name: 'د', text: 'د', shiftText: 'أ', class: 'pKKey' },
            'ئ': { name: 'ئ', text: 'ئ', shiftText: 'ء', class: 'pKKey' },
            'و': { name: 'و', text: 'و', shiftText: '<', class: 'pKKey' },
            'و': { name: '.', text: '.', shiftText: '>', class: 'pKKey' },
            // ... other keys ...
        },
        // Fourth row of Persian characters
        {
            'clear': { name: 'clear', text: '', class: 'pKFunction' },
            'space': { name: 'space', text: ' ', class: 'pKKey' },
            'backspace': { name: 'backspace', text: '', class: 'pKFunction' },
            // ... other keys ...
        }
    ],
    layout_numeric: [
        // ... Your numeric keyboard layout ...
        {
            '1': { name: '1', text: '1', class: 'pKKey' },
            '2': { name: '2', text: '2', class: 'pKKey' },
            '3': { name: '3', text: '3', class: 'pKKey' },
        },
        {
            '4': { name: '4', text: '4', class: 'pKKey' },
            '5': { name: '5', text: '5', class: 'pKKey' },
            '6': { name: '6', text: '6', class: 'pKKey' },
        },
        {
            '7': { name: '7', text: '7', class: 'pKKey' },
            '8': { name: '8', text: '8', class: 'pKKey' },
            '9': { name: '9', text: '9', class: 'pKKey' },
        },
        {
            'clear': { name: 'clear', text: '', class: 'pKFunction' },
            'return': { name: 'return', text: 'Enter', class: 'pKFunction' },
        }
    ],
    layout_tel: [
        // ... Your numeric keyboard layout ...
        {
            '1': { name: '1', text: '1', class: 'pKKey' },
            '2': { name: '2', text: '2', class: 'pKKey' },
            '3': { name: '3', text: '3', class: 'pKKey' },
        },
        {
            '4': { name: '4', text: '4', class: 'pKKey' },
            '5': { name: '5', text: '5', class: 'pKKey' },
            '6': { name: '6', text: '6', class: 'pKKey' },
        },
        {
            '7': { name: '7', text: '7', class: 'pKKey' },
            '8': { name: '8', text: '8', class: 'pKKey' },
            '9': { name: '9', text: '9', class: 'pKKey' },
        },
        {
            'space': { name: 'space', text: ' ', class: 'pKKey' },
            'backspace': { name: 'backspace', text: '', class: 'pKFunction' }
        }
    ],
};

let shiftActive = false;

// Function to create and handle the keyboard
const pKeyboard = (layout) => {
    const container = document.getElementById('pkeyboard-container');
    container.innerHTML = ''; // Clear previous layout

    // Create keyboard layout
    layout.forEach(row => {
        const line = document.createElement('ul');
        line.classList.add('pK', 'pKLine');
        container.appendChild(line);
        Object.entries(row).forEach(([key, value]) => {
            const { name, text, shiftText, class: className } = value;
            const li = document.createElement("li");
            li.classList.add("pK", className, `pKey-${name}`);
            li.textContent = shiftActive && shiftText ? shiftText : text;
            li.addEventListener("click", pKeyboardHandleClick);
            line.appendChild(li);
        })
    });

    const toggleShift = () => {
        shiftActive = !shiftActive;
        pKeyboard(pKeyboard_config.layout_text);
    };

    // Event delegation for keyboard interaction
    function pKeyboardHandleClick(event) {
        if (event.target.closest('#pkeyboard-container')) {

            const keyElement = event.target;

            if (keyElement.classList.contains("pKey-shift")) {
                toggleShift();
                return;
            }
            const inputElement = document.querySelector('input[data-pkeyboard]:focus');
            const cursorPos = Object.hasOwn(inputElement, 'selectionStart') ? inputElement.selectionStart : inputElement.value.length;
            const cursorEnd = Object.hasOwn(inputElement, 'selectionEnd') ? inputElement.selectionEnd : inputElement.value.length;
            const textBefore = inputElement.value.substring(0, cursorPos);
            const textAfter = inputElement.value.substring(cursorEnd);
            const maxLength = inputElement.getAttribute('maxlength');

            // Handle backspace functionality
            if (keyElement.classList.contains('pKFunction')) {
                if (keyElement.classList.contains('pKey-backspace')) {
                    if (cursorPos === cursorEnd) {
                        // No text is selected; remove the character before the cursor
                        inputElement.value = textBefore.slice(0, -1) + textAfter;
                        inputElement.setSelectionRange(cursorPos - 1, cursorPos - 1);
                    } else {
                        // Text is selected; remove the selected text
                        inputElement.value = textBefore + textAfter;
                        inputElement.setSelectionRange(cursorPos, cursorPos);
                    }
                } else if (keyElement.classList.contains('pKey-clear')) {
                    inputElement.value = '';
                } else if (keyElement.classList.contains("pKey-return")) {
                    inputElement.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }));
                    inputElement.dispatchEvent(new KeyboardEvent('keypress', { 'key': 'Enter' }));
                    inputElement.dispatchEvent(new KeyboardEvent('keyup', { 'key': 'Enter' }));
                    inputElement.blur();
                    return;
                }
            } else if (keyElement.classList.contains('pKKey')) {
                // Insert the character at the cursor position
                const char = keyElement.textContent;
                // Check if inserting the character would exceed the maxlength
                if (!maxLength || textBefore.length + char.length + textAfter.length <= maxLength) {
                    /**
                     * Unfortunately, the standard behavior of <input type="number"> doesn’t support features like selectionStart, selectionEnd, setSelectionRange 
                     * or direct manipulation of the cursor position. However, We need to check it
                     */
                    if (Object.hasOwn(inputElement, 'setSelectionRange')) {
                        inputElement.value = textBefore + char + textAfter;

                        // Move the cursor after the inserted character
                        inputElement.setSelectionRange(cursorPos + char.length, cursorPos + char.length);
                    } else {
                        inputElement.value = textBefore + char
                    }
                }
            }

            if (shiftActive) {
                toggleShift(); // Turn off shift after a key is pressed
            }

            inputElement.focus(); // Keep the input focused after clicking a key
        }
    }
};

// Initialize the single keyboard container
const initPKeyboardContainer = () => {
    const keyboardContainer = document.createElement('div');
    keyboardContainer.id = 'pkeyboard-container';
    document.body.appendChild(keyboardContainer);

    keyboardContainer.addEventListener('mousedown', (event) => {
        event.preventDefault();
    });

    // Initialize the keyboard with the default layout
    pKeyboard(pKeyboard_config.layout_text);
};


// Function to update the keyboard layout based on the focused input
const updatePKeyboardLayout = (inputElement) => {
    // Function to remove the event listener from all 'li' elements
    const removeKeyboardListeners = () => {
        const keys = document.querySelectorAll('.pKKey');
        keys.forEach(key => {
            key.removeEventListener('click', pKeyboardHandleClick);
        });
    };

    const inputType = inputElement.getAttribute('type');
    const inputMode = inputElement.getAttribute('inputmode');
    let layout;

    if (inputType === 'number' || inputMode === 'numeric') {
        layout = pKeyboard_config.layout_numeric;
    } else if (inputType === 'tel') {
        layout = pKeyboard_config.layout_tel;
    } else {
        layout = pKeyboard_config.layout_text;
    }

    pKeyboard(layout);
};

// Add focus event listeners to inputs with the data-pkeyboard attribute
const PKaddFocusListeners = () => {
    document.querySelectorAll('input[data-pkeyboard]').forEach(input => {
        input.addEventListener('focus', () => {
            updatePKeyboardLayout(input);
            document.getElementById('pkeyboard-container').style.display = 'block';
        });

        input.addEventListener('blur', () => {
            document.getElementById('pkeyboard-container').style.display = 'none';
        });
    });
};

// Call this function once when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initPKeyboardContainer();
    PKaddFocusListeners();
});