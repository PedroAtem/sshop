angular.module("sshop").factory("paginator", function() {

    var create = function(items, items_per_page) {
        return {
            items_per_page: items_per_page,
            offset: 0,
            page: 1,
            pages: [],
            items: items,
            filtered_items: [],
            search: "",
            init: function() {
                this.update();
            },
            updatePages: function() {
                let items_filtered = this.items.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
                var count = items_filtered.length / this.items_per_page;
                var count_precision = Number(count.toString().split('.')[0]);
                this.pages = [];
                if (count > count_precision) {
                    count++;
                }
                for (i = 1; i <= count; i++) {
                    this.pages.push(i);
                }
            },
            updateItems: function(items) {
                this.items = items;
                this.update();
            },
            update: function() {
                this.updatePages();
                this.filtered_items = this.items.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
                this.filtered_items = this.filtered_items.slice(this.offset, this.offset + this.items_per_page);
            },
            next: function() {
                if (this.items.length > this.offset + this.items_per_page) {
                    this.offset += this.items_per_page;
                    this.page++;
                }
                this.update();
            },
            previous: function() {
                if (this.offset - this.items_per_page >= 0) {
                    this.offset -= this.items_per_page;
                    this.page--;
                }
                this.update();
            },
            goToPage(page_number) {
                this.offset = (page_number - 1) * this.items_per_page;
                this.page = page_number;
                this.update();
            }
        }
    }

    return {
        create: create
    }

});