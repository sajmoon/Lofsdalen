Ext.define('Lofsdalen.view.VenueListItem', {
  extend: 'Ext.dataview.component.DataItem',
  xtype: 'venuelistitem',

  requires: [
    'Ext.Img',
    'Ext.slider.Slider'
  ],

  config: {
    cls: 'venue-list-item',

    image: true,

    name: {
      cls: 'x-name',
      flex: 1
    },

    slider: {
      flex: 2
    },

    layout: {
      type: 'hbox',
      align: 'center'
    },
    
    dataMap: {
      getImage: {
        setSrc: 'image'
      },
      getName: {
        setHtml: 'name'
      },
      getSlider: {
        setValue: 'cuteness'
      }
    }
  },

  applyImage: function(config) {
    return Ext.factory(config, Ext.Img, this.getImage());
  },
 
  updateImage: function(newImage, oldImage) {
    if (newImage) {
      this.add(newImage);
    }

    if (oldImage) {
      this.remove(oldImage);
    }  
  },

  applyName: function(config) {
      return Ext.factory(config, Ext.Component, this.getName());
  },

  updateName: function(newName, oldName) {
    if (newName) {
      this.add(newName);
    }

    if (oldName) {
      this.remove(oldName);
    }
  },

  applySlider: function(config) {
    return Ext.factory(config, Ext.slider.Slider, this.getSlider());
  },

  updateSlider: function(newSlider, oldSlider) {
    if (newSlider) {
      this.add(newSlider);
    }

    if (oldSlider) {
      this.remove(oldSlider);
    }
  }
});