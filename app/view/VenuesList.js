Ext.define('Lofsdalen.view.VenuesList', {
  extend: 'Ext.dataview.List',
  xtype: 'venueslist',
  
  requires: [
    'Ext.List',
    'Ext.Img',
    'Ext.DataView',
    'Lofsdalen.store.Venue'
  ],

  config: {
    defualts: {
      height: 200
    },

    cls: 'venueList',

    itemTpl:
      '<div class="image">' + 
        '<img src="http://p-hold.com/80" />' +
      '</div>'+
      '<div class="venueName">{name}</div>'+
      '<div class="venueDescription">{shortDesc}</div>' +
      '<div class="see-more-button"></div>'+
      '<div class="categories"><tpl for="categories"><img class="category-icon" src="{url}"/></tpl></div>',

    itemCls: 'venueListItem',
    selectedCls: 'venueListItem-selected',
    pressedCls: 'venueListItem-pressed',

    store: "Venue",

    items: [{
      xtype: 'button',
      scrollDock: 'bottom',
      docked: 'bottom',
      id: 'moreBtn',
      text: 'Kolla om det finns mer'
    },
    {
      xtype: 'image',
      scrollDock: 'top',
      src: "http://www.lofsdalen.com/core/images/95/aktiviteter_mernarhet.jpg",
      style: "-webkit-background-size: cover;",
      docked: 'top',
      height: 200,
      html: "<div class='header-logo'><p class='header-logo-text'>Välkommen till<br/>LOFSDALEN</p></div>"
    }]
  }
});

