/**
 * jquery.dynamic-add-fields.js
 * @version: v0.1
 * @author: Maurício de Castro Pasquotto
 *
 *
 * Copyright (c) 2017 maupasquotto
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function ( $ ) {
 
    $.fn.modelToClone = function( opt ) {

    	// Settings
    	var settings = $.extend({
    		source: '',
    		target: '',
    		events: true,
    		deepEvents: true,
    		hideSource: true,
    		addClassToModel: '',
    		removeClassFromModel: '',
    		slideDirection: 'down',
    		triggerOnCreate: false,
    		event: 'click',
    		slideSpeed: 'fast',

    		// Add before/after something

    	}, opt);

    	//Check erros call
    	if (checkTargetSource(settings))
    		return 1;

    	//Hide source ?
    	if(settings.hideSource)
    		$(settings.source).hide();

    	//Check Erros Function
    	function checkTargetSource(settings){
	    	if($(settings.source).length == 0){
	    		console.log('-> ModelToClone: We couldn\'t find the source :(');
	    		return false;
	    	} else if($(settings.target).length == 0){
	    		console.log('-> ModelToClone: We couldn\'t find the target :(');
	    		return false;
	    	}
    	}

    	//Set event
    	this.on(settings.event, function(event) {
    		event.preventDefault();

    		//Copy the source
    		var model = $(settings.source).clone(settings.events, settings.deepEvents);
    		model.removeAttr('id');

    		//Check if there is classes to add
    		if(settings.addClassToModel != '')
    			model.addClass(settings.addClassToModel);
    		//Check if there is classes to remove
    		if(settings.removeClassFromModel != '')
    			model.removeClass(settings.removeClassFromModel);
    		
    		//Append
    		$(settings.target).append(model);
    		switch(settings.slideDirection) {
    			case 'down':
		    		model.slideDown(settings.slideSpeed);
    				break;
    			case 'up':
		    		model.slideUp(settings.slideSpeed);
    				break;
    			case 'right':
    				model.animate({width:'toggle'},settings.slideSpeed);
    				break;
    			case 'left':
    				model.css('float', 'right');
    				model.animate({width:'toggle'},settings.slideSpeed,function () {
    					model.css('float', '');
    				});
    				break;
    			default:
    				model.show();
    				break;
    		}

    	});

    	if(settings.triggerOnCreate)
    		this.trigger('click');
    };

}( jQuery ));