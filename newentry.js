;(function($){
    'use strict';
    
    $.fn.newEntry = function(options) {
        var settings = $.extend({
            keepDay: 4,
            content: 'new entry',
            element: '<span>',
            class: 'new',
            inset: true,
            after: true
        }, options);
        
        var newDay = new Date();
        var $new;
        if (settings.element) {
            $new = $(settings.element).append(settings.content).addClass(settings.class);
        }
        
        return this.each(function() {
            var date = $(this).data('date');
            var dateNum = date.split('-');
            var oldDay = new Date(dateNum[0] + '/' + dateNum[1] + '/' +dateNum[2]);
            var d = (newDay - oldDay) / (1000 * 24 * 3600);
            if (d <= settings.keepDay) {
                var content = $new.clone() || settings.content;
                if (settings.inset && settings.after) {
                    $(this).append(content);
                } else if (settings.inset && !settings.after) {
                    $(this).prepend(content);
                } else if (!settings.inset && settings.after) {
                    $(this).after(content);
                } else if (!settings.inset && !settings.after) {
                    $(this).before(content);
                }
                
            }
        });
    };
}(jQuery));

