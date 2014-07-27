Ext.define('Lofsdalen.controller.Main', {
    extend: 'Ext.app.Controller',

    requires: [
        'Lofsdalen.utils.Functions'
    ],
    
    config: {
        stores: 'Lofsdalen.store.Settings',
        refs: {
            mainView: 'main',
            settingsView: 'settingsview',
         
            btnSettings: 'main button[action=settings]',
            btnRefresh: 'settingsview button[action=refresh]',
            btnBack: 'main button[action=back]',
         
            toggleGeo: 'settingsview togglefield',
            fieldCity: 'settingsview textfield[name=city]',
            fieldCountry: 'settingsview textfield[name=country]',
            fieldUnits: 'settingsview selectfield'  
        },
        control: {
            'btnRefresh': {
                tap: 'onRefresh'
            },
            'btnSettings': {
                tap: 'onSettingsBtnTap'
            },
            'btnBack': {
            //    tap: 'onBackBtnTap'
            },
            'toggleGeo': {
            //    change: 'onToggle'
            },
            'mainView': {
                activeitemchange: 'onViewChange'
            }
        }
    },

    onViewChange: function() {

    },

    onSettingsBtnTap: function() {
        this.getMainView().setActiveItem(1);
    },

    onRefresh: function() {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            indicator: true,
            message: 'Save Settings...'
        });

        var errorstring = "";
        var store = Ext.getStore('Settings');

        //console.log((store));
        //remove previous settings
        store.removeAll();
        store.sync();

        var model = Ext.create("Lofsdalen.model.Setting", {});

        this.getSettingsView().updateRecord(model);

        model.save({
            success: function(model) {
                store.sync();
                Ext.Msg.alert("Saved data", JSON.stringify(model.getData()));
            }
        });

        //console.log(model);
        //var errors = model.validate();

        //console.log(errors);

        //var model = Ext.create("Lofsdalen.model.Setting", {});
        // model.save({
        //     success: function(model) {
        //         model.set('name','george');
        //         model.set('units','c');
        //         model.save(); // you should handle error here too
        //     }
        //     // you should handle error cases too...
        // });

        //console.log(model.getData());

        //store.add(model.getData());
        //store.sync();
        //Ext.Msg.alert("Saved data", JSON.stringify(model.getData()));

        //Ext.getStore('Settings').load({
        //    callback: function(records, operation, success) {
        //        console.log("load: " + records.length);
        //    }});


        //console.log((store));

            //Lofsdalen.utils.Functions.loadData();

        Ext.Viewport.unmask();
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
         Lofsdalen.utils.Functions.loadData();
    }
});
