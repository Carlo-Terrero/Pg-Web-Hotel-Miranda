class SliderFacilities {

    features = document.querySelectorAll(".facilities-individual");
    index = 0;
    timer;
    
    constructor(){
        this.start();
        // this.handleFeature();
    }

    handleFeature(){
        this.timer = setTimeout(() => {
            this.handleChangeView();
            console.log('llamada aqui ', this.index)
        }, 1000);
    }

    start(){
        this.addFeature();

        this.handleFeature();
    }

    handleChangeView(){

        this.removeFeature();
        this.index++;

        // if(this.index == (this.features.length - 1)){  
        if(this.index == this.features.length){  
            this.index = 0;
            this.restTime();
            console.log(this.index);
            this.start();
            return;
        }

        this.addFeature();

        this.handleFeature();
    }

    removeFeature(){
        this.features[this.index].remove("view");
    }

    addFeature(){
        this.features[this.index].className = "view";
    }

    restTime(){
        clearTimeout(this.timer);
        // this.start();
    }
}

new SliderFacilities();