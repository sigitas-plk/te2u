(function ($) {
    $(document).ready(function () {
        var css = {
            parentClass: 'collapsible',
            rowClass: 'collapsible--row',
            titleClass: 'collapsible--header',
            bodyClass: 'collapsible--body',
            showBody: 'show-body',
            slideDuration: 350
        };

        showFirstRowOnlyOnload($('.' + css.parentClass));

        $("."+css.parentClass).on("click", "."+css.titleClass, function () {
            openRow($(this));
        });
        
        function openRow(element) {
            var parent = element.parent();
            if (!parent.hasClass(css.showBody)) {
                closeSiblingRows(element);
                element.siblings().slideDown({
                    duration: css.slideDuration,
                    queue: false,
                    complete: function () {
                        parent.addClass(css.showBody);

                    }
                });
            }
        }

        function closeSiblingRows(element) {
            element.parent().siblings().each(function () {
                var child = $(this);
                if (child.hasClass(css.showBody)) {
                    child.find('.' + css.bodyClass).slideUp({
                        duration: css.slideDuration,
                        queue: false,
                        complete: function () {
                            child.removeClass(css.showBody);
                        }
                    });
                }
            });
        }

        function showFirstRowOnlyOnload(parent) {
             parent.children().each(function () {
                var child = $(this);
                if (child.is(':first-child') && !child.hasClass(css.showBody)) {
                    child.addClass(css.showBody);
                } else {
                    if (!child.is(':first-child')&&child.hasClass(css.showBody)) {
                        child.removeClass(css.showBody);
                    }
                }
            });
        }
    });
}(jQuery));