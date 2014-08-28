Ext.define('Lofsdalen.store.Venue', {
  extend: 'Ext.data.Store',

  requires: [
    'Lofsdalen.model.Venue'
  ],

  config: {
    model: 'Lofsdalen.model.Venue',
    defaultRootProperty: 'items',
    
    data: [
      { name: "Trapper", headerimages: ['http://www.burgerbusiness.com/wp-content/uploads/Hardees_MemphisBBQ1.jpg', 'http://i.telegraph.co.uk/multimedia/archive/02631/tortoise-burger-_2631647b.jpg'], shortDesc: "Hejsan. Lorem ipsum.. Weeee", categories: [ {url: "http://static.miniclipcdn.com/images/awards/store/1183_50.png"}, {url: "http://emoji.fileformat.info/gemoji/beer.png"} ] },
      { name: "Skiduthyraren Sven", headerimages: ['http://www.burgerbusiness.com/wp-content/uploads/Hardees_MemphisBBQ1.jpg'], shortDesc: "Kom nu förfan. Det finns massa man kan göra på skidor." },
      { name: "Annas annorlunda annanaser", shortDesc: "Smaka på spännande nyheter från hela världen." },
      { name: "Basketarenan", shortDesc: "Lofsdalen BK lirar basket. Typ som globetrotters fast de är 60 plus.", categories: [ {url: "http://emoji.fileformat.info/gemoji/beer.png"} ]},
      { name: "Hyr skoter hos oss.", shortDesc: "Med skoter kan man åka långt. Och hoppas. Och se världen." },
      { name: "Voffelstugan", shortDesc: "Kom nu förfan" }
    ],

    sorter: [{ property: 'name', direction: 'DESC'}]
  }
});