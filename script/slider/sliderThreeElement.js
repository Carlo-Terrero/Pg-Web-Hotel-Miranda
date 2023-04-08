class SliderthreeElement{

    containerImg = document.getElementById("img-carrucel");
    buttons = document.querySelectorAll(".btn-point");

    constructor(){
        this.img = [
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDY3NzJ8MHwxfHNlYXJjaHwzNnx8cm9vbSUyMGhvdGVsfGVufDB8fHx8MTY3Mzc5MjMzMg&ixlib=rb-4.0.3&q=80&w=400",
            "https://images.unsplash.com/photo-1594563703937-fdc640497dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDY3NzJ8MHwxfHNlYXJjaHw1fHxyb29tJTIwaG90ZWx8ZW58MHx8fHwxNjczNzkxNzYx&ixlib=rb-4.0.3&q=80&w=400",
            "https://images.unsplash.com/photo-1568495248636-6432b97bd949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDY3NzJ8MHwxfHNlYXJjaHwyMzR8fHJvb20lMjBob3RlbHxlbnwwfHx8fDE2NzM3OTMxNjk&ixlib=rb-4.0.3&q=80&w=400"
        ]

        this.index = 0;
        this.idTime;

        this.handlechange();

        // se puede hacer la logica aquí en vez de la función
        this.handleButtons();
    }

    handlechange(){
        const nImg = this.img.length;
    
        this.clearButton();
        
        this.positionImg(this.index);
        this.index++;
        this.handleTimer();
        if(this.index == nImg){ this.index = 0}
    }

    positionImg(positionElement){
        this.containerImg.src = this.img[positionElement];

        this.buttons[positionElement].classList.add('btn-selected');
    }

    handleTimer(){
        this.idTime = setTimeout(() => {
            this.handlechange()    
        }, 4000);
    }

    clearButton(){
        for(let i = 0; i < this.buttons.length ;i++ ){
            this.buttons[i].classList.remove('btn-selected');
        }
    }

    handleButtons(){
        for(let i = 0; i < this.buttons.length; i++){
            this.buttons[i].addEventListener('click', () => {
                this.index = i;
                clearTimeout(this.idTime);
                this.handlechange();
            })
        }
    }
}

new SliderthreeElement();