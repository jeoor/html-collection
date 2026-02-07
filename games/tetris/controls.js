(function () {
    function dispatchKeyEvent(type, code) {
        try {
            var event = new KeyboardEvent(type, {
                bubbles: true,
                cancelable: true,
                code: code,
                key: code,
            });
            document.dispatchEvent(event);
        } catch (e) {
            // Fallback for older browsers
            var legacyEvent = document.createEvent("Event");
            legacyEvent.initEvent(type, true, true);
            legacyEvent.code = code;
            legacyEvent.key = code;
            document.dispatchEvent(legacyEvent);
        }
    }

    function bindButton(button) {
        var code = button.getAttribute("data-code");
        if (!code) return;

        var isPressed = false;

        function onDown(event) {
            event.preventDefault();
            if (isPressed) return;
            isPressed = true;
            button.classList.add("is-pressed");
            dispatchKeyEvent("keydown", code);
        }

        function onUp(event) {
            if (!isPressed) return;
            if (event) event.preventDefault();
            isPressed = false;
            button.classList.remove("is-pressed");
            dispatchKeyEvent("keyup", code);
        }

        button.addEventListener("pointerdown", onDown);
        button.addEventListener("pointerup", onUp);
        button.addEventListener("pointercancel", onUp);
        button.addEventListener("pointerleave", onUp);

        // Keyboard accessibility when focused
        button.addEventListener("keydown", function (e) {
            if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                dispatchKeyEvent("keydown", code);
            }
        });
        button.addEventListener("keyup", function (e) {
            if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                dispatchKeyEvent("keyup", code);
            }
        });

        // Prevent long-press context menu on some mobile browsers
        button.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });
    }

    function init() {
        var root = document.querySelector(".mobile-controls");
        if (!root) return;

        var buttons = root.querySelectorAll(".control-btn");
        buttons.forEach(bindButton);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
