### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
### Answers of the following questions:
1. getElement means if anyone wants to call a element by using a id . Its also similar to getElementByClassName where one can call all the elements which includes class by using getElementByClassName. querySelector and querySelector are kind of similar . These has to be called with css selectors. the querySelector only returns the first appearance of the selected css selector and querySelectorAll returns all the appearance.
2. First i have to create a container which will contain my created element and will put it in a variable . For example i want to create a div . So after creating the container i have to make another variable where i will put the document.createElement("div") . Now we have empty div so i have to put some content inside it for that i will use innerHTML like newcreatedVariable.innerHTML=`<div><h1>Hello<h1></div>`.
After that i will append it to first created variable which i created to contain this new div .
3. Event Bubbling is when someone clicks something on the page like button or image whatever he clicks this event will first occur in that element. After that it will go up and up parent by parent until there is no parent just like it reached the root of a tree.
4. Event delegation is putting less event listener for small and same parent child instead put a single common event listener for all the who have common parents . Its very good for browser .It loads faster than all the other methods.It will perform better than other methods like travers.
5. preventDefault() stops the browser from reloading the page like in form if we dont put type=button in button then the browser will reload first. So if we dont want that we can use Prevent default. On the other hand stopPropagation() stops event from bubbling. For example ,if any clicks a button on a page it will bubble up to root parent but if we use stop propagation it will only target the button element and wont go up to its parent.