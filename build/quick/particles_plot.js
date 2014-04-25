define([
    "components/stage",
    "quick/base",
    "charts/particles",
    "utils/utils"
],function(Stage, Base, Particles, Utils){

    function ParticlesPlot(selection){
	selection.each(function(data){
	    var stage = new Stage(this);
	    stage.add(new Particles(data, options));
	    stage.render();
	});
    }

    ParticlesPlot.color = function(_){
	this.options.color = _;
	options = this.options;
	return this;
    }

    Utils.mixin(ParticlesPlot, Base);

    return ParticlesPlot;
});
