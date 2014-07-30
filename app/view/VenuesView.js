Ext.define('Lofsdalen.view.VenuesView', {
  extend: 'Ext.tab.Tab',
  xtype: 'venuesview',
  
  requires: [
    'Ext.dataview.NestedList',
    'Ext.List',
    'Lofsdalen.store.Venue'
  ],

  config: {
    title: 'Ställen',
    fullscreen: true,
    items: [
      {
        xtype: 'list',
        title: 'hej',
        itemHeight: 60,
        itemTpl: '<p><h1>{name}</h1>{shortdesc}</p>',
        
        data: [
          { name: "Trapper", shortDesc: "Hejsan. Lorem ipsum.. Weeee" },
          { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
        ]
      }
    ]
  }
});

