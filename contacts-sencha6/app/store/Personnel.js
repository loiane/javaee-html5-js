Ext.define('contacts.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    /*data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},*/

    proxy: {
        type: 'ajax',
        api: {
            read : 'localhost:8080/contacts-spring-mvc/contact/view.action',
            create : 'localhost:8080/contacts-spring-mvc/contact/create.action',
            update: 'localhost:8080/contacts-spring-mvc/contact/update.action',
            destroy: 'localhost:8080/contacts-spring-mvc/contact/delete.action'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: false,
            rootProperty: 'data'
        }
    }
});
