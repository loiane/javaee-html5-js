/**
 * This view is an example list of people.
 */
Ext.define('contacts.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'contacts.store.Personnel'
    ],

    title: 'Personnel',

    /*store: {
        type: 'personnel'
    },*/

    bind: '{personnel}',

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        bind: '{personnel}',
        dock: 'top',
        displayInfo: true
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
