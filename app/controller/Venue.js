Ext.define('Lofsdalen.controller.Venue', {
  extend: 'Ext.app.Controller',

  launch: function() {
    this.callParent();
    console.log("VenueCtrl: launch");
  },

  init: function() {
    this.callParent();
    console.log("VenueCtrl: init");
  },

  config: {
    stores: 'Lofsdalen.store.Venue',

    refs: {
      venueContainer: 'venuecontainer',
      venueDetail: 'venuedetail'
    },

    control: {
      venueContainer: {
        detailedVenueCommand: "onDetailedVenueCommand"
      },
      venueDetail: {
        backToVenueListCommand: 'onBackToVenueListCommand'
      }
    }
  },

  onBackToVenueListCommand: function() {
    console.log("onBackToVenueListCommand");
    Ext.Viewport.animateActiveItem(this.getVenueContainer(), { type: 'slide', direction: 'right'});
  },

  onDetailedVenueCommand: function(list, record) {
    console.log("onDetailedVenueCommand: " + list);
    var venueDetail = this.getVenueDetail();
    Ext.Viewport.animateActiveItem(venueDetail, { type: 'slide', direction: 'left'});
  },

  showItem: function(id) {
    console.log('Showing item', id);
  }
});