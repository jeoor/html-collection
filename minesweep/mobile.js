(function () {
    const LONG_PRESS_MS = 450;
    const MOVE_TOLERANCE_PX = 10;

    const isTouchDevice =
        (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) ||
        (typeof window !== 'undefined' &&
            typeof window.matchMedia === 'function' &&
            window.matchMedia('(pointer: coarse)').matches);

    const host = document.querySelector('.game');
    if (!host) return;

    function injectUnifiedThemeCss() {
        const styleId = 'ui-minesweep-theme';
        if (document.getElementById(styleId)) return;

        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
html,body{height:100%}
body{margin:0;padding:0;color:#404040;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,"PingFang SC","Microsoft YaHei",sans-serif;height:100vh;overflow:hidden;background:#fff}
button,select,input,textarea{font:inherit;color:inherit}
button{border:1px solid #d2d4e4;background:#fff;padding:8px 12px;line-height:1.2;cursor:pointer}
button:active{transform:translateY(1px)}
button:focus-visible,select:focus-visible,input:focus-visible,textarea:focus-visible{outline:2px solid #d2d4e4;outline-offset:2px}
select,input,textarea{border:1px solid #d2d4e4;background:#fff;padding:6px 10px;line-height:1.2}

.ctr-container{max-width:980px;width:100%;margin:0 auto;padding:16px;box-sizing:border-box;gap:12px;max-width:980px}
.ctr-container label>span{color:#717171}

.game{max-width:980px;width:100%;margin:0 auto;padding:0 16px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}

.mine-game{border-color:#d2d4e4;margin:12px auto 0 auto}
.mine-log{max-width:980px;width:100%;margin:12px auto 0 auto;padding:10px 12px;border:1px solid #d2d4e4;background:#fff;color:#717171;display:flex;flex-direction:column;gap:4px;box-sizing:border-box}
.mine-log:empty{display:none}
`;

        document.head.appendChild(style);
    }

    function migrateLegacyStoredSize() {
        try {
            const raw = localStorage.getItem('mine-game');
            if (!raw) return;
            const data = JSON.parse(raw);
            if (!data || typeof data !== 'object') return;
            if (data.size !== '9*6') return;
            data.size = '9*9';
            localStorage.setItem('mine-game', JSON.stringify(data));

            const form = document.getElementById('form');
            if (form && form.size) {
                form.size.value = '9*9';
            }
        } catch (_) {
            // ignore
        }
    }

    function applyMobileLayoutFixes() {
        if (!isTouchDevice) return;

        try {
            document.documentElement.style.height = '100%';
            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.overscrollBehavior = 'none';
            document.body.style.height = '100%';
            document.body.style.overflow = 'hidden';
            document.body.style.overscrollBehavior = 'none';

            const controls = document.querySelector('.ctr-container');
            if (controls) {
                controls.style.width = '100%';
                controls.style.maxWidth = '100%';
                controls.style.boxSizing = 'border-box';
                controls.style.margin = '12px auto 0 auto';
                controls.style.padding = '0 8px';
                controls.style.gap = '8px';
            }

            host.style.width = '100%';
            host.style.padding = '0 8px';
            host.style.maxWidth = '100%';
            host.style.overflow = 'hidden';
            host.style.display = 'flex';
            host.style.flexDirection = 'column';
            host.style.alignItems = 'center';
            host.style.justifyContent = 'flex-start';
            host.style.boxSizing = 'border-box';
            host.style.touchAction = 'none';

            const log = document.querySelector('.mine-log');
            if (log) {
                log.style.maxWidth = '100%';
                log.style.width = '100%';
                log.style.boxSizing = 'border-box';
                log.style.overflowWrap = 'anywhere';
            }
        } catch (_) {
            // ignore
        }
    }

    function getViewportHeight() {
        const vv = window.visualViewport;
        if (vv && typeof vv.height === 'number') return vv.height;
        return window.innerHeight;
    }

    function fitBoardToViewport() {
        const board = document.querySelector('.mine-game');
        if (!board) return;

        const controls = document.querySelector('.ctr-container');
        const log = document.querySelector('.mine-log');

        // Always avoid transform scaling: it changes visuals but not layout, which can still overflow.
        board.style.transform = 'none';
        board.style.transformOrigin = 'top center';
        board.style.margin = '12px 0 0 0';

        // Parse current grid template: repeat(rows, 30px)/repeat(cols, 30px)
        const template = board.style.gridTemplate || '';
        const match = template.match(/repeat\((\d+)\s*,\s*(\d+)px\)\s*\/\s*repeat\((\d+)\s*,\s*(\d+)px\)/);
        if (!match) return;

        const rows = Number(match[1]);
        const cols = Number(match[3]);
        if (!rows || !cols) return;

        const padding = 16;
        const availableWidth = Math.max(100, window.innerWidth - padding * 2);
        const controlsHeight = controls ? controls.offsetHeight : 0;
        const logHeight = log ? log.offsetHeight : 0;
        const availableHeight = Math.max(
            120,
            getViewportHeight() - controlsHeight - logHeight - padding * 3
        );

        // Choose gap/border based on target tile size; start from compact defaults.
        // We'll compute tile size with a guessed gap/border, then refine.
        const minTile = 12;
        const maxTile = 30;

        function solve(tileGap, borderWidth) {
            const w = (availableWidth - borderWidth * 2 - tileGap * (cols - 1)) / cols;
            const h = (availableHeight - borderWidth * 2 - tileGap * (rows - 1)) / rows;
            const tile = Math.floor(Math.min(maxTile, w, h));
            return tile;
        }

        let gap = 2;
        let border = 2;
        let tile = solve(gap, border);
        if (tile >= 22) {
            gap = 4;
            border = 4;
            tile = solve(gap, border);
        } else if (tile >= 16) {
            gap = 3;
            border = 3;
            tile = solve(gap, border);
        }

        tile = Math.max(minTile, Math.min(maxTile, tile));

        const sig = `${rows}x${cols}:${tile}:${gap}:${border}`;
        if (board.dataset.mobileGridSig === sig) return;
        board.dataset.mobileGridSig = sig;

        board.style.gap = `${gap}px`;
        board.style.borderWidth = `${border}px`;
        board.style.gridTemplate = `repeat(${rows}, ${tile}px)/repeat(${cols}, ${tile}px)`;
    }

    injectUnifiedThemeCss();
    migrateLegacyStoredSize();
    applyMobileLayoutFixes();
    fitBoardToViewport();

    const scheduleFit = (() => {
        let rafId = 0;
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                rafId = 0;
                fitBoardToViewport();
            });
        };
    })();

    window.addEventListener('resize', scheduleFit, { passive: true });
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', scheduleFit, { passive: true });
    }

    const observer = new MutationObserver(() => scheduleFit());
    observer.observe(host, { childList: true, subtree: true });

    let timerId = null;
    let startX = 0;
    let startY = 0;
    let pressTarget = null;
    let suppressClickUntil = 0;

    function getCubeFromEventTarget(target) {
        if (!target || !target.closest) return null;
        const cube = target.closest('.mine-cube');
        if (!cube) return null;
        if (cube.getAttribute('data-x') === null) return null;
        return cube;
    }

    function clearTimer() {
        if (timerId !== null) {
            clearTimeout(timerId);
            timerId = null;
        }
    }

    function dispatchContextMenu(targetEl, srcEvent) {
        const clientX = (srcEvent && typeof srcEvent.clientX === 'number') ? srcEvent.clientX : 0;
        const clientY = (srcEvent && typeof srcEvent.clientY === 'number') ? srcEvent.clientY : 0;

        let evt;
        try {
            evt = new MouseEvent('contextmenu', {
                bubbles: true,
                cancelable: true,
                clientX,
                clientY,
            });
        } catch (_) {
            evt = document.createEvent('Event');
            evt.initEvent('contextmenu', true, true);
        }

        targetEl.dispatchEvent(evt);
    }

    host.addEventListener(
        'pointerdown',
        (e) => {
            if (e.pointerType !== 'touch') return;

            const cube = getCubeFromEventTarget(e.target);
            if (!cube) return;

            pressTarget = cube;
            startX = e.clientX;
            startY = e.clientY;

            clearTimer();
            timerId = setTimeout(() => {
                if (!pressTarget) return;
                suppressClickUntil = Date.now() + 350;
                dispatchContextMenu(pressTarget, e);
            }, LONG_PRESS_MS);
        },
        { passive: true }
    );

    host.addEventListener(
        'pointermove',
        (e) => {
            if (timerId === null) return;
            if (e.pointerType !== 'touch') return;

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            if (Math.hypot(dx, dy) > MOVE_TOLERANCE_PX) {
                pressTarget = null;
                clearTimer();
            }
        },
        { passive: true }
    );

    function onPointerEnd(e) {
        if (e.pointerType !== 'touch') return;
        pressTarget = null;
        clearTimer();
    }

    host.addEventListener('pointerup', onPointerEnd, { passive: true });
    host.addEventListener('pointercancel', onPointerEnd, { passive: true });

    host.addEventListener(
        'click',
        (e) => {
            if (Date.now() > suppressClickUntil) return;
            const cube = getCubeFromEventTarget(e.target);
            if (!cube) return;
            e.preventDefault();
            e.stopPropagation();
        },
        true
    );
})();
