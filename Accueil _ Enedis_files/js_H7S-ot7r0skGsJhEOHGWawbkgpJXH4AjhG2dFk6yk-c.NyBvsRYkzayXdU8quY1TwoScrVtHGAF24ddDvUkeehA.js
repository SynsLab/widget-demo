(function ($, Drupal) {
    Drupal.behaviors.enedis_search = {
        attach: function (context, settings) {
            $(document).ajaxSuccess(function (event, xhr, settings) {
                const autocomplete = document.querySelectorAll('.ui-autocomplete li')
                const list = document.querySelector('.ui-autocomplete ul')
                const form = document.querySelector('.search-form')
                const len = autocomplete.length - 1
                let index = -1;
                if (autocomplete) {
                    document.addEventListener('keydown', function (event) {
                        if (event.key == "ArrowUp" || event.key == "ArrowDown") {
                            event.preventDefault()
                        }
                        switch (event.key) {
                            case "ArrowUp":
                                if (index > -1) {
                                    index--
                                }
                                else {
                                    index = len
                                }
                                break
                            case "ArrowDown":
                                if (index < len) {
                                    index++
                                }
                                else {
                                    index = -1
                                }
                                break
                        }
                    })
                    autocomplete.forEach((element, i) => {
                        element.value = i
                        element.addEventListener('mouseenter', function (ev) {
                            index = parseInt(ev.target.value)
                        })
                    });
                    document.addEventListener('keydown', function (event) {
                        if (event.key == "Enter" && autocomplete) {
                            autocomplete[index]?.querySelector('a a').click()
                        }
                    })
                }
            });
        }
    };
})(jQuery, Drupal);