// homework 1 javascript file
// defining a glbal array to store data
// 2d array
  var storedata = [];
  
  for (var i=0;i<10;i++) 
   {
     storedata[i] = [];
   }

 //var noofusers=[0,0,0,0,0,0,0,0,0,0];
  var arrayofusers=[0,0,0,0,0,0,0,0,0,0];
  var reportarrayone=[0,0,0,0,0,0,0,0,];
  var reportarraytwo=[0,0,0,0,0,0,0,0,0];
  
  var usercount=0;
  var checktostore= 1;
  
  var checksecond=[];
 
  for (var i=0;i<10;i++)
   {
      checksecond[i] = [];
   }
 
  var checkforsecond=1;
  var e=0;
//function validating the account name 
 function myaccnamevalid(x)
  {

	  var val = x.value.trim();
	  var check=/[^a-zA-z 0-9]/;
	  var check1=/^[^a-zA-z]/;
	  var check2 = /[0-9]/;
	   
		   if(x.value.match(check))
		    {  
		   	   //checking for special character
		       document.getElementById("aclabel").style.visibility= "visible";
		       document.getElementById("aclabel").innerHTML= " Invalid: Use Alpha-Numeric.";
		       document.getElementById("aclabel").style.display= "block";

		    }
		   else if (x.value.match(check1))
		    {
		      
		       //checking for first digit to be aplhabet
		       document.getElementById("aclabel").style.visibility= "visible";
		       document.getElementById("aclabel").innerHTML= "Invalid: Use Alpha-Numeric.";
		       document.getElementById("aclabel").style.display= "block";
 
		    }
		   else if(!(x.value))
		    {     
		         //checking whether the field is empty
		        document.getElementById("aclabel").style.visibility= "visible";
		        document.getElementById("aclabel").innerHTML= "Field cannot be blank";
		        document.getElementById("aclabel").style.display= "block";

		    }
		   else if( (val.length < 0) && (val.length) >9 )
		    {
		        document.getElementById("aclabel").style.visibility= "visible";
		        document.getElementById("aclabel").innerHTML= "Invalid:length should be (0-9).";
		        document.getElementById("aclabel").style.display= "block";  
		    }
		   else if(x.value.match(check2))
		    {    
		         document.getElementById("aclabel").style.display= "none";

		    }
		   else
		    {
		       document.getElementById("aclabel").style.visibility= "visible";
		       document.getElementById("aclabel").innerHTML= "Invalid: Use Alpha-Numeric.";
		       document.getElementById("aclabel").style.display= "block";

		    }
  }

 function mypasswordvalid(x)
  {

     var val= x.value.trim(); 
     var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
   
			if(!(x.value))
			 {	   //checking whether the field is empty
			 	   document.getElementById("passlabel").style.visibility= "visible";
	        	   document.getElementById("passlabel").innerHTML= "Field cannot be blank";
	               document.getElementById("passlabel").style.display= "block";	

			 }
            else if( (val.length < 0) && (val.length) >7 )
             {
                   document.getElementById("aclabel").style.visibility= "visible";
                   document.getElementById("aclabel").innerHTML= "Invalid:length should be (0-7 ).";
                   document.getElementById("aclabel").style.display= "block";

             }
			else if(x.value.match(passw))
			 {
                  //checking for password
                   document.getElementById("passlabel").style.display= "none";

			 }
            else
             {
                   document.getElementById("passlabel").style.visibility= "visible";
	        	   document.getElementById("passlabel").innerHTML= "Invalid: Use Alpha-Numeric & one Spcl Char,Upper & Lower case Letter";
	               document.getElementById("passlabel").style.display= "block";
             }				 	
  }



 function myfirstnamevalid(x)
  {

	 var val=x.value.trim();
	 var firstname=/[^a-zA-z]/


	       if(!(x.value))
	        {
		          //checking whether the field is empty
		          document.getElementById("firstlabel").style.visibility= "visible";
		          document.getElementById("firstlabel").innerHTML= "Field cannot be blank";
		          document.getElementById("firstlabel").style.display= "block";

	         }
	        else if( (val.length < 0) && (val.length) >10 )
	         {
	              document.getElementById("aclabel").style.visibility= "visible";
	              document.getElementById("aclabel").innerHTML= "Invalid:length should be (0-10).";
	              document.getElementById("aclabel").style.display= "block"; 

	         }
	        else if(x.value.match(firstname))
		     {  
	              document.getElementById("firstlabel").style.visibility= "visible";
	              document.getElementById("firstlabel").innerHTML= "Invalid: Use only Alphabets.";
	              document.getElementById("firstlabel").style.display= "block";

		     }
		    else
		     {
	 		      document.getElementById("firstlabel").style.display= "none";
		     }   
   }



 function mylastnamevalid(x)
  {

	 var val=x.value.trim();
	 var lastname=/[^a-zA-z]/


         if(!(x.value))
          {
		        //checking whether the field is empty
		        document.getElementById("lastlabel").style.visibility= "visible";
		        document.getElementById("lastlabel").innerHTML= "Field cannot be blank";
		        document.getElementById("lastlabel").style.display= "block";

          }
         else if( (val.length < 0) && (val.length) >10)
          {
	           document.getElementById("aclabel").style.visibility= "visible";
	           document.getElementById("aclabel").innerHTML= "Invalid:length should be (0-10).";
	           document.getElementById("aclabel").style.display= "block";  
          }
	     else if(x.value.match(lastname))
	     {      
               document.getElementById("lastlabel").style.visibility= "visible";
               document.getElementById("lastlabel").innerHTML= "Invalid: Use only Alphabets.";
               document.getElementById("lastlabel").style.display= "block";
	     }
	    else
	     {

               document.getElementById("lastlabel").style.display= "none";
	     }
 }

 function myemailvalid(x)
  {
   
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
	      if( re.test(x.value))
	       {
	           document.getElementById("emaillabel").style.display= "none";

	       }
	      else
	       {
	            document.getElementById("emaillabel").style.visibility= "visible";
	            document.getElementById("emaillabel").innerHTML= "Enter a valid Elmail Address";
	            document.getElementById("emaillabel").style.display= "block";

	       }
  }


 function myphonevalid(x)
  {
     var val=x.value.trim();
     var phone=/[^0-9]/;

     
	       if(!(x.value))
	        {
				   //checking whether the field is empty
				   document.getElementById("phonelabel").style.visibility= "visible";
				   document.getElementById("phonelabel").innerHTML= "Field cannot be blank";
				   document.getElementById("phonelabel").style.display= "block";

	        }
	       else if( (val.length < 0) && (val.length) >10 )
	        {
		           document.getElementById("aclabel").style.visibility= "visible";
		           document.getElementById("aclabel").innerHTML= "Invalid:length should be (0-10).";
		           document.getElementById("aclabel").style.display= "block";  
	        }
	       else if(x.value.match(phone))
		     {
		            document.getElementById("phonelabel").style.visibility= "visible";
		            document.getElementById("phonelabel").innerHTML= "Invalid: Use Numeric only.";
		            document.getElementById("phonelabel").style.display= "block";   

		     }
		     else
		     {
		     	       document.getElementById("phonelabel").style.display= "none"; 
		     }
  }

 function validatebirth()
  {

      var e = document.getElementById("months");
      var f = document.getElementById("days");
      var g =document.getElementById("years");
      var month = e.options[e.selectedIndex].value;
      var days = f.options[f.selectedIndex].value;
      var year = g.options[g.selectedIndex].value;
      var month1 = e.options[e.selectedIndex].text;
          
          if(month==0 || days==0 || year ==0)
           {
                   document.getElementById("birthlabel").style.visibility= "visible";
                   document.getElementById("birthlabel").innerHTML= "Field cannot be blank";
                   document.getElementById("birthlabel").style.display= "block";
                   
                   checktostore=0;
           }
          else
           {
                   document.getElementById("birthlabel").style.display= "none";
                   
                   checktostore=1;
           }

           validatecountry();
   }



 function myaddressvalid(x)
  {
       var val=x.value.trim();


	         if(!(x.value))
	        {
					//checking whether the field is empty
					document.getElementById("addlabel").style.visibility= "visible";
					document.getElementById("addlabel").innerHTML= "Field cannot be blank";
					document.getElementById("addlabel").style.display= "block";

	        }
	        else if( (val.length < 0) && (val.length) >20 )
	        {
		           document.getElementById("aclabel").style.visibility= "visible";
		           document.getElementById("aclabel").innerHTML= "Invalid:length should be (0-20).";
		           document.getElementById("aclabel").style.display= "block";

	       }
	        else
	        {
	 			   document.getElementById("addlabel").style.display= "none";

	        }

   }


 function mycityvalid(x)
  {
        var val=x.value.trim();
        var city=/^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/;
           

            if(!(x.value))
             {
				   //checking whether the field is empty
				   document.getElementById("citylabel").style.visibility= "visible";
				   document.getElementById("citylabel").innerHTML= "Field cannot be blank.";
				   document.getElementById("citylabel").style.display= "block";

             }
            else if(x.value.match(city))
             {
                  document.getElementById("citylabel").style.display= "none";

             } 
            else
             {           
             	   document.getElementById("citylabel").style.visibility= "visible";
				   document.getElementById("citylabel").innerHTML= "Invalid: Use Alphabets and Space Between Separate Words.";
				   document.getElementById("citylabel").style.display= "block";
            	  
             }
  }




 function myzipcodevalid(x)
  {
     var val=x.value.trim();
     var zip=/[^0-9]/;

     
	       if(!(x.value))
	        {
				 //checking whether the field is empty
			     document.getElementById("ziplabel").style.visibility= "visible";
			     document.getElementById("ziplabel").innerHTML= "Field cannot be blank";
				 document.getElementById("ziplabel").style.display= "block";

	        }
	       else if( (val.length <0) && (val.length) >5 )
	        {
		           document.getElementById("aclabel").style.visibility= "visible";
		           document.getElementById("aclabel").innerHTML= "Invalid:length should be (0-5).";
		           document.getElementById("aclabel").style.display= "block";

	        }
	       else if(x.value.match(zip))
		    {
		          document.getElementById("ziplabel").style.visibility= "visible";
		          document.getElementById("ziplabel").innerHTML= "Invalid:Use Numerals.";
		          document.getElementById("ziplabel").style.display= "block";   

		    }
		   else
		    {
		     	  document.getElementById("ziplabel").style.display= "none"; 
		    }
 }


 function validatecountry()
  {
 
      var e = document.getElementById("country");
      var country = e.options[e.selectedIndex].value;
      var country1 = e.options[e.selectedIndex].text;
          
          if(country==0)
           {
                  document.getElementById("countrylabel").style.visibility= "visible";
                  document.getElementById("countrylabel").innerHTML= "Field cannot be blank";
                  document.getElementById("countrylabel").style.display= "block";
                 
                  checktostore=0;
           }
          else
           {
                 document.getElementById("countrylabel").style.display= "none";
                 
                 checktostore=1;
           }

          validatecheckboxone();
 }

 function validatecheckboxone()
  {
       
       var rb7= document.extras.hear;
       var rb8= document.extras.offer;
      
       var heararray=[0,0,0];
       var offerarray=[0,0,0];
       
       var x=0;
       var y=0;
          
           for( var z=0; z < rb7.length; z++)
            {
                   if( rb7[z].checked)
                    {
                          x=1;
                    }

                   if(rb8[z].checked)
                    {
                         y=1;

                    }
            }

           if((x==1) && (y==1))
            {
                checktostore=1;
            }
           else
            {
                  checktostore=0;  
            }
 }

 function validatesecond()
  {


      // saving the second form
      var rb1= document.foodopt.food; 
      var rb2= document.foodopt.spicy;
      var rb3= document.foodopt.drink;
      var rb4= document.foodopt.rate;
      var rb5= document.foodopt.side;
      var rb6= document.foodopt.addon;
      
      var sideorder=[0,0,0];
      var addonorder=[0,0,0]; 
               
         for( var i=0; i< rb4.length; i++)
          {      

              if(i<3)
               {
                    if( (rb2[i].checked) && (i<3))
                     {
                          checksecond[usercount][1]= 1;

                     }

                    if ((rb5[i].checked) && (i<3))
                     {
                           checksecond[usercount][2]=1;
                     }

                    if ((rb6[i].checked) && (i<3))
                     {
                          checksecond[usercount][3]=1;
                     }
                                  
               }

             if(i<4)
              {
                   
                   if( (rb1[i].checked) && (i<4)) 
                     {
                         checksecond[usercount][0] = 1;

                     }

                                 
                                
                   if((rb3[i].checked) && (i<4))
                    {

                         checksecond[usercount][4]=1;
                    }

              }  

                   

             if(rb4[i].checked)
              {     
                  
                   checksecond[usercount][6]=1;            
                         
              }          

          }
          
         if(document.foodopt.specialmsg.value)
          {
             checksecond[usercount][5]=1;
          }  


          var foodyselect = document.foodsel.appet.options; 
          var drinkerselect = document.foodsel.sod.options;

          for(var x= 0 ; x < foodyselect.length; x++ )
           {  
                
              if( foodyselect[x].selected)
               { 
                      checksecond[usercount][7]=1;

               }

              if(drinkerselect[x].selected)
               {  
                     checksecond[usercount][8]=1;
 
               }

           }         
          
          var k=0;
          
          for(var j =0; j < 9; j++)
           {
               if(checksecond[usercount][j]==1)
                {
                   k++;
                }    
           }

          if(k==9)
           {
             	checkforsecond=1;
           }
          else
          {
                checkforsecond=0;
          }
    }

 function dynamicfood()
  {
   
       var rb= document.foodopt.food;
       var check = "appetizer"
       var  check1 = "pasta";
       var  check2  = "burgersandwiches"
       var  check3  = "dessert";
       
  
          // getting the value of the radio button
          for( var i=0; i< rb.length; i++)
           {
	             if(rb[i].checked)
	             {
	                  var save=rb[i].value;
	                   
	             }
           }
      
   
           // comparing the value and making necessary changes
    
    
           var parent = document.getElementById("appetizer");
           var child = parent.firstChild;

           while(child)
            {
                  parent.removeChild(child);
                  child = parent.firstChild; 

            }

               if(save == check)
               { 
                      // adding the option one
                      var option1 = document.createElement("option");
                      var node1 = document.createTextNode("Appetizer");
                      option1.name= "option1";
                      option1.value="app";
                      option1.setAttribute('onClick','detailappetizer()');
                      //alert(option1.onClick);
                      option1.appendChild(node1);
                      parent.appendChild(option1);
                      
                      // adding the option two 
                      var option2 = document.createElement("option");
                      var node2 = document.createTextNode("Hummus Pita & Veggie");
                      option2.name= "option1";
                      option2.value="hummus";
                      option2.setAttribute('onClick','detailappetizer()');
                      option2.appendChild(node2);
                      parent.appendChild(option2);

                      // adding the option three 
                      var option3 = document.createElement("option");
                      var node3 = document.createTextNode("Party Wings");
                      option3.name= "option1";
                      option3.value="party";
                      option3.setAttribute('onClick','detailappetizer()');
                      option3.appendChild(node3);
                      parent.appendChild(option3);

                      // adding the option four 
                      var option4 = document.createElement("option");
                      var node4 = document.createTextNode("Chicken Fingers");
                      option4.name= "option1";
                      option4.value="chick";
                      option4.setAttribute('onClick','detailappetizer()');
                      option4.appendChild(node4);
                      parent.appendChild(option4);

                      // adding the option two 
                      var option5 = document.createElement("option");
                      var node5 = document.createTextNode("Chili Cheese Fries");
                      option5.name= "option1";
                      option5.value="chili";
                      option5.setAttribute('onClick','detailappetizer()');
                      option5.appendChild(node5);
                      parent.appendChild(option5);

               }
               else if( save == check1)
               {
                      // adding the option one
                      var option1 = document.createElement("option");
                      var node1 = document.createTextNode("Pasta");
                      option1.name= "option1";
                      option1.value="pasta";
                      option1.setAttribute('onClick','detailpasta()');
                      option1.appendChild(node1);
                      parent.appendChild(option1);
                      
                      // adding the option two 
                      var option2 = document.createElement("option");
                      var node2 = document.createTextNode("Pesto Chicken Penne");
                      option2.name= "option1";
                      option2.value="pesto";
                      option2.setAttribute('onClick','detailpasta()');
                      option2.appendChild(node2);
                      parent.appendChild(option2);

                      // adding the option three 
                      var option3 = document.createElement("option");
                      var node3 = document.createTextNode("Chicken Jambalaya Pasta");
                      option3.name= "option1";
                      option3.value="jambalaya";
                      option3.setAttribute('onClick','detailpasta()');
                      option3.appendChild(node3);
                      parent.appendChild(option3);

                      // adding the option four 
                      var option4 = document.createElement("option");
                      var node4 = document.createTextNode("Fresh Tomato, Sausage, and Pecorino Pasta");
                      option4.name= "option1";
                      option4.value="pecorino";
                      option4.setAttribute('onClick','detailpasta()');
                      option4.appendChild(node4);
                      parent.appendChild(option4);

                      // adding the option two 
                      var option5 = document.createElement("option");
                      var node5 = document.createTextNode("Mediterranean Orzo Salad with Feta Vinaigrette");
                      option5.name= "option1";
                      option5.value="feta";
                      option5.setAttribute('onClick','detailpasta()');
                      option5.appendChild(node5);
                      parent.appendChild(option5);


               } 
               else if(save == check2)
               {   
                     // adding the option one
                      var option1 = document.createElement("option");
                      var node1 = document.createTextNode("Burger & Sandwiches");
                      option1.name= "option1";
                      option1.value="burgersandwiches";
                      option1.setAttribute('onClick','detailburger()');
                      option1.appendChild(node1);
                      parent.appendChild(option1);
                      
                      // adding the option two 
                      var option2 = document.createElement("option");
                      var node2 = document.createTextNode("Tukey Burger");
                      option2.name= "option1";
                      option2.value="turkey";
                      option2.setAttribute('onClick','detailburger()');
                      option2.appendChild(node2);
                      parent.appendChild(option2);

                      // adding the option three 
                      var option3 = document.createElement("option");
                      var node3 = document.createTextNode("Frisco Burger");
                      option3.name= "option1";
                      option3.value="frisco";
                      option3.setAttribute('onClick','detailburger()');
                      option3.appendChild(node3);
                      parent.appendChild(option3);

                      // adding the option four 
                      var option4 = document.createElement("option");
                      var node4 = document.createTextNode("Grilled Fish Sandwich");
                      option4.name= "option1";
                      option4.value="fish";
                      option4.setAttribute('onClick','detailburger()');
                      option4.appendChild(node4);
                      parent.appendChild(option4);

                      // adding the option two 
                      var option5 = document.createElement("option");
                      var node5 = document.createTextNode("SC Chicken Club");
                      option5.name= "option1";
                      option5.value="club";
                      option5.setAttribute('onClick','detailburger()');
                      option5.appendChild(node5);
                      parent.appendChild(option5);
                    
 
               }
               else
               {  
                      // adding the option one
                      var option1 = document.createElement("option");
                      var node1 = document.createTextNode("Desserts");
                      option1.name= "option1";
                      option1.value="dessert";
                      option1.setAttribute('onClick','detaildessert()');
                      option1.appendChild(node1);
                      parent.appendChild(option1);
                      
                      // adding the option two 
                      var option2 = document.createElement("option");
                      var node2 = document.createTextNode("Belgian Waffles with Winter White Honey");
                      option2.name= "option1";
                      option2.value="belgium";
                      option2.setAttribute('onClick','detaildessert()');
                      option2.appendChild(node2);
                      parent.appendChild(option2);

                      // adding the option three 
                      var option3 = document.createElement("option");
                      var node3 = document.createTextNode("Strawberry Crepes with Chocolate Merlot Fudge Sauce");
                      option3.name= "option1";
                      option3.value="strawberry";
                      option3.setAttribute('onClick','detaildessert()');
                      option3.appendChild(node3);
                      parent.appendChild(option3);

                      // adding the option four 
                      var option4 = document.createElement("option");
                      var node4 = document.createTextNode("Brownie Ice Cream with Chocolate Sea Salt");
                      option4.name= "option1";
                      option4.value="brownie";
                      option4.setAttribute('onClick','detaildessert()');
                      option4.appendChild(node4);
                      parent.appendChild(option4);

                      // adding the option two 
                      var option5 = document.createElement("option");
                      var node5 = document.createTextNode("Maple Brûlée Oatmeal with Cherry Vanilla Crumbles");
                      option5.name= "option1";
                      option5.value="maple";
                      option5.setAttribute('onClick','detaildessert()');
                      option5.appendChild(node5);
                      parent.appendChild(option5);

               }
        
     

}


function dynamicdrink(){
   
   var rb= document.foodopt.drink;
    var check = "soda"
   var  check1 = "cocktail";
   var  check2  = "mocktail"
   var  check3  = "wine";
   
  
   // getting the value of the radio button
         for( var i=0; i< rb.length; i++)
         {
             if(rb[i].checked)
             {
                   var save=rb[i].value;
                   
             }
         }
      
   
  // comparing the value and making necessary changes
    
    
              
          
               var parent = document.getElementById("soda");
               var child = parent.firstChild;

               while(child)
               {
                     parent.removeChild(child);
                     child = parent.firstChild; 

               }

               if(save == check)
               { 
                      // adding the option one
                      var option1 = document.createElement("option");
                      var node1 = document.createTextNode("Soda");
                      option1.name= "option2";
                      option1.value="soda";
                      option1.setAttribute('onClick','detailsoda()');
                      option1.appendChild(node1);
                      parent.appendChild(option1);
                      
                      // adding the option two 
                      var option2 = document.createElement("option");
                      var node2 = document.createTextNode("Coke");
                      option2.name= "option2";
                      option2.value="coke";
                      option2.setAttribute('onClick','detailsoda()');
                      option2.appendChild(node2);
                      parent.appendChild(option2);

                      // adding the option three 
                      var option3 = document.createElement("option");
                      var node3 = document.createTextNode("Pepsi");
                      option3.name= "option2";
                      option3.value="pepsi";
                      option3.setAttribute('onClick','detailsoda()');
                      option3.appendChild(node3);
                      parent.appendChild(option3);

                      // adding the option four 
                      var option4 = document.createElement("option");
                      var node4 = document.createTextNode("Coke Zero");
                      option4.name= "option2";
                      option4.value="cokez";
                      option4.setAttribute('onClick','detailsoda()');
                      option4.appendChild(node4);
                      parent.appendChild(option4);

                      // adding the option two 
                      var option5 = document.createElement("option");
                      var node5 = document.createTextNode("Miranda");
                      option5.name= "option2";
                      option5.value="miranda";
                      option5.setAttribute('onClick','detailsoda()');
                      option5.appendChild(node5);
                      parent.appendChild(option5);

               }
               else if( save == check1)
               {
                      // adding the option one
                      var option1 = document.createElement("option");
                      var node1 = document.createTextNode("Cocktail");
                      option1.name= "option2";
                      option1.value="cocktail";
                      option1.setAttribute('onClick','detailcocktail()');
                      option1.appendChild(node1);
                      parent.appendChild(option1);
                      
                      // adding the option two 
                      var option2 = document.createElement("option");
                      var node2 = document.createTextNode("Amaretto Sour");
                      option2.name= "option2";
                      option2.value="amaretto";
                      option2.setAttribute('onClick','detailcocktail()');
                      option2.appendChild(node2);
                      parent.appendChild(option2);

                      // adding the option three 
                      var option3 = document.createElement("option");
                      var node3 = document.createTextNode("Treme");
                      option3.name= "option2";
                      option3.value="treme";
                      option3.setAttribute('onClick','detailcocktail()');
                      option3.appendChild(node3);
                      parent.appendChild(option3);

                      // adding the option four 
                      var option4 = document.createElement("option");
                      var node4 = document.createTextNode("Tropical Sunset");
                      option4.name= "option2";
                      option4.value="tropical";
                      option4.setAttribute('onClick','detailcocktail()');
                      option4.appendChild(node4);
                      parent.appendChild(option4);

                      // adding the option two 
                      var option5 = document.createElement("option");
                      var node5 = document.createTextNode("VeeV Holiday Highballs");
                      option5.name= "option2";
                      option5.value="holiday";
                      option5.setAttribute('onClick','detailcocktail()');
                      option5.appendChild(node5);
                      parent.appendChild(option5);


               } 
               else if(save == check2)
               {   
                     // adding the option one
                      var option1 = document.createElement("option");
                      var node1 = document.createTextNode("Mocktail");
                      option1.name= "option2";
                      option1.value="mocktail";
                      option1.setAttribute('onClick','detailmocktail()');
                      option1.appendChild(node1);
                      parent.appendChild(option1);
                      
                      // adding the option two 
                      var option2 = document.createElement("option");
                      var node2 = document.createTextNode("Cran-Dandy Cooler");
                      option2.name= "option2";
                      option2.value="cran";
                      option2.setAttribute('onClick','detailmocktail()');
                      option2.appendChild(node2);
                      parent.appendChild(option2);

                      // adding the option three 
                      var option3 = document.createElement("option");
                      var node3 = document.createTextNode("Tropical Cooler Smoothie");
                      option3.name= "option2";
                      option3.value="smoothie";
                      option3.setAttribute('onClick','detailmocktail()');
                      option3.appendChild(node3);
                      parent.appendChild(option3);

                      // adding the option four 
                      var option4 = document.createElement("option");
                      var node4 = document.createTextNode("Candy Cane Cooler");
                      option4.name= "option2";
                      option4.value="cane";
                      option4.setAttribute('onClick','detailmocktail()');
                      option4.appendChild(node4);
                      parent.appendChild(option4);

                      // adding the option two 
                      var option5 = document.createElement("option");
                      var node5 = document.createTextNode("Peach Cooler");
                      option5.name= "option2";
                      option5.value="peach";
                      option5.setAttribute('onClick','detailmocktail()');
                      option5.appendChild(node5);
                      parent.appendChild(option5);
                    
 
               }
               else
               {  
                      // adding the option one
                      var option1 = document.createElement("option");
                      var node1 = document.createTextNode("Wine");
                      option1.name= "option2";
                      option1.value="wine";
                      option1.setAttribute('onClick','detailwine()');
                      option1.appendChild(node1);
                      parent.appendChild(option1);
                      
                      // adding the option two 
                      var option2 = document.createElement("option");
                      var node2 = document.createTextNode("Chateau Guiraud Sauternes 2005");
                      option2.name= "option2";
                      option2.value="cheateu";
                      option2.setAttribute('onClick','detailwine()');
                      option2.appendChild(node2);
                      parent.appendChild(option2);

                      // adding the option three 
                      var option3 = document.createElement("option");
                      var node3 = document.createTextNode("Vasse Felix Heytesbury Chardonnay 2011");
                      option3.name= "option2";
                      option3.value="chardonnay";
                      option3.setAttribute('onClick','detailwine()');
                      option3.appendChild(node3);
                      parent.appendChild(option3);

                      // adding the option four 
                      var option4 = document.createElement("option");
                      var node4 = document.createTextNode("Smith Woodhouse Vintage Port 2011");
                      option4.name= "option2";
                      option4.value="port";
                      option4.setAttribute('onClick','detailwine()');
                      option4.appendChild(node4);
                      parent.appendChild(option4);

                      // adding the option two 
                      var option5 = document.createElement("option");
                      var node5 = document.createTextNode("Chapoutier and Laughton Cluster M45 Shiraz 2010");
                      option5.name= "option2";
                      option5.value="shiraz";
                      option5.setAttribute('onClick','detailwine()');
                      option5.appendChild(node5);
                      parent.appendChild(option5);

               }
        

     
}


function detailappetizer(){
       
      var sel= document.foodsel.appet.options;
      var select="hummus";
      var select1="party";
      var select2="chick";
      var select3="chili";
      var select4="app";
      var parent = document.getElementById("foodtext");
      
      for( var i= 0 ; i< sel.length ; i++)
      {

             if(sel[i].selected)
             {  
                 
                   // have to do everything inside the loop dont forget

                    var save = sel[i].value;
                    if( save == select4)
                    {
                         	 parent.innerHTML = "";

                    }
                    else if( save == select)
                    {   
	                        // hummus is selected
	                        parent.innerHTML = "";
	                        parent.innerHTML = "Creamy Hummus, Olive Oil served with warmed Pita bread and Veggies.";

                    }
                    else if(save == select1)
                    {
	                         // party is selected
	                        parent.innerHTML = "";
	                        parent.innerHTML = "BBQ or Spicy served with Ranch dressing.";


                    }
                    else if(save == select2)
                    {
	                          // chick is selected
	                        parent.innerHTML = "";
	                        parent.innerHTML = "served with Fries and Ranch dressing.";

                    }
                    else
                    {    
	                       // chili is selected 
	                        parent.innerHTML = "";
	                        parent.innerHTML = "topped with Chili, Cheese and Sour cream.";

                    }


             }



      }


}

 function detailpasta(){

      var sel= document.foodsel.appet.options;
      var select="pesto";
      var select1="jambalaya";
      var select2="pecorino";
      var select3="feta";
      var select4="pasta"
      var parent = document.getElementById("foodtext");

      for( var i= 0 ; i< sel.length ; i++)
      {

             if(sel[i].selected)
             {
                 
                   // have to do everything inside the loop dont forget

                    var save = sel[i].value;
                  
                   if( save == select4)
                    {
                          	parent.innerHTML = "";

                    }
                    else if( save == select)
                    {   
	                        // hummus is selected
	                        parent.innerHTML = "";
	                        parent.innerHTML = "Chicken Breast, Sun dried Tomatoes, Spinach, Mushroom, Garlic, Basil tossed in Pesto Cream.";

                    }
                    else if(save == select1)
                    {
	                         // party is selected
	                        parent.innerHTML = "";
	                        parent.innerHTML = "Chicken Breast, Andouille Sausage, Garlic, Green onions tossed in Spicy Cajun Sauce.";


                    }
                    else if(save == select2)
                    {
	                          // chick is selected
	                        parent.innerHTML = "";
	                        parent.innerHTML = "Ripe tomatoes,fresh tomato sauce to top sweet Italian sausage and penne pasta.";



                    }
                    else
                    {    
	                        // chili is selected 
	                        parent.innerHTML = "";
	                        parent.innerHTML = "Red onions, artichoke hearts, feta cheese, and kalamata olives all add fresh brininess to the salad.";

                    }


             }



      }



}


function detailburger(){

      var sel= document.foodsel.appet.options;
      var select="turkey";
      var select1="frisco";
      var select2="fish";
      var select3="club";
      var select4 ="burgersandwiches"
      var parent = document.getElementById("foodtext");

      for( var i= 0 ; i< sel.length ; i++)
      {

             if(sel[i].selected)
             {
                 
                   // have to do everything inside the loop dont forget

                    var save = sel[i].value;
                    if( save == select4)
                    {
                         	 parent.innerHTML = "";

                    }
                    else if( save == select)
                    {   
	                        // hummus is selected
	                        parent.innerHTML = "";
	                        parent.innerHTML = "1/3 pounder, pickle, tomatoes, lettuce & a special sauce on wheat bun.";

                    }
                    else if(save == select1)
                    {
	                         // party is selected
	                        parent.innerHTML = "";
	                        parent.innerHTML = "all beef patty, swisss cheese, cheddar cheese , grilled onions and special sauce on a toasted sour bread.";


                    }
                    else if(save == select2)
                    {
	                          // chick is selected
	                        parent.innerHTML = "";
	                        parent.innerHTML = "Bell paper, lettuce , tomatoes, onions and special sauce with white flat bread.";

                    }
                    else
                    {    
	                       // chili is selected 
	                        parent.innerHTML = "";
	                        parent.innerHTML = "Char Boiled Chicken Breast, avocado, bacon, swiss cheese with sour bread.";

                    }


             }



      }



}


function detaildessert(){

      var sel= document.foodsel.appet.options;
      var select="belgium";
      var select1="strawberry";
      var select2="brownie";
      var select3="maple";
      var select4= "dessert"
      var parent = document.getElementById("foodtext");

      for( var i= 0 ; i< sel.length ; i++)
      {

             if(sel[i].selected)
             {
                 
                   // have to do everything inside the loop dont forget

                    var save = sel[i].value;

                    if( save == select4)
                    {
                          parent.innerHTML = "";

                    }
                    else if( save == select)
                    {   
                        // hummus is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "4 Belgian waffles, Winter White Honey sprinkled with powdered Sugar.";

                    }
                    else if(save == select1)
                    {
                         // party is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "sweet strawberries and rich chocolate wine sauce wraaped with Crepes.";


                    }
                    else if(save == select2)
                    {
                          // chick is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "4 large brownies, warmed, 2 cups vanilla ice cream sprinkled with Chocolate Sea Salt.";



                    }
                    else
                    {    
                       // chili is selected 
                        parent.innerHTML = "";
                        parent.innerHTML = "4 packages maple flavored instant oatmeal served over vanilla icecream.";

                    }


             }



      }



}

function detailsoda(){

      var sel= document.foodsel.sod.options;
      var select="coke";
      var select1="pepsi";
      var select2="cokez";
      var select3="miranda";
      var select4="soda"
      var parent = document.getElementById("drinktext");

      for( var i= 0 ; i< sel.length ; i++)
      {

             if(sel[i].selected)
             {
                 
                   // have to do everything inside the loop dont forget

                    var save = sel[i].value;
                    if( save == select4)
                    {
                          parent.innerHTML = "";

                    }
                    else if( save == select)
                    {   
                        // hummus is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "Plain Coco-Cola drink.";

                    }
                    else if(save == select1)
                    {
                         // party is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "Plain Pepsi drink.";


                    }
                    else if(save == select2)
                    {
                          // chick is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "Plain Coke Zero drink.";



                    }
                    else
                    {    
                       // chili is selected 
                        parent.innerHTML = "";
                        parent.innerHTML = "Plain Miranda drink.";

                    }


             }



      }



}

function detailcocktail(){

      var sel= document.foodsel.sod.options;
      var select="amaretto";
      var select1="treme";
      var select2="tropical";
      var select3="holiday";
      var select4="cocktail"
      var parent = document.getElementById("drinktext");

      for( var i= 0 ; i< sel.length ; i++)
      {

             if(sel[i].selected)
             {
                 
                   // have to do everything inside the loop dont forget

                    var save = sel[i].value;
                    if( save == select4)
                    {
                          parent.innerHTML = "";

                    }
                    else if( save == select)
                    {   
                        // hummus is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "1.5 oz Amaretto,.75 oz Cask-proof bourbon,1 oz Lemon juice.";

                    }
                    else if(save == select1)
                    {
                         // party is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "2 oz Organic cucumber vodka, 2.5 oz Pureed watermelon, .5 oz Fresh lime juice and 1 pinch Truvia.";


                    }
                    else if(save == select2)
                    {
                          // chick is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "1.5 oz  Van Gogh Pineapple Vodka,1 oz Van Gogh Coconut Vodka,2 oz Pineapple Juice and Splash of Grenadine.";



                    }
                    else
                    {    
                       // chili is selected 
                        parent.innerHTML = "";
                        parent.innerHTML = "2 oz VeeV Açaí Spirit, .25 oz Green Chartreuse, 3 oz Sparkling apple or pear cider.";

                    }


             }



      }



}


function detailmocktail(){

      var sel= document.foodsel.sod.options;
      var select="cran";
      var select1="smoothie";
      var select2="cane";
      var select3="peach";
      var select4="mocktail"
      var parent = document.getElementById("drinktext");

      for( var i= 0 ; i< sel.length ; i++)
      {

             if(sel[i].selected)
             {
                 
                   // have to do everything inside the loop dont forget

                    var save = sel[i].value;
                    if( save == select4)
                    {
                          parent.innerHTML = "";

                    }
                    else if( save == select)
                    {   
                        // hummus is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "Cranberry juice, Pineapple juice, Orange juice, jar maraschino cherries, lemon juice, can or bottle ginger ale.";

                    }
                    else if(save == select1)
                    {
                         // party is selected
                         parent.innerHTML = "";
                         parent.innerHTML = "orange juice,2 cups pineapple chunks, 1 banana, coarsely chopped, 1/4 cup skim milk, 2 tablespoons honey.";

                    }
                    else if(save == select2)
                    {
                          // chick is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "3 scoops vanilla ice cream, 1/2 cups milk, 1 candy cane.";
                    }
                    else
                    {    
                       // chili is selected 
                        parent.innerHTML = "";
                        parent.innerHTML = "1 lemon-lime flavored carbonated beverage, 2 canned peach halves, 1 teaspoon fresh lemon juice,2 scoops vanilla ice cream.";

                    }


             }



      }



}


function detailwine(){

      var sel= document.foodsel.sod.options;
      var select="cheateu";
      var select1="chardonnay";
      var select2="port";
      var select3="shiraz";
      var select4="wine"
      var parent = document.getElementById("drinktext");

      for( var i= 0 ; i< sel.length ; i++)
      {

             if(sel[i].selected)
             {
                 
                   // have to do everything inside the loop dont forget

                    var save = sel[i].value;
                    if( save == select4)
                    {
                          parent.innerHTML = "";

                    }
                    else if( save == select)
                    {   
                        // hummus is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "Typical of the huge power of Guiraud, this is one of the richest Sauternes in 2005.";

                    }
                    else if(save == select1)
                    {
                         // party is selected
                         parent.innerHTML = "";
                         parent.innerHTML = "The 2011 Heytesbury Chardonnay displays coy, youthfully mute aromas of white peach, orange blossom.";

                    }
                    else if(save == select2)
                    {
                          // chick is selected
                        parent.innerHTML = "";
                        parent.innerHTML = "the 2011 Smith Woodhouse, which is founded at Quinta da Madalena, has a broody but intense bouquet of blackberry, kirsch and slight resinous note.";
                    }
                    else
                    {    
                       // chili is selected 
                        parent.innerHTML = "";
                        parent.innerHTML = "Taut, focused and vivid, with cinnamon-accented cherry and licorice flavors, impressively refined and harmonious through the finish.";

                    }


             }



      }



}


function moveforwardone(){
        //validating birthdate and counry
         validatebirth();  // it calls validate country
        
        // first i check it is a go to store and then store it.
        if(checktostore == 1)
        {
                  // black out container 1
                  var back1= document.getElementById("container1");
                  back1.style.display= "none";
                  // bring container 1 into picture
                  var back = document.getElementById("container2");
                  back.style.display = "block";

                  

                  
                        // it was a go and we will store the first form
                        storedata[usercount][0] = document.information.accountname.value;
                        storedata[usercount][1] = document.information.password.value;
                        storedata[usercount][2] = document.information.firstname.value;
                        storedata[usercount][3] = document.information.lastname.value;
                        storedata[usercount][4] = document.information.email.value;
                        storedata[usercount][5] = document.information.phone.value;
                        storedata[usercount][6] = document.information.month.value;
                        storedata[usercount][7] = document.information.day.value;
                        storedata[usercount][8] = document.information.year.value;
                        // loop for radio buttons 
                         var rb = document.information.sex;
                         for( var i=0; i < rb.length; i++)
                           {
                               if(rb[i].checked)
                               {
                                     storedata[usercount][9]=rb[i].value;
                                     
                               }
                           }
                         // loop over
                         storedata[usercount][10] = document.information.address.value;
                         storedata[usercount][11] = document.information.city.value;
                         storedata[usercount][12] = document.information.zipcode.value;
                         storedata[usercount][13] = document.information.countries.value;
                          //adding the extra checkboxes
                         var rb7= document.extras.hear;
                         var rb8= document.extras.offer;
                         var heararray=[0,0,0];
                         var offerarray=[0,0,0];
                         
                         for( var z=0; z < rb7.length; z++)
                         {
                              if( rb7[z].checked)
                              {
                                        heararray[z]= rb7[z].value;
                              }

                              if(rb8[z].checked)
                              {
                                     offerarray[z]= rb8[z].value;

                              }


                         } 

                         storedata[usercount][14]= heararray;
                         storedata[usercount][15]= offerarray;

                        
                         //alert(storedata);
                         // reseting thr second page
                         foodopt.reset();
                         foodsel.reset();

        }

}

function movebacksecond(){
        // first validate and then move ahead.
        validatesecond();

       if(checkforsecond == 1)
       {
                  // black out container 2 
                  var back = document.getElementById("container2");
                  back.style.display = "none";
                  // bring container 1 into picture
                  var back1= document.getElementById("container1");
                  back1.style.display= "block";
                  

                  // saving the second form
                   var rb1= document.foodopt.food; 
                   var rb2= document.foodopt.spicy;
                   var rb3= document.foodopt.drink;
                   var rb4= document.foodopt.rate;
                   var rb5= document.foodopt.side;
                   var rb6= document.foodopt.addon;
                   var sideorder=[0,0,0];
                   var addonorder=[0,0,0]; 
                   
                   for( var i=0; i< rb4.length; i++)
                      {      

                            if(i<3)
                             {

                                            if( (rb2[i].checked) && (i<3))
                                           {
                                                storedata[usercount][17] = rb2[i].value;

                                           }

                                           if ((rb5[i].checked) && (i<3))
                                             {
                                                   sideorder[i] = rb5[i].value;
                                             }

                                            if ((rb6[i].checked) && (i<3))
                                           {
                                                 addonorder[i] = rb6[i].value;
                                           }
           
                              }

                              if(i<4)
                              {
                                          if( (rb1[i].checked) && (i<4)) 
                                           {
                                              storedata[usercount][16] = rb1[i].value;

                                           }

                                           
                                          
                                           if((rb3[i].checked) && (i<4))
                                           {

                                               storedata[usercount][18] = rb3[i].value;
                                           }

                              }  

                             

                             if(rb4[i].checked)
                             {     
                            
                                   storedata[usercount][19]= rb4[i].value;
                                   
                                   
                             }
                            
                           



                      }
                    
                     storedata[usercount][20] = document.foodopt.specialmsg.value;
                     storedata[usercount][21] = sideorder;
                     storedata[usercount][22] = addonorder;
                     // alert(storedata);


                     // saving the form -right side
                   var foodselect=[0,0,0,0,0];
                   var drinkselect=[0,0,0,0,0];
                   
                   var foodyselect = document.foodsel.appet.options; 
                   var drinkerselect = document.foodsel.sod.options;

                   for(var x= 0 ; x < foodyselect.length; x++ )
                   {  
                        if( foodyselect[x].selected)
                        { 
                             foodselect[x]= foodyselect[x].value
                        }

                        if(drinkerselect[x].selected)
                        {  
                           drinkselect[x]= drinkerselect[x].value;
 
                        }

                   }

                     storedata[usercount][23]= foodselect;
                     storedata[usercount][24]= drinkselect; 
                    
                   // noofusers[usercount]=storedata;
                    usercount++;

                 
                  // reseting the form1
                  information.reset();
                  extras.reset();
       }
       else
       {
           alert("please fill in the Entire Detail.");
       }


}


function moveforwardtwo(){
     // first validate and then move ahead.
     validatesecond(); 

     if( checkforsecond == 1)
      {          // black out container 2 
                var back = document.getElementById("container2");
                back.style.display = "none";
                // bring container 3 into picture
                var back1= document.getElementById("container3");
                back1.style.display= "block";

                 
                 // saving the second form -left side
                 var rb1= document.foodopt.food; 
                 var rb2= document.foodopt.spicy;
                 var rb3= document.foodopt.drink;
                 var rb4= document.foodopt.rate;
                 var rb5= document.foodopt.side;
                 var rb6= document.foodopt.addon;
                 var sideorder=[0,0,0];
                 var addonorder=[0,0,0]; 
                 for( var i=0; i< rb4.length; i++)
                    {      

                          if(i<3)
                           {

                                          if( (rb2[i].checked) && (i<3))
                                         {
                                              storedata[usercount][17] = rb2[i].value;

                                         }

                                         if ((rb5[i].checked) && (i<3))
                                           {
                                                 sideorder[i] = rb5[i].value;
                                           }

                                          if ((rb6[i].checked) && (i<3))
                                         {
                                               addonorder[i] = rb6[i].value;
                                         }
         
                            }

                            if(i<4)
                            {
                                        if( (rb1[i].checked) && (i<4)) 
                                         {
                                            storedata[usercount][16] = rb1[i].value;

                                         }

                                         
                                        
                                         if((rb3[i].checked) && (i<4))
                                         {

                                             storedata[usercount][18] = rb3[i].value;
                                         }

                            }  

                           

                           if(rb4[i].checked)
                           {     
                          
                                 storedata[usercount][19]= rb4[i].value;
                                 
                                 
                           }
                          
                         



                    }
                  
                   storedata[usercount][20] = document.foodopt.specialmsg.value;
                   storedata[usercount][21] = sideorder;
                   storedata[usercount][22] = addonorder;

                   // saving the form -right side
                   var foodselect=[0,0,0,0,0];
                   var drinkselect=[0,0,0,0,0];
                   
                   var foodyselect = document.foodsel.appet.options; 
                   var drinkerselect = document.foodsel.sod.options;

                   for(var x= 0 ; x < foodyselect.length; x++ )
                   {  
                        if( foodyselect[x].selected)
                        { 
                             foodselect[x]= foodyselect[x].value
                        }

                        if(drinkerselect[x].selected)
                        {  
                           drinkselect[x]= drinkerselect[x].value;
 
                        }

                   }

                     storedata[usercount][23]= foodselect;
                     storedata[usercount][24]= drinkselect; 
                     
                    //noofusers[usercount]=storedata;
                    usercount++;
               
                   // alert(storedata);
                   reportone();

      }
      else
      {
            alert("please fill the Entire detail.")

      }


}

function movebackthree(){

          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 2 into picture
          var back = document.getElementById("container1");
          back.style.display = "block";

          // resetting the form 2 left and right side both
          information.reset();
          foodopt.reset();
          foodsel.reset();
          extras.reset();

}

//1st customer
function moveforwardthree1(){
         
          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 4 into picture
          var back = document.getElementById("container4");
          back.style.display = "block";
         // alert("iamhere1");

          reporttwo(0);


}
// 2nd customer
function moveforwardthree2(){
         
          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 4 into picture
          var back = document.getElementById("container4");
          back.style.display = "block";

          // alert("iamhere");
          reporttwo(1);


}
//3rd


function moveforwardthree3(){
         
          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 4 into picture
          var back = document.getElementById("container4");
          back.style.display = "block";


          reporttwo(2);


}
//4th
function moveforwardthree4(){
         
          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 4 into picture
          var back = document.getElementById("container4");
          back.style.display = "block";


          reporttwo(3);


}
//5th
function moveforwardthree5(){
         
          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 4 into picture
          var back = document.getElementById("container4");
          back.style.display = "block";


          reporttwo(4);


}
//6th
function moveforwardthree6(){
         
          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 4 into picture
          var back = document.getElementById("container4");
          back.style.display = "block";
         // alert("iamhere1");

          reporttwo(5);
}

//7th
function moveforwardthree7(){
         
          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 4 into picture
          var back = document.getElementById("container4");
          back.style.display = "block";
         // alert("iamhere1");

          reporttwo(6);
}

//8th
function moveforwardthree8(){
         
          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 4 into picture
          var back = document.getElementById("container4");
          back.style.display = "block";
         // alert("iamhere1");

          reporttwo(7);

}
//9th
function moveforwardthree9(){
         
          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 4 into picture
          var back = document.getElementById("container4");
          back.style.display = "block";
         // alert("iamhere1");

          reporttwo(8);

}
//10th
function moveforwardthree10(){
         
          // black out container 3
          var back1= document.getElementById("container3");
          back1.style.display= "none";
          // bring container 4 into picture
          var back = document.getElementById("container4");
          back.style.display = "block";
         // alert("iamhere1");

          reporttwo(9);

}


function movebackfour(){

        // black out container 4 
        var back = document.getElementById("container4");
        back.style.display = "none";
        // bring container 3 into picture
        var back1= document.getElementById("container3");
        back1.style.display= "block";
        
        // reportone();

}


function reportone(){

        
       
       var parent = document.getElementById("myTable");
       var parent1= document.getElementById("report1");  
                    
                    if(e< usercount)
                    {        var temp= storedata[e];
                             var row = parent.insertRow( (e+1) );

                             reportarrayone[0]= " " + temp[0]+ " , " + temp[1];
                             var cell1 = row.insertCell(0);
                             cell1.innerHTML = reportarrayone[0];

                             reportarrayone[1]= " " + temp[2] + " " + temp[3];
                             var cell2 = row.insertCell(1);
                             cell2.innerHTML = reportarrayone[1];

                             reportarrayone[2]= " " + temp[4];
                             var cell3 = row.insertCell(2);
                             cell3.innerHTML = reportarrayone[2];

                             reportarrayone[3]= " " + temp[5];
                             var cell4 = row.insertCell(3);
                             cell4.innerHTML = reportarrayone[3];

                             reportarrayone[4]=" " + temp[6]+"/" + temp[7] +"/" + temp[8];
                             var cell5 = row.insertCell(4);
                             cell5.innerHTML = reportarrayone[4];

                             reportarrayone[5]=" " + temp[9];
                             var cell6 = row.insertCell(5);
                             cell6.innerHTML = reportarrayone[5];


                             reportarrayone[6]= " " + temp[10]+" , "+temp[11]+ " , " + temp[12] +" , " + temp[13];
                             var cell7 = row.insertCell(6);
                             cell7.innerHTML = reportarrayone[6];
                             
                             // removing redundant spaces
                              var y = temp[14];
                              var z = temp[15]; 
                              array1=[];
                              array2=[];
                              for( var x =0 ; x < 3; x++)
                              { 
                                 if(y[x] != 0 )
                                  {
                                      array1[x]= y[x];
                                  }  
                                  if(z[x] !=0)
                                  {
                                      array2[x] = z[x];
                                  }   

                              }
                             
                             reportarrayone[7]=array1 +" & "+ array2;
                             var cell8 = row.insertCell(7);
                             cell8.innerHTML = reportarrayone[7];
                           
                             // inserting a button to move forward for every user
                             // var cell9 = row.insertCell(8);
                             // cell9.innerHTML = "<input type='button' value='back' onclick='movebackthree()' >";
                             var z=e+1;
                             var cell9 = row.insertCell(8);
                             cell9.innerHTML = "<input type='button' value='order details' onclick='moveforwardthree"+z+"()' >";
                           
                            if(e==0)
                            {
                                  
                                  var button12= document.createElement("input");
                                  button12.id="rep";
                                  button12.type="button";
                                  button12.value="back<-";
                                  button12.style.marginLeft="50px";
                                  button12.setAttribute('onClick','movebackthree()');
                                  parent1.appendChild(button12);

                            }
                            else
                            {     
                                  var child=document.getElementById("rep");
                                  parent1.removeChild(child);
                                  var button12= document.createElement("input");
                                  button12.id="rep";
                                  button12.type="button";
                                  button12.value="back<-";
                                  button12.style.marginLeft="50px";
                                  button12.setAttribute('onClick','movebackthree()');
                                  parent1.appendChild(button12);


                            }

                            e++;
                            // alert(z);
                            

                   }
}


function reporttwo(x){

           var number =x;
           var report2= document.getElementById("report2");
           report2.innerHTML="";

           var temp1=storedata[number];


           //adding the customer's name
                var customername= temp1[2] + " " + temp1[3]

                  var header = document.createElement("h1")
                  var node = document.createTextNode(customername);
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  var br= document.createElement("br");
                  report2.appendChild(br);

           if(temp1[16] == "appetizer")
           {
                  //creating header
                  var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Appetizer");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);

                  // appetizer  example begins here
                   var temp4 = temp1[23];

                  if(temp4[1] == "hummus")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Hummus Pita & Veggie.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }
                  if( temp4[2] == "party")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Party Wings.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }
                  
                  if( temp4[3] == "chick")
                  {    
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Chicken Fingers.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                         
                  }
                  if( temp4[4] == "chili")
                  {    
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Chili Cheese Fries.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          
                  }




           }
           else if(temp1[16] == "pasta")
           {
                 //creating header
                  var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Pasta");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);

                    var temp4 = temp1[23];
                   if(temp4[1] == "pesto")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Pesto Chicken Penne.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }
                  if( temp4[2] == "jambalaya")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Chicken Jambalaya Pasta.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                        

                  }
                  
                  if( temp4[3] == "pecorino")
                  {    
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Fresh Tomato, Sausage, and Pecorino Pasta.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                      

                  }
                  if( temp4[4] == "feta")
                  {    
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Mediterranean Orzo Salad with Feta Vinaigrette.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                        

                  }





           }
           else if(temp1[16] == "burgersandwiches")
           {
                 //creating header
                  var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Burger & Sandwiches");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);

                    var temp4 = temp1[23];
                   if(temp4[1] == "turkey")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Tukey Burger.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          
                  }
                  if( temp4[2] == "frisco")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Frisco Burger.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }
                  
                  if( temp4[3] == "fish")
                  {    
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Grilled Fish Sandwich.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }
                  if( temp4[4] == "club")
                  {    
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Sc Chicken Club.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                         
                  }



           }
           else if(temp1[16] == "dessert")
           {
                  //creating header
                  var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Dessert");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);


                   var temp4 = temp1[23];
                   if(temp4[1] == "belgium")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Belgian Waffles with Winter White Honey.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }
                  if( temp4[2] == "strawberry")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Strawberry Crepes with Chocolate Merlot Fudge Sauce.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }
                  
                  if( temp4[3] == "brownie")
                  {    
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Brownie Ice Cream with Chocolate Sea Salt.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }

                  if( temp4[4] == "maple")
                  {    
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Oatmeal with Cherry Vanilla Crumbles.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }



           }


           //creating header for Spicyness
                  var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Spicy");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);

                  // checking what kind of spicy 
                  if( temp1[17] == "very")
                  {
                        var para = document.createElement("p");
                        var node = document.createTextNode(" -Customer wants it very spicy.");
                        para.style.color ="red";
                        header.size="20px"; 
                        para.appendChild(node);
                        report2.appendChild(para);
                        // adding hr tag
                        
                  }
                  else if(temp1[17] == "medium")
                  {
                        var para = document.createElement("p");
                        var node = document.createTextNode(" -Customer wants it medium spicy.");
                        para.style.color ="red";
                        header.size="20px"; 
                        para.appendChild(node);
                        report2.appendChild(para);
                        // adding hr tag
                        


                  }
                  else if( temp1[17] == "notspicy")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer doesn't  spicy at all.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                         

                  }
             

                  // header for the sides------
                  var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Side");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);

                  // taking side in a temperory array
                  var temp2 = temp1[21];

                  if(temp2[0] == "fries")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for fries as a side.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }
                  if( temp2[1] == "onion")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Onion Strings as a side.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                         

                  }
                  
                  if( temp2[2] == "garden")
                  {    
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Garden Salad as a side.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                         

                  }
               // sides are over

                // header for the Add-on------
                  var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Add-On");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);

                  // taking side in a temperory array
                  var temp3 = temp1[22];

                  if(temp3[0] == "cheese")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Extra Cheese as a side.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                        
                  }
                  if( temp3[1] == "avocado")
                  {
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Avocado as a side.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                          

                  }
                  
                  if( temp3[2] =="Guacamole")
                  {    
                          var para = document.createElement("p");
                          var node = document.createTextNode(" -Customer has asked for Guacamole as a side.");
                          para.style.color ="red";
                          header.size="20px"; 
                          para.appendChild(node);
                          report2.appendChild(para);
                          // adding hr tag
                         

                  }
               // add-ons are over


               // drinks begin
               if(temp1[18] =="soda")
               {
                        //creating header
                        var br= document.createElement("br");
                       report2.appendChild(br);
                        var header = document.createElement("h1")
                        var node = document.createTextNode("Soda");
                        header.style.color ="white";
                        header.size="30px"; 
                        header.appendChild(node);
                        report2.appendChild(header);
                        // adding hr tag
                        var hr= document.createElement("hr");
                        hr.style.color = "white";
                        report2.appendChild(hr);

                            var temp5 = temp1[24];
                           if(temp5[1] == "coke")
                          {
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Coke.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  
                          }
                          if( temp5[2] == "pepsi")
                          {
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Pepsi.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  

                          }
                          
                          if( temp5[3] == "cokez")
                          {    
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Coke Zero.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                 
                          }

                          if( temp5[4] == "miranda")
                          {    
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Miranda.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  
                          }




           }
           else if(temp1[18] == "cocktail")
           {
                 //creating header
                 var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Cocktail");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);

                    var temp5 = temp1[24];
                           if(temp5[1] == "amaretto")
                          {
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Amaretto Sour.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                 
                          }
                          if( temp5[2] == "treme")
                          {
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Treme.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  
                          }
                          
                          if( temp5[3] == "tropical")
                          {    
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Tropical Sunset.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  
                          }

                          if( temp5[4] == "holiday")
                          {    
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for VeeV Tropical Holiday.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  
                          }


           }
           else if(temp1[18] == "mocktail")
           {
                 //creating header
                 var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Mocktail");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);

                           var temp5 = temp1[24];
                           if(temp5[1] == "cran")
                          {
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Cran-Dandy Coole.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  
                          }
                          if( temp5[2] == "smoothie")
                          {
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Tropical Cooler Smoothie.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  

                          }
                          
                          if( temp5[3] == "cane")
                          {    
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Candy Cane Cooler.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                 

                          }

                          if( temp5[4] == "peach")
                          {    
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for VeeV Peach Cooler.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  
                          }





           }
           else if(temp1[18] == "wine")
           {
                  //creating header
                  var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Wine");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);

                     var temp5 = temp1[24];
                           if(temp5[1] == "cheateu")
                          {
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Chateau Guiraud Sauternes 2005.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  

                          }
                          if( temp5[2] == "chardonnay")
                          {
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Vasse Felix Heytesbury Chardonnay 2011.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  

                          }
                          
                          if( temp5[3] == "port")
                          {    
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Smith Woodhouse Vintage Port 2011.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  
                          }

                          if( temp5[4] == "shiraz")
                          {    
                                  var para = document.createElement("p");
                                  var node = document.createTextNode(" -Customer has asked for Chapoutier and Laughton Cluster M45 Shiraz 2010.");
                                  para.style.color ="red";
                                  header.size="20px"; 
                                  para.appendChild(node);
                                  report2.appendChild(para);
                                  // adding hr tag
                                  
                          }




           }

           // drinks ends here



           //Special message by the customer begins here
                 var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Special Message From the Cutomer.");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);
                   var para = document.createElement("p");
                   var node = document.createTextNode(" -"+ temp1[20]);
                   para.style.color ="red";
                   header.size="20px"; 
                   para.appendChild(node);
                   report2.appendChild(para);
                          // adding hr tag
                   



              // rating begins here
                  var br= document.createElement("br");
                  report2.appendChild(br);
                  var header = document.createElement("h1")
                  var node = document.createTextNode("Rating given by the Customer.");
                  header.style.color ="white";
                  header.size="30px"; 
                  header.appendChild(node);
                  report2.appendChild(header);
                  // adding hr tag
                  var hr= document.createElement("hr");
                  hr.style.color = "white";
                  report2.appendChild(hr);
                   var para = document.createElement("p");
                   var node = document.createTextNode(" -"+ temp1[19]);
                   para.style.color ="red";
                   header.size="20px"; 
                   para.appendChild(node);
                   report2.appendChild(para);
                          // adding hr tag
                   
              // rating ends here


              // providing a back button
              // report2.innerHTML= "<input type='button' value='back<-' onclick='movebackfour()' >";
              var button12= document.createElement("input");
              button12.type="button";
              button12.value="back<-";
              button12.setAttribute('onClick','movebackfour()');
              report2.appendChild(button12);


}








