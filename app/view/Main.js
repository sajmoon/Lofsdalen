Ext.define('Lofsdalen.view.Main', {
    extend: 'Ext.tab.Panel',
    //extend: 'Ext.Carousel',
    fullscreen: true,
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Lofsdalen.view.SettingsView',
        'Ext.data.proxy.JsonP',
        'Ext.dataview.NestedList',
        'Lofsdalen.view.ContactView',
        'Lofsdalen.view.VenuesView'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'nestedlist',
                title: 'Lofsdalen',
                iconCls: 'star',
                displayField: 'title',

                store: {
                    type: 'tree',
                    fields: [
                        'title', 'link', 'author', 'contentSnippet', 'content',
                        {name: 'leaf', defaultValue: true}
                    ],

                    root: {
                        leaf: false
                    },

                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },

                detailCard: {
                    xtype: 'panel',
                    scrollable: true,
                    styleHtmlContent: true
                },

                listeners: {
                    itemtap: function(nestedList, list, index, element, post) {
                        this.getDetailCard().setHtml(post.get('content'));
                    }
                }
            },
            {
                iconCls: 'action',
                action: 'venuesview',
                xtype: 'venuesview'
            },
            {
                iconCls: 'settings',
                action: 'settingsview',
                xtype: "settingsview"
            },
            { 
                iconCls: 'action',
                action: 'contact',
                xtype: 'contactview'
            }
        ]
    }
});
