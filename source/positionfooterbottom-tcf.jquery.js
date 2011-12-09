/*
 *******************************************************************************
 *
 * positionfooterbottom-tcf
 *
 * Part of the tcf package (The Code Foundry Ltd)
 *
 *******************************************************************************
 *
 * This simple plugin makes sure your footer is at the bottom of the page. This
 * is useful if you have a large (wide) footer that looks odd when not at the
 * bottom of the screen on low content pages. Doesn't do anything if the footer
 * element is already at the bottom
 *
 *******************************************************************************
 *
 * Intructions: https://github.com/TheCodeFoundry/positionfooterbottom-tcf
 * By: Ben at The Code Foundry Ltd, ben@ben-griffiths.com
 * Version: 1.0.0
 * Updated: December 9th, 2011
 *
 * Dependencies:
 *
 * None.
 *
 *******************************************************************************
 *
 * Licensed under The MIT License (MIT)
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2011 The Code Foundry Ltd (mail@thecodefoundryltd.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 *******************************************************************************
 */
(function($)
{
	$.fn.positionfooterbottom_tcf = function(options)
	{
		var theFooter = this;
		
		var footerHeight = theFooter.height();
		var footerWidth  = theFooter.width();
		
		var windowHeight = $(window).height();
		var windowWidth  = $(window).width();
		
		var footerPosition = theFooter.position();
		
		if(windowHeight - (footerPosition.top + footerHeight) > 0)
		{
			theFooter.offset({ top: (windowHeight - footerHeight) });
		}
	};
})(jQuery);