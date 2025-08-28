
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


1.Answer:
**getElementById*** = It's select as single element  of document based on it's unique ID atributes. And it returns a single element of document that acctualy a ID.

**getElementsByClassName** = Select all elements of document that have a specific same CLASSNAME. It's returns HTMLColectiuon and work like array but it's not an array though.
**querySelector** = Select the first element that matches a specified CSS Selector.This allows for flexible selection based on tag names, ID,Classes ex: #Id .class .
**querySelectorAll** = Selects all elements that match a specified CSS selector.Workas querySelector but its selects all elements at once

2. How do you **create and insert a new element into the DOM**?
Creating and inseeting a new element into the DOM using {document.creatElement()}.And then {appand} the created element to anexisting parent element.
<!-- here is my example and solution for the Assingment and it works like this   -->
<!-- let historyDiv = document.createElement("div");
       historyDiv.innerHTML =`
                    <div  class="bg-[#FAFAFA] p-4 rounded-lg flex justify-between items-center mb-3 shadow-md">
                    <div>
                        <h1 class="text-[18px] font-semibold text-[#111111]">${serviceName}</h1>
                        <span class="text-[18px] text-[#5C5C5C]">${serviceNumber}</span>
                    </div>
                    <p>${time}</p>

                </div>
       `;
       document.getElementById("history").appendChild(historyDiv).. -->

3. What is **Event Bubbling** and how does it work? = Event Bubbling is a default process of a DOM event ,like a click,first trigers on the most deeply nasted element of the DOM tree.
It's happens when an elements receievs an event and that event bubbles up to its parent,ancestor elements in  the DOM tree until it gets to the root element.
Event bubbling work as---Event Trigger,,Target Element,Bubling Up,Root Reached and Event Delegation also

4. What is **Event Delegation** in JavaScript? Why is it useful? = Event Delegation is a technique where a single event listener is attached to a parent element to manage event for multiples child elements..
Instead of attaching individual event listeners to each child  element a single listener is placed on a common ancestor.
Using properties like {event.target}, determines which specific child element initiated the event and handles it acordingly.
      It is usefull for 
      Improved performance and memory efficiency.
      Handling dynamically added content
      Simplified code and easier maintenance
      most helpful one is Reduce  DOM manipulations


5. What is the difference between **preventDefault() and stopPropagation()** methods?

 **preventDefault()** =
 This method prevents the default action associated with a specific event from accurring
 It work such as
 Preventing a form that submitting when a submit button is clicked
 Disabling  the default behavior of a checkbox when clicked

 **stopPropagation()****
 Usualy it used when we want to control the flow of the event through the DOM preventing it from reaching other elements in the hierarchy.


 on the otherside preventDefault() is when we want to stop the browser's default action for an event {form submition,link navigation }
that is the difference between preventDefault() and stopPropagation()**



