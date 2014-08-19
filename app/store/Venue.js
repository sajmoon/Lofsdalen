Ext.define('Lofsdalen.store.Venue', {
  extend: 'Ext.data.Store',

  requires: [
    'Lofsdalen.model.Venue'
  ],

  config: {
    model: 'Lofsdalen.model.Venue',
    defaultRootProperty: 'items',
    
    data: [
      { name: "Trapper", shortDesc: "Hejsan. Lorem ipsum.. Weeee" },
      { name: "Skiduthyraren Sven", shortDesc: "Kom nu förfan. Det finns massa man kan göra på skidor." },
      { name: "Annas annorlunda annanaser", shortDesc: "Smaka på spännande nyheter från hela världen." },
      { name: "Basketarenan", shortDesc: "Lofsdalen BK lirar basket. Typ som globetrotters fast de är 60 plus." },
      { name: "Hyr skoter hos oss.", shortDesc: "Med skoter kan man åka långt. Och hoppas. Och se världen." },
      { name: "Voffelstugan", shortDesc: "Kom nu förfan" }
    ]  
  }
});