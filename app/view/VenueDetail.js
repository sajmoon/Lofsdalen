Ext.define('Lofsdalen.view.VenueDetail', {
	extend: 'Ext.form.Panel',
  alias: 'widget.venuedetail',

  config: {
    scrollable: 'vertical'
  },

  require: [
    'Ext.Carousel'
  ],

  initialize: function() {
    this.callParent();
    console.log("VenueDetail: init");
  },

  config: {
    refs: {
      venueDetailPanel: '#venueDetailPanel'
    },

    data: {
      name: "Simon"
    },

    cls: 'venue_detail',

    items: [
      {
        xtype: 'toolbar',
        docked: 'top',
        title: 'Ett ställe',
        items: [
          {
            xtype: 'button',
            ui: 'back',
            text: 'Tillbaka',
            itemId: 'backButton'
          },
          { xtype: 'spacer' }
        ]
      },
      {
        xtype: 'carousel',
        height: 200,
        cls: 'venue_detail_header',
        id: 'header_carousel'
      },
      {
        xtype: 'component',
        id: 'categories',
        tpl: ['<div class="categories"><tpl for="categories"><img class="category-icon" src="{url}"/></tpl></div>']
      },
      {
        name: 'name',
        tpl: [
          '<div class="venue-name">'+
            '{name}'+
          '</div>'
        ]
      },
      {
        xtype: 'component',
        name: 'headerimg',
        tpl: ['header img: {headerimg}']
      },
      {
        xtype: 'component',
        name: 'shortDesc',
        tpl: ['{shortDesc}']
      }
    ]
    ,
    listeners: [
      {
        delegate: '#backButton',
        event: 'tap',
        fn: 'onBackButtonTap'
      }
    ]
  },

  updateWithVenue: function(record) {
    Ext.each(this.items.items, function(item) {
      item.setData(record.data);
    });

    var carousel = Ext.getCmp('header_carousel');
    console.log(carousel);
    console.log(record.data.headerimages);
    record.data.headerimages.map(function(img) {
      carousel.add({html: '<img src='+img +' />'});
    });
  },

  setVenue: function(record) {
    console.log('set venue');
    var fields = {},
      itemName;

    var getFieldsFrom = function(item) {
      console.log("item:");
      if (item.isImage) {
        console.log("image");
        console.log(item);
        console.log(record.data["header_img"]);
        item.setSrc(record.data["header_img"]);
      } else if (item.isComponent) {
        console.log("is component");
        // itemName = item.getName();
        item.setData(record.data);
      }
    }
    this.getItems().each(getFieldsFrom);

    console.log(fields);
  }
  ,

  onBackButtonTap: function() {
    console.log('VenueDetail.js: backButton tap');
    this.fireEvent('backToVenueListCommand', this);
  }
});