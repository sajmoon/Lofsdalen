Ext.define('Lofsdalen.model.Setting', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],
    config: {
        idProperty: 'id',
        identifier: 'uuid',
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'city', type: 'auto' },
            { name: 'country', type: 'auto' },
            { name: 'units', type: 'auto' },
            { name: 'geo', type: 'boolean' },
            { name: 'name', type: 'auto' }
        ],
        validations: [{
                type: 'presence',
                field: 'city',
                message: "Please provide a city."
            },
            {
                type: 'presence',
                field: 'country',
                message: "Please provide a country."
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'lofsdalensettings'
        }
    }
});