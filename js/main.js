var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                console.log(e);
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + ' ' + e.title + '</a></li>');
            }
        });
    },

    initialize: function() {
        MemoryStore = WebSqlStore;
        this.store = new MemoryStore();
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }

};

app.initialize();