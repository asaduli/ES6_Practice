//this function will change fousable input index by keypress (up & down arrow key)
 function inputFocusIndexChangeByKeyPress(event ,index) {
    var code = event.keyCode || event.which;
    if (code == '40') {
        // Prevent the default behavior of the down arrow key
        event.preventDefault();

        // Find the next focusable element
        var focusableElements = $(':focusable');
        var currentIndex = focusableElements.index(document.activeElement);
        var nextIndex = currentIndex + index;
        // If we're at the end of the focusable elements, loop back to the start
        if (nextIndex >= focusableElements.length) {
            nextIndex = 0;
        }

        // Move focus to the next element
        $(focusableElements[nextIndex]).focus();
    } else if (code == '38') {
        // Prevent the default behavior of the down arrow key
        event.preventDefault();

        // Find the next focusable element
        var focusableElements = $(':focusable');
        var currentIndex = focusableElements.index(document.activeElement);
        var nextIndex = currentIndex - index;
        // If we're at the end of the focusable elements, loop back to the start
        if (nextIndex >= focusableElements.length) {
            nextIndex = 0;
        }

        // Move focus to the next element
        $(focusableElements[nextIndex]).focus();

    }

       
}
