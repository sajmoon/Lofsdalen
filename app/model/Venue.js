Ext.define('Lofsdalen.model.Venue', {
  extend: 'Ext.data.Model',
  requires: ['Ext.data.identifier.Uuid'],

  config: {
    idProperty: 'id',
    identifier: 'uuid',
    fields: [
      { name: 'id', type: 'string', image: "" },
      { name: 'name', type: 'string' },
      { name: 'shortDesc', type: 'string' },
      { name: 'categories', type: 'array' }
    ]
  }
});