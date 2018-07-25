function bestest_sidebar_annihilator() {
    var main   = $('#main');
    var button = $('<a href="#" id="bestest_sidebar_annihilator"></a>');
    var hidden = localStorage.getItem('bestest_sidebar_annihilator') === "true";

    if (!main.hasClass('nosidebar')) {
        function update() {
            main.toggleClass('nosidebar', hidden);
            $(hidden ? '#content' : '#sidebar').prepend(button);
        }

        button.click(function(event) {
            event.preventDefault();
            localStorage.setItem('bestest_sidebar_annihilator', (hidden = !hidden));
            update();
        });

        update();
    }
}
