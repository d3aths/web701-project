# Milestone 2 - Evaluation

## Report of web frameworks

Web Application Framework or simply “web framework” is a software framework that is designed to support the development of web applications including web services, web resources, and web APIs. Frameworks are, in short, libraries that help you develop your application faster and smarter. (GeeksforGeeks, 2020).  
To expand on that in other words, a web framework is a skeleton structure that you can install in your code editor, that comes with everything premade that you need to get a functional website up and running in minutes. You can easily create your own pages and routing structure, and easily integrate the backend of your choice to your project. This is almost a necessity when creating a website, as you don't have to spend hours making everything from scratch and dealing with possible errors in your code, cause with a framework it's all already there for you to expand upon.

Some features of frameworks are security, efficiency, free of cost, support documentation. The larger the community around the framework, the easier it will be for you to get support, tutorials, keep your code and website secure as vulnerabilities will be identified and patched quickly, and of course frameworks are open source so they're not locked behind any kind of costs. Frameworks offer a clean organisation system for the functionality of the website.

In this project I use Angular and React's components, file creation structure, authentication services (such as logging in/registering/roles). In the MERN stack i'm using bootstrap for CSS framework, and also the Redux library for state management.

## Work Grid

#### Notes on test accounts
**MERN stack (this repo)**  
- login with admin@no.com pass "no" for admin access  
- login with prov@no.com pass "no" for provider access (though currently its no different than registering any new user)  
- OR create new account yourself  

**MEAN stack ([located here](https://github.com/d3aths/happyfamilyfriends))**
- create any new account as access is public and roles, while working, only have empty content to differentiate them

### Mern
MERN stack is a fast and easy Javascript stack that's comprised of MongoDB, Express, React, NodeJs. These technologies work together to build a web application. React is an open source javascript library used to build a web interface made up of modular components, and is good for lightweight websites that only have a couple of pages, or mobile apps. It's touted for its high performance

### Mean
MEAN stack uses MongoDB, Express, Angular, and NodeJs. The differences here is only the language and layout of the frontend of the website. Angular is a javascript framework, and is often considered to have a steep learning curve compared with other front ends. It's written with Typescript and is more scaleable which means you can build high power websites with it.

### Comparison Table
| Req | MEAN | MERN | Comparison | 
|--|--|--|--|
| Register | ![image](https://user-images.githubusercontent.com/16113944/169180263-5a17d400-ee92-40ae-988c-0a472df17ee9.png) | ![image](https://user-images.githubusercontent.com/16113944/169180752-6bb01cc7-5668-4217-8d15-605b8539c43f.png) <br> ![image](https://user-images.githubusercontent.com/16113944/169181554-62dd88c5-6499-4ffb-89f2-d717a59c7dbe.png) | The difference between these two is fairly complex. Because of the amount of other packages my React build is using, it complicates the process compared to the Angular version. React hooks into to a lot of other components and relies on them to function, whereas angular is fairly standalone, just uses it's own auth service. |
| Login | ![image](https://user-images.githubusercontent.com/16113944/169180470-1de3a60c-ccc0-4678-b3a6-dd76f4096ad0.png) | ![image](https://user-images.githubusercontent.com/16113944/169181305-6f79d866-a7d9-4c21-8627-b5d5f184e578.png) <br> ![image](https://user-images.githubusercontent.com/16113944/169181398-095deaf4-8f20-444b-b402-dd125509b091.png) | You can tell from having to upload two seperate images how much more complicated the React is set up to be. There is a lot of functions that are seperately structured and imported to be used on different pages. The login and register pages both call functions from elsewhere and do their validating from there opposed to having it built in on the same page that just uses one singular auth service on Angular. |
| Administer own account | ![image](https://user-images.githubusercontent.com/16113944/169182124-2d3ea5f4-f8b8-40d5-8d05-7edb9fcd2cc2.png) <br> ![image](https://user-images.githubusercontent.com/16113944/169182478-1dab85c3-bddf-4fbe-8da2-252577157e0d.png) | ![image](https://user-images.githubusercontent.com/16113944/169184458-8cf8a00e-04f8-4e5e-b996-0ed4c7ad1f3f.png) | The code I have on Angular right now is just a snippet from the add-service component, which is the creation of a service by a provider. As of writing this documentation, the function is public, but as per the requirements this will later be moved to the 'provider-board' so that only users with that role can access it. The second image shows the edit and delete operations on a service, which will later be updated to only admins and providers being able to use. On react, I have shown an example of the create service code. You can see it includes authorisation for roles, meaning only  users with the authorised token have access to these operations. Other CRUD operations are very similar, and much the same as the previous register and login screens, the screen for creating, editing, and listing all hooks into the list of actions |
| Store and retrieve data from server | ![image](https://user-images.githubusercontent.com/16113944/169185868-95aec906-9a0d-46a0-995f-04ceed5a432b.png)  <br> ![image](https://user-images.githubusercontent.com/16113944/169185930-1c24ce7d-7a34-4850-b349-2bf265b7f151.png) | ![image](https://user-images.githubusercontent.com/16113944/169186209-d776fdb8-d174-469d-bf6d-a0e3092b9adf.png) | The angular API calls for users and services can all be found on one page, whereas the React ones are mucch more complex and have a few hundred lines of code for handling each collection (user, service). It is hard to capture it all so I used one screenshot as an example that includes the API route. It is more complex because it uses with Axios and Redux, whereas the angular one is again, self contained. All the methods you can find in both repostories work with postman and changes are reflected in my mongoDB collection. |
| User roles have access levels | ![image](https://user-images.githubusercontent.com/16113944/169186804-a25ddf9b-9bfd-445d-bb15-6e9975b28bdb.png) | ![image](https://user-images.githubusercontent.com/16113944/169187189-2e6ebfea-bd11-4b17-b4be-949cd5b9c860.png) | Showing the Angular homepage header that has different options viewable only if the user has been assigned a certain role, and an API call that links to the React ServiceList screen with authorisation coded into it. You can see from the code that creating a service will fail if the user does not have the correct auth token. Any service related function on React is using the same type of code to manage it. I could achieve this in Angular by moving any service related activities to the provider only board, and any user related activities to the admin only board, while regular users would only be able to see a list of services they can sign up for. |

I undertook a lot more work on this project than expected. At first I was using a MERN stack for milestone 1, having coded a short amount to get the requirements I needed. However that was not scaleable at all so I had to redo the whole thing with something new. For this milestone, we had to compare two frameworks so chose MEAN to go alongside MERN. I was faced with a lot of problems and errors that took me quite a while to debug and fix to get a working application. By this point, I did not have much functionality and quite a few of the systems are missing, such as the user tokens and trasaction system. Each repo includes a short to do list of things that I would have liked to have done/need to do but didn't have the time before needing to hand this milestone in.

While the work I did with Angular was not complex, it took a decent amount of time based on what I previously stated about fixing problems. For React, the opposite holds true. I did not encounter much problems with it, but it is very much more complex and required a LOT more files and features than Angular.

![image](https://user-images.githubusercontent.com/16113944/169191664-0ee87c78-e4f1-4911-98a5-db383ccf3887.png)  
*React project hierarchy*

![image](https://user-images.githubusercontent.com/16113944/169191859-1a390326-9023-40e4-ab2c-1d7e264caa54.png)  
*Angular hierarchy (each folder only contains one component)*

```
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Service from '../components/Service'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ServiceCarousel from '../components/ServiceCarousel'
import Meta from '../components/Meta'
import { listServices } from '../actions/serviceActions'
```   
*An example of all the imports most pages in my React repo had. And then those imports would go on to call other imports on their respective pages*

Because of the structure of React importing modules from here there and everywhere, and those modules also importing modules, if just one thing had an error or wasn't called properly, it affects the whole chain. It relies on everything else to be perfect otherwise the website will not render and cause errors.

## Conclusion

Lets take a look at pros and cons of each framework. I won't be basing this on the general features and experiences of the frameworks that the internet will tell you, but based on personal experience and thoughts that I have made by working on each one with regards to this specific project's purposes.

**Angular**
| Pros | Cons |
|---|---|
| -Lightweight<br>-Easy to create components with terminal commands<br>-Once created, components are already structured with code template<br>-Pages are only linked to a few components<br>-Easy to understand while not familiar with the language<br>-Basic file structure<br>-Integrates much easier with express backend | -Hard to use without referring to a tutorial that gives the SPECIFIC code examples you need<br>-I dont know typescript<br>-I'm useless without borrowing someone elses code<br>-Can't actually find that many up to date and relative tutorials for it |



**React**
| Pros | Cons |
|---|---|
| -Familiar with this from previous years<br>-Have a few resources already I can pull code from<br>-Lots of functionality that I know how to access | -Very complicated layout that is hard to figure out what is going on with<br>-Confusing<br>-Will take a lot more work to complete<br>-Feels super bloated<br>-The third party packages installed make it 1000x more complex which makes it way harder |

Comparing the advantages and disadvantages for them is very telling, considering the cons for React. While there isn't many of them, the weight of the cons would make it very difficult for me to continue using. Going forwards in the project I would love to keep using Angular to build the final version with, but thinking on the future with Angular it might be impossible for me to find the resources for the functionality I need, whereas with React I have a lot of the code already in the project that just isn't implemented properly yet, and I believe I could find a way to finish the requirements with it. So it is with a heavy heart that I unfortunately recommend using **React** for the remainder, although I may end up having to switch and look further into Angular if it ends up being too much. I have to admit I still do not understand how the token system of the charity will work. I can't envision a solution for it and it confuses me with what i'm actually supposed to do for it. But that is neither here or there.

## References

GeeksforGeeks. (2020, June 5). *Top 10 Frameworks for Web Applications.* Retrieved May 19, 2022, from https://www.geeksforgeeks.org/top-10-frameworks-for-web-applications/?ref=gcse
