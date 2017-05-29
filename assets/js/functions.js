$(function(){
    var SliderModule=(function(){
       var car={};
       car.element =$("#carrusel");
       car.items = {
            panel:car.element.find("li")
       }
        var SliderInterval,
            currentSlider =0,
            nextSlider=1,
            lengthSlider= car.items.panel.length;

       car.init =function(settings){
       	 this.settings = settings || {duration: 8000}
       	var salida=" ";
       	 SliderInit();

       	  for(var i = 0; i<lengthSlider; i++){
       	  	if (i==0) {
         salida += "<li class='active'></li>";
       	  	}else{
       	  		salida += "<li></li>";
       	  	}
       	  }

                 console.log(salida);

       	 $("#carrusel-control").html(salida).on("click","li",function(e){
            var $this= $(this);
             if(currentSlider!==$this.index()){
                 changePanel($this.index());
             };
       	 });
       }
       var SliderInit =function(){
           SliderInterval= setInterval(car.starSlider, car.settings.duration);
       }

           car.starSlider= function(){
           	 var panels = car.items.panel,
           	     controls =$("#carrusel-control li");
           	 if(nextSlider>=lengthSlider){
           	 	nextSlider=0;
           	 	currentSlider=lengthSlider-1;
           	 }
               controls.removeClass("active").eq(currentSlider).addClass("active");
               panels.eq(currentSlider).fadeOut("slow");
               panels.eq(nextSlider).fadeIn("slow");
           	 currentSlider=nextSlider;
           	 nextSlider+=1;
           }
           var changePanel = function(id) {
           	clearInterval(SliderInterval);
           	 var panels = car.items.panel,
           	     controls =$("#carrusel-control li");
           	 if(id>=lengthSlider){
           	 	id=0;
           	 }else if(id < 0){
           	 	id = lengthSlider-1;
           	 }
           	   controls.removeClass("active").eq(id).addClass("active");
               panels.eq(currentSlider).fadeOut("slow");
               panels.eq(id).fadeIn("slow");

              currentSlider= id;
              nextSlider=id+1;
              SliderInit();
           }

       return car;
    }());
    SliderModule.init();
});