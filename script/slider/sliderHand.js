class SliderHand{
    containerImg = document.getElementById('test');
    containerImgCorredor = document.getElementById('container_corredor_img');
    timer;
    index = 0;

    prevButton = document.getElementById('prev-img')
        .addEventListener('click', () => {
            this.prevElement();
        }
    );

    nextButton = document.getElementById('next-img')
        .addEventListener('click', () => {
            this.nextElement();
        }
    );

    constructor(){
        this.img = [
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDY3NzJ8MHwxfHNlYXJjaHwzNnx8cm9vbSUyMGhvdGVsfGVufDB8fHx8MTY3Mzc5MjMzMg&ixlib=rb-4.0.3&q=80&",
            "https://images.unsplash.com/photo-1594563703937-fdc640497dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDY3NzJ8MHwxfHNlYXJjaHw1fHxyb29tJTIwaG90ZWx8ZW58MHx8fHwxNjczNzkxNzYx&ixlib=rb-4.0.3&q=80&",
            "https://images.unsplash.com/photo-1568495248636-6432b97bd949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDY3NzJ8MHwxfHNlYXJjaHwyMzR8fHJvb20lMjBob3RlbHxlbnwwfHx8fDE2NzM3OTMxNjk&ixlib=rb-4.0.3&q=80&"
        ]

        this.handleChange();
    }

    handleChange(){
        this.containerImg.src = this.img[this.index];
        this.containerImgCorredor.style.backgroundImage = `url(${this.img[this.index]})`
        this.index ++;
        this.handleTimeChange();
        if(this.index >= this.img.length) this.index = 0;
    }

    handleTimeChange(){
        this.timer = setTimeout( () => {
            this.handleChange();
        }, 4000)
    }

    prevElement(){
        this.index--;
        if(this.index <= 0) this.index = this.img.length - 1;
        this.restTime();
    }

    nextElement(){
        this.index++;
        if(this.index == this.img.length) this.index = 0;
        this.restTime();
    }

    restTime(){
        clearTimeout(this.timer);
        this.handleChange();
    }
}

new SliderHand;
