/* ============================================================
   MAIN.JS
   Handles interactive behavior for the Zela FC website.
   - Sidebar & featured card click tracking (console logs)
   - Navigation link active state
   - Mobile-friendly search toggle
   ============================================================ */

(function () {
    'use strict';

    /**
     * Log a click event for a story card.
     * @param {string} title - The title of the story that was clicked.
     */
    function logStoryClick(title) {
        console.log('[Zela FC] Story clicked: ' + title);
    }

    /**
     * Attach click handlers to all story cards (featured + sidebar).
     */
    function initStoryCards() {
        // Featured story
        var featured = document.querySelector('.featured-story');
        if (featured) {
            featured.addEventListener('click', function () {
                var titleEl = featured.querySelector('.featured-story__title');
                var title = titleEl ? titleEl.textContent.trim() : 'Featured Story';
                logStoryClick(title);
            });
        }

        // Sidebar stories
        var sidebarCards = document.querySelectorAll('.sidebar-card');
        sidebarCards.forEach(function (card) {
            card.addEventListener('click', function () {
                var titleEl = card.querySelector('.sidebar-card__title');
                var title = titleEl ? titleEl.textContent.trim() : 'Sidebar Story';
                logStoryClick(title);
            });
        });

        console.log('[Zela FC] ' + sidebarCards.length + ' sidebar stories initialised.');
    }

    /**
     * Highlight the currently hovered/active navigation link.
     * Adds a subtle "active" class behavior when link matches current hash.
     */
    function initNavHighlight() {
        var navLinks = document.querySelectorAll('.main-nav__links a');
        var currentHash = window.location.hash || '';

        navLinks.forEach(function (link) {
            // Set active class based on current hash
            if (link.getAttribute('href') === currentHash) {
                link.style.borderBottomColor = '#ffd700';
            }

            // Hover already handled via CSS; this is just for demo
            link.addEventListener('click', function (e) {
                // Remove active style from all
                navLinks.forEach(function (l) {
                    l.style.borderBottomColor = '';
                });
                // Apply to clicked
                link.style.borderBottomColor = '#ffd700';
                console.log('[Zela FC] Navigating to: ' + link.textContent.trim());
            });
        });
    }

    /**
     * Simple search toggle – alerts when search icon is clicked.
     * In a real app this would open a search overlay.
     */
    function initSearchToggle() {
        var searchBtn = document.querySelector('.main-nav__icon-btn[aria-label="Search"]');
        if (searchBtn) {
            searchBtn.addEventListener('click', function () {
                var query = prompt('Search Zela FC:', '');
                if (query) {
                    console.log('[Zela FC] Search query: ' + query);
                    alert('Searching for: "' + query + '"\n(Search functionality is a demo.)');
                }
            });
        }
    }

    /**
     * Simple account toggle.
     */
    function initAccountToggle() {
        var accountBtn = document.querySelector('.main-nav__icon-btn[aria-label="Account"]');
        if (accountBtn) {
            accountBtn.addEventListener('click', function () {
                alert('Account portal would open here.\n(Login / Register is a demo.)');
            });
        }
    }

    /**
     * Log page load event.
     */
    function initPageLoad() {
        console.log('%c⚽ Zela FC — Official Website Loaded', 'color: #b30000; font-size: 14px; font-weight: bold;');
        console.log('Top stories, sidebar, and navigation initialised.');
    }

    /**
     * Bootstrap all modules once DOM is ready.
     */
    document.addEventListener('DOMContentLoaded', function () {
        initStoryCards();
        initNavHighlight();
        initSearchToggle();
        initAccountToggle();
        initPageLoad();
    });

})();
