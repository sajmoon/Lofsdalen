Ext.define('Lofsdalen.view.Main', {
    extend: 'Ext.Container',
    //extend: 'Ext.Carousel',
    //fullscreen: true,
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
        title: 'Lofsdalen',
      },
      {
        xtype: 'tabpanel',
        ui: 'light',
        layout: {
          animation: 'slide',
          type: 'card'
        },
        items: [
          {
            xtype: 'list',
            iconCls: 'action',
            title: 'Ställen',
            id: 'venues',
            itemTpl: [
                '{name}<br/><small>{shortDesc}'
            ],
            data: [
              { name: "Trapper", shortDesc: "Hejsan. Lorem ipsum.. Weeee" },
              { name: "Skoteruthyrare Sven", shortDesc: "Kom nu förfan" },
            ]
          },
          {
            iconCls: 'action',
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
