Ext.define('Lofsdalen.controller.Main', {
    extend: 'Ext.app.Controller',
    
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
            //    tap: 'onRefresh'
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
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
