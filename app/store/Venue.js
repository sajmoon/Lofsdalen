Ext.define('Lofsdalen.store.Venue', {
  extend: 'Ext.data.Store',

  requires: [
    'Lofsdalen.model.Venue'
  ],

  model: 'Lofsdalen.model.Venue',
  defaultRootProperty: 'items',
  
  data: [
    { name: "Trapper", shortDesc: "Hejsan. Lorem ipsum.. Weeee" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Annas annorlunda annanaser", shortDesc: "Smaka på spännande nyheter från hela världen." },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan" },
    { name: "Voffelstugan", shortDesc: "Kom nu förfan" }
  ]
});