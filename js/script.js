Vue.config.devtools = true;

const add = new Vue(
    {
        el: '#app',
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Napoli',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'Debellis',
                    position: 'Pizzaiolo',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Genova',
                    contract: 'Part Time'
                },
                {
                    id: 3,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Bari',
                    contract: 'Full Time'
                },
                {
                    id: 4,
                    company: 'Lucertola',
                    position: 'Receptionist',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 5,
                    company: 'Perferendis',
                    position: 'Meccanico',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Gallipoli',
                    contract: 'Full Time'
                },
                {
                    id: 6,
                    company: 'Degallis',
                    position: 'Gelataio/a',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Venezia',
                    contract: 'Part Time'
                },
                {
                    id: 7,
                    company: 'Perferendis',
                    position: 'Cameriere',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Bari',
                    contract: 'Part Time'
                },
                {
                    id: 8,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Venezia',
                    contract: 'Full Time'
                },
                {
                    id: 9,
                    company: 'Sauro',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Part Time'
                }

            ],
            starred: [1, 2, 3],
            applied: [4, 5],
            displayModal: 'd-none',
            filter: 'all',
            filteredJobs: []

        },
        mounted() {
            this.stampList();
        },
        methods: {
            //al click sul cuore vuoto => aggiungi alla lista preferiti
            addToFav: function (index) {
                if (!this.starred.includes(index)) {
                    this.starred.push(index)
                }
            },
            //al click sul cuore pieno => elimina dalla lista preferiti
            removeFromFav: function (id) {
                //devo cercare l'indice dell'annuncio
                //nell'array dei preferiti
                //e cancellarlo
                if (this.starred.includes(id)) {
                    let index = this.starred.indexOf(id);
                    this.starred.splice(index, 1);
                }
            },
            //al click su invia candidatura=> pushare elementi nell'array
            sendCurriculum: function (index) {
                if (!this.applied.includes(index)) {
                    this.applied.push(index);
                    this.display();
                }
            },
            display: function () {
                setTimeout(() => {
                    this.displayModal = 'd-block';
                    this.notDisplay();
                }, 1000)
            },
            notDisplay: function () {
                setTimeout(() => {
                    this.displayModal = 'd-none'
                }, 2000)
            },
            stampList: function () {
                //devo passare l'array
                //ho un array di numeri => sono gli id degli annunci
                //devo stampare questi annunci 
                if (this.filter === 'all') {
                    return this.filteredJobs = this.jobs
                } else {
                    if (this.filter === 'starred') {
                        this.filterList(this.starred)
                    } else {
                        this.filterList(this.applied)
                    }
                }
            },
            filterList: function(array) {
                return this.filteredJobs = this.jobs.filter((job) => {
                    if (array.includes(job.id)) {
                        console.log(job.id)
                        return true;
                    } else {
                        return false;
                    }
                })
            }
        }
    }
)
