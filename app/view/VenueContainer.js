Ext.define('Lofsdalen.view.VenueContainer', {
  extend: 'Ext.navigation.View',
  alias: 'widget.venuecontainer',
  
  requires: [
    'Lofsdalen.view.VenuesList',
    'Lofsdalen.view.VenueDetail'
  ],

  config: {
    items: [
      {
        xtype: 'venueslist'
      }
    ]
  },
  /*initialize: function() {
    this.callParent();

    var topToolBar = {
      xtype: 'toolbar',
      title: 'Lofsdalen',
      docked: 'top'
    };

    var venuesList = {
      xtype: 'venueslist',
      listeners: {
        itemtap:  { fn: this.onVenueListTap,      scope: this},
        disclose: { fn: this.onVenueListDisclose, scope: this}
      }
    };

    this.add([topToolBar, venuesList]);
  },
*/
  onVenueListTap: function(list, record, target, index, evt, options) {
    console.log('VenudeListTap: ' + record);
    //this.fireEvent('detailedVenueCommand', this, record);
  },

  onVenueListDisclose: function(list, record, target, index, evt, options) {
    console.log("VenueListDisclose: " + record);
    this.fireEvent('detailedVenueCommand', this, record);
  }
});
