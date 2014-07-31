Ext.define('Lofsdalen.view.VenuesView', {
  extend: 'Ext.Container',
  xtype: 'venuesview',
  
  requires: [
    'Ext.dataview.NestedList',
    'Ext.List',
    'Ext.Img'
    //'Lofsdalen.store.Venue'
  ],

  config: {
    xtype: 'container',
    layout: 'vbox',
    fullscreen: true,
    defaults: { flex: 1 },

    
    items: [
      {
        xtype: 'image',
        src: "http://www.lofsdalen.com/core/images/95/aktiviteter_mernarhet.jpg",
        flex: 1,
        style: "-webkit-background-size: cover;"
      },
      {
        xtype: 'list',
        iconCls: 'action',
        title: 'Ställen',
        id: 'venuesview',
        tabBar: false,
        flex: 2,

        itemTpl: [
          '{name}<br/><small>{shortDesc}'
        ],
        
        data: [
          { name: "Trapper", shortDesc: "Hejsan. Lorem ipsum.. Weeee" },
          { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
          { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
          { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
          { name: "Annas annorlunda annanaser", shortDesc: "Smaka på spännande nyheter från hela världen." },
          { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
          { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
          { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
          { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
          { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
          { name: "Voffelstugan", shortDesc: "Kom nu förfan" }
        ]
      }
    ]
  }
});

