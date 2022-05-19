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

Create a Work Grid to evaluate two web framework systems you propose for use on the project.  
Each framework is to be evaluated as described in the following. Include screenshots that demonstrate prototype solutions that meet website requirements. (40 marks)

How to evaluate your web frameworks.  
Identify two web framework systems. Install each web framework system. Find examples that will assist to implement each of the criteria in the Work Grid.
Demonstrate how the requirements would be met by each framework by reporting on work you undertook for each of the following  
1. Create a coded prototype “proof-of -concept” solutions (example code snippets) in each framework for the website requirements given in the marking grid. Include a screenshot of the solution. (5 marks each)

- Code example works, has a screenshot. code is commented with correct descriptions

2. Write a written statement that compares the web frameworks (5 marks) as follows.
Compare the complexity of the work you undertook to achieve a solution using
each framework, include code snippets. Also consider if the framework helps in the
development of your web site. (5 marks)

- Introduces both frameworks Includes an estimate of relative complexity ( APA7)

Marks for work grid:  
- Charity members and beneficiaries can register, log in and administer their own
accounts. i.e Members use the website to register their products and services, and
beneficiaries use the system to acquire tokens (30 marks)

- The system provides an interface that the members can use to accept a token in a
transaction , and store and retrieve data from a server-side database (API)

| Req | MEAN | MERN | Comparison | 
|--|--|--|--|
| Register | ![image](https://user-images.githubusercontent.com/16113944/169180263-5a17d400-ee92-40ae-988c-0a472df17ee9.png) | ![image](https://user-images.githubusercontent.com/16113944/169180752-6bb01cc7-5668-4217-8d15-605b8539c43f.png) <br> ![image](https://user-images.githubusercontent.com/16113944/169181554-62dd88c5-6499-4ffb-89f2-d717a59c7dbe.png) | The difference between these two is fairly complex. Because of the amount of other packages my React build is using, it complicates the process compared to the Angular version. React hooks into to a lot of other components and relies on them to function, whereas angular is fairly standalone, just uses it's own auth service. |
| Login | ![image](https://user-images.githubusercontent.com/16113944/169180470-1de3a60c-ccc0-4678-b3a6-dd76f4096ad0.png) | ![image](https://user-images.githubusercontent.com/16113944/169181305-6f79d866-a7d9-4c21-8627-b5d5f184e578.png) <br> ![image](https://user-images.githubusercontent.com/16113944/169181398-095deaf4-8f20-444b-b402-dd125509b091.png) | You can tell from having to upload two seperate images how much more complicated the React is set up to be. There is a lot of functions that are seperately structured and imported to be used on different pages. The login and register pages both call functions from elsewhere and do their validating from there opposed to having it built in on the same page that just uses one singular auth service on Angular. |
| Administer own account | ![image](https://user-images.githubusercontent.com/16113944/169182124-2d3ea5f4-f8b8-40d5-8d05-7edb9fcd2cc2.png) <br> ![image](https://user-images.githubusercontent.com/16113944/169182478-1dab85c3-bddf-4fbe-8da2-252577157e0d.png) | ![image](https://user-images.githubusercontent.com/16113944/169184458-8cf8a00e-04f8-4e5e-b996-0ed4c7ad1f3f.png) | The code I have on Angular right now is just a snippet from the add-service component, which is the creation of a service by a provider. As of writing this documentation, the function is public, but as per the requirements this will later be moved to the 'provider-board' so that only users with that role can access it. The second image shows the edit and delete operations on a service, which will later be updated to only admins and providers being able to use. On react, I have shown an example of the create service code. You can see it includes authorisation for roles, meaning only  users with the authorised token have access to these operations. Other CRUD operations are very similar, and much the same as the previous register and login screens, the screen for creating, editing, and listing all hooks into the list of actions |
| Store and retrieve data from server |  |
| User roles have access levels | |

## Conclusion

Conclude the report with a recommendation of a web framework to use in the development of this website. That will be the framework you will use for developing your website. (15 marks)

- Identifies pros and cons of each framework. Justifies the selection of one over another in this context. Identifies the framework that will be used in the project (APA7)

## References

GeeksforGeeks. (2020, June 5). *Top 10 Frameworks for Web Applications.* Retrieved May 19, 2022, from https://www.geeksforgeeks.org/top-10-frameworks-for-web-applications/?ref=gcse
