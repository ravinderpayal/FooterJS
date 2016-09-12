/*+++++++++++++++++++++++++++++++++++++++++++++++
+                                               +
+                                               +
+                                               +
+               (C)  April 2016                 +
+       Kwik.Social and Ravinder Payal          +
+                                               +
+                                               +
+                                               +
+++++++++++++++++++++++++++++++++++++++++++++++++
+                                               +
+               Any one Can Use                 +
+            This JAVASCRIPT class              +
+    By acknowledging  the creator of library   +
+                                               +
+++++++++++++++++++++++++++++++++++++++++++++++*/

 /****
  *   How to use?
  //  Very Simple
 // 	footer.init(document.getElementById("ID_OF_ELEMENT_CONTAINING_FOOTER"));
 */
 ;(function(window){
		'use strict';
		var footerOBJ = false;
		function $footer(){
				if(footerOBJ){
					return footerOBJ;
				}
				else {
					footerOBJ=new footer();
					return footerOBJ;
				}
			}
		function footer(){		
			}
		footer.prototype.init = function(a){/********* a->footerElement **********/
				this.footer = a;
				this.set();
				this.addEvents();
			}
		footer.prototype.reset = function(){
				window.removeEventListener("resize",this.onresize);				
			}
		footer.prototype.addEvents = function(){
				this.onresize = this.set.bind(this);
				window.addEventListener("resize",this.onresize);
		}
		footer.prototype.setScrolling = function(){
			this.footer.style.position="";
			this.footer.style.bottom="";
		}
		footer.prototype.setFixed = function(){
			this.footer.style.position="fixed";
			this.footer.style.bottom="0";
			}
		footer.prototype.set = function(){
				console.log(document.body.scrollHeight+"<------->"+window.innerHeight)
					this.setScrolling();					
				if(document.body.scrollHeight<=(window.innerHeight || window.clientHeight)){
					this.setFixed();
					}
				else{
					this.setScrolling();					
					}
			}
		window.footer = $footer;
})( window );
