const app = new Vue(
    {
        el: '#app',
        data: {
            isLoad: false,
            counter: 0,
            pathImg: [
                'https://mammaioparto.com/wp-content/uploads/2020/04/mettere-il-soggetto-al-centro.jpg',
                'https://www.wallpapertip.com/wmimgs/9-97289_data-src-ultra-hd-nature-wallpapers-8k-resolution.jpg',
                'img/foto3.jpg',
                'https://ww.wallpapertip.com/wmimgs/9-97289_data-src-ultra-hd-nature-wallpapers-8k-resoluti.jpg',
            ],
            altImg: [
                'foto di ragazza al parco giochi',
                'foto computer messo sul tavolo',
                'foto vista mare',
                'foto inesistente'
            ],
        },
        mounted(){
            setInterval(() => this.nextCounter(), 3000);
            //Evento al click nella tastiera
            document.addEventListener('keyup', event => {
                //console.log(event);
                if(event.key === "ArrowRight"){
                    this.nextCounter();
                }else if(event.key === "ArrowLeft"){
                    this.previousCounter();
                }
            });
        },
        methods: {
            nextCounter: function(){
                this.isLoad = false;
                this.counter = ( this.counter === this.pathImg.length - 1 ) ? 0 : ++this.counter;
            },
            previousCounter: function(){
                this.isLoad = false;
                this.counter = (this.counter === 0) ? this.pathImg.length - 1 : --this.counter;
                
            },
            loaded: function(){
                this.isLoad = true;
            },
            changeCounter: function(value){
                //this.isLoad = false;
                this.counter = value;
            },
        }
    }
);