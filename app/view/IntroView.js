Ext.define('Lofsdalen.view.IntroView', {
  extend: 'Ext.Container',
  xtype: 'introview',

  requires: [
    'Ext.Img'
  ],

  config: {
    layout: 'fit',

    items: [
      {
        xtype: 'image',
        cls: 'intro-view-panel'
      }
    ]
  }

})