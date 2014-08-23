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

    launch: function() {
        this.callParent();
        console.log("MainCtrl: launch");
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

        Ext.Viewport.unmask();
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
         Lofsdalen.utils.Functions.loadData();
    }
});
