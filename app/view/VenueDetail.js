Ext.define('Lofsdalen.view.VenueDetail', {
	extend: 'Ext.form.Panel',
  alias: 'widget.venuedetail',

  config: {
    scrollable: 'vertical'
  },

  initialize: function() {
    this.callParent(arguments);

    var backButton = {
      xtype: 'button',
      ui: 'back',
      text: 'Home',
      handler: this.onBackButtonTap,
      scope: this
    };

    var topToolbar = {
      xtype: 'toolbar',
      docked: 'top',
      title: 'VenueDetail',
      items: [
        backButton,
        { xtype: 'spacer' }
      ]
    };

    var venueNameEditor = {
      xtype: 'textfield',
      name: 'name',
      label: 'Name',
      required: true
    };

    this.add([
        topToolbar,
        { xtype: 'fieldset',
          items: [venueNameEditor]
        }
      ]
    );
  },

  onBackButtonTap: function() {
    console.log('VenueDetail.js: backButton tap');
    this.fireEvent('backToVenueListCommand', this);
  }
});