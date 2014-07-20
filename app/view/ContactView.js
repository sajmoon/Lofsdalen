Ext.define('Lofsdalen.view.ContactView', {
    extend: "Ext.form.Panel", 
    xtype: 'contactview',

    requires: [
        'Ext.form.FieldSet',
    ],

    config: {
        title: 'Contact',
        xtype: "formpanel",
        iconCls:"user",
        layout: "vbox",
        url: 'contact.php',

        items: [{
            xtype: "fieldset",
            title: "Contact us",
            instructions: '(mail är frivilligt)',
            height: 300,

            items: [{
                xtype: 'textfield',
                label: 'Namn'    
            },
            {
                xtype: 'emailfield',
                label: 'Email'
            },
            {
                xtype: 'textareafield',
                label: 'Vad tycker du?'
            }]
            },
            {
                xtype: 'button',
                text: 'Skicka',
                ui: 'confirm',
                handler: function() {
                    this.up('formpanel').submit();
                }
            }
        ]
    }
});