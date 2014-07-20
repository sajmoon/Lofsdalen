Ext.define('Lofsdalen.view.SettingsView', {
    extend: 'Ext.form.Panel',
    xtype: 'settingsview',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Toggle',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.Button',
    ],

    config: {
        title: 'Inställningar',
        items: [{
            xtype: 'fieldset',
            title: 'SettingsView',
            instructions: 'In case you do not want the app to detect your location you can enter the city and country.',
            items: [
                {
                    name: 'geo',
                    xtype: 'togglefield',
                    label: 'Geo'
                },
                {
                    name: 'units',
                    xtype: 'selectfield',
                    label: 'Units'
                },
                {
                    name: 'name',
                    xtype: 'textfield',
                    label: 'Name'
                },
                {
                    name: 'city',
                    xtype: 'textfield',
                    label: 'City'
                },
                {
                    name: 'country',
                    xtype: 'textfield',
                    label: 'Country'
                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    ui: 'confirm'
                }
            ]}
        ]        
    }
});