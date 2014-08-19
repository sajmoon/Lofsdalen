Ext.define('Lofsdalen.view.VenuesView', {
  extend: 'Ext.Container',
  xtype: 'venuesview',
  
  requires: [
    'Ext.dataview.NestedList',
    'Ext.List',
    'Ext.Img',
    'Lofsdalen.view.VenueListItem',
    'Ext.DataView'
    //'Lofsdalen.store.Venue'
    
  ],

  config: {
    xtype: 'container',
    layout: 'fit',
    iconCls: 'action',
    title: 'Ställen',
    fullscreen: true,
    
    items: [
      {
        xtype: 'dataview',
        iconCls: 'action',
        title: 'Ställen',
        useComponents: true,
        cls: 'venue-list',

        defaultType: 'venuelistitem',

        id: 'venuesview',
        tabBar: false,
        //selectedCls: '',

        items:[
          {
            xtype:'image',
            scrollDock:'top',
            src: "http://www.lofsdalen.com/core/images/95/aktiviteter_mernarhet.jpg",
            style: "-webkit-background-size: cover;",
            docked:'top',
            height:100
          }
        ],

        store: "Venue",

        
      }

        
    ]
  }
});

