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
      venueDetail: 'venuedetail',
      venueDetailPanel: '#venueDetailPanel',
      venuesList: 'venueslist'
    },

    control: {
      venueContainer: {
        detailedVenueCommand: "onDetailedVenueCommand"
      },
      venueDetail: {
        backToVenueListCommand: 'onBackToVenueListCommand'
      },
      venuesList: {
        itemtap: 'onDetailedVenueCommand'
      }
    }
  },

  onBackToVenueListCommand: function() {
    console.log("onBackToVenueListCommand");
    Ext.Viewport.animateActiveItem(this.getVenueContainer(), { type: 'slide', direction: 'right'});
  },

  onDetailedVenueCommand: function(list, index, element, record) {
    console.log("onDetailedVenueCommand:");
    console.log(record);
    var venueDetail = this.getVenueDetail();
    venueDetail.updateWithVenue(record);
    //venueDetail.setData(record.data);
    // var venueDetailPanel = this.getVenueDetailPanel();
    venueDetail.setValues(record.data);
    Ext.Viewport.animateActiveItem(venueDetail, { type: 'slide', direction: 'left'});
  }
});