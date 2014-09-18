$(document).ready(function() {
    $('body').on('click', '.show-commend', function() {
        var ds_loaded = false;
        window.disqus_shortname = $('.show-commend').attr('name');

        $.ajax({
            type: "GET",
            url: "http://" + disqus_shortname + ".disqus.com/embed.js",
            dataType: "script",
            cache: true
        });
    });

    //highlight
    $('pre').addClass('language-php');
    Prism.highlightAll();
});