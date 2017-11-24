define(['choices'], function(Choices) {
    'use strict';

    return function(options, select) {
        const defaultOptions = {
            placeholder  : false,
            searchEnabled: false,
            classNames   : {
                containerInner: 'select__field',
                list          : 'select__field-list',
                input         : 'select__field-input',
                item          : 'select__field-item',
                listSingle    : 'select__field-list--single'
            }
        };
        options = Object.assign(defaultOptions, options);
        new Choices(select, options);
    }
});