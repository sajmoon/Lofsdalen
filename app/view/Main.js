Ext.define('Lofsdalen.view.Main', {
    extend: 'Ext.Container',
    //extend: 'Ext.Carousel',
    fullscreen: false,
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Lofsdalen.view.SettingsView',
        'Ext.data.proxy.JsonP',
        'Ext.dataview.NestedList',
        'Lofsdalen.view.ContactView',
        'Lofsdalen.view.VenuesView',
        'Ext.tab.Panel'
    ],

    config: {
      layout: {
        type: 'fit'
      },

      items: [
      {
        xtype: 'titlebar',
        docked: 'top',
        title: 'Lofsdalen'
      },
      {
        xtype: 'tabpanel',
        ui: 'winter',
        layout: {
          animation: 'slide',
          type: 'card'
        },
        items: [
          {
            iconCls: 'star',
            action: 'venuesview',
            xtype: 'venuesview'
          },
          {
            iconCls: 'settings',
            action: 'settingsview',
            xtype: 'settingsview'
          },
          { 
            iconCls: 'action',
            action: 'contact',
            xtype: 'contactview'
          }
        ],
        tabBar: {
          docked: 'bottom',
          layout: {
            pack: 'center',
            type: 'hbox'
          }
        }
     }
  ]}
});
