Ext.define('Lofsdalen.view.ContactView', {
    extend: "Ext.form.Panel", 
    xtype: 'contactview',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],

    config: {
        title: 'Contact',
        //xtype: 'formpanel',
        iconCls:"user",
        layout: "vbox",
        id: 'contactForm',
        url: 'contact.php',

        items: [{
            xtype: "fieldset",
            title: "Contact us",
            instructions: '(mail är frivilligt)',
            height: 300,

            items: [{
                xtype: 'textfield',
                label: 'Namn',
                name: 'name'  
            },
            {
                xtype: 'emailfield',
                label: 'Email',
                name: 'email'
            },
            {
                xtype: 'textareafield',
                label: 'Vad tycker du?',
                name: 'message'
            }]
            },
            {
                xtype: 'button',
                text: 'Skicka',
                ui: 'confirm',
                handler: function() {
                    var values = Ext.getCmp('contactForm').getValues();
                    Ext.Msg.alert('Welcome', Ext.String.format('{0} {1} {3}', values.name, values.email, values.message));
                    //this.up('fieldset').submit();
                }
            }
        ]
    }
});