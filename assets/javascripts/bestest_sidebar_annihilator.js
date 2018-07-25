function bestest_sidebar_annihilator() {
    var main   = $('#main');
    var button = $('<div id="bestest_sidebar_annihilator">');
    var hidden = localStorage.getItem('bestest_sidebar_annihilator') === "true";

    if (!main.hasClass('nosidebar')) {
        function update() {
            main.toggleClass('nosidebar', hidden);
            $(hidden ? '#content' : '#sidebar').prepend(button);
        }

        button.on('click', function() {
            localStorage.setItem('bestest_sidebar_annihilator', (hidden = !hidden));
            update();
        });

        update();
    }
}
