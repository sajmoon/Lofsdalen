Ext.define('Lofsdalen.view.SettingsView', {
    extend: 'Ext.form.Panel',
    xtype: 'settingsview',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Toggle',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.Button'
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
                    label: 'Auto Detect?',
                    labelWidth: '55%',
                    value: '1'
                },
                {
                    name: 'units',
                    xtype: 'selectfield',
                    options: [
                    {
                        text: 'Fahrenheit',
                        value: 'f'
                    },
                    {
                         text: 'Celsius',
                         value: 'c'
                    }],
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
                    label: 'City',
                    disabled: true
                },
                {
                    name: 'country',
                    xtype: 'textfield',
                    label: 'Country',
                    disabled: true
                },
                {
                    xtype: 'button',
                    text: 'Refresh',
                    action: 'refresh',
                    margin: '10 5',
                    ui: 'confirm'
                }
            ]}
        ]        
    }
});