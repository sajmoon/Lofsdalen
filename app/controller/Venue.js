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
      moreButton: '#moreBtn',
      venueList: 'venueslist list'
    },

    control: {
      moreButton: {
        tap: 'onMoreButtonTap'
      },
      venueList: {
        itemtap: 'onVenueItemTap'
      }
    },

    routes: {
      'show/:id' : 'showItem'
    }
    
  },

  onVenueItemTap: function() {
    console.log("VenueItem tap");
  },

  onMoreButtonTap: function(button) {
    console.log(button);
  },

  showItem: function(id) {
    console.log('Showing item', id);
  }
});