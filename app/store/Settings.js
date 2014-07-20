Ext.define('Lofsdalen.store.Settings', {
    extend: 'Ext.data.Store',
    requires: ['Lofsdalen.model.Setting'],
        config: {
            model: 'Lofsdalen.model.Setting',
            autoLoad: true
    }
});