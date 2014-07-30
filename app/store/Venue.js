Ext.define('Lofsdalen.store.Venue', {
  extends: 'Ext.data.Store',

  id: 'VenueStore',

  requires: [
    'Lofsdalen.model.Venue'
  ],

  model: 'Lofsdalen.model.Venue',
  defaultRootProperty: 'items',
  
  data: [
    { name: "Trapper", shortDesc: "Hejsan. Lorem ipsum.. Weeee" },
    { name: "Skoteruthyrare Sven", shortDesc: "Kom nu förfan" },
  ]
});