# Milestone 1

## Reqs

### 1. Use a tool such as Microsoft DevOps to manage and present features in an Epic with a backlog list of features from a list of User Stories based on the website requirements.

[**DevOps Link to this project**](https://dev.azure.com/Celeste-Quinn/web701-project)  
You should have been added to this team to view the work items etc.  
Here are some screenshots of current tasks

![image](https://user-images.githubusercontent.com/16113944/159632111-a90eedf8-a105-4a1b-93ad-91db86dd2f61.png)  
Current boards for Milestone 1

![image](https://user-images.githubusercontent.com/16113944/159632382-73eeb487-2c1c-499d-8cf4-8ea70f22a558.png)  
Work items that have not been completed

![image](https://user-images.githubusercontent.com/16113944/159633074-e79da89d-3508-4879-8ba7-bb0faefe29fb.png)  
Backlog

---

#### a) For User stories, features and backlog list.

- Top level User Stories match the website brief. Feature lists are provided for each user story.The backlog list presents all features

1) someone wants to register as a charity provider. they register on the website. afterwards, they are taken to their account portal where they can add their service to the website for others to browse and use their tokens for the service or receive items they are offering.
when a member has signed up to use their token for the service, the provider should be able to accept (and this implies or reject) the transaction. ie, the transactions shouldnt be automatic, requires approval.

2) someone registers as a regular member. theyve seen a service theyre interested in on our website. they want to sign up for the service however there was only a limited number of tokens that were available and they have all been taken. the person is disappointed as they only registered in the first place to get access to this particular service

features:  
  -  field on login form that users must specify if they are provider or regular member
  -  the account portal each person accesses will have different options accordingly
   - services should be viewable before having to sign up, to show people what they are. this includes search page, filtering, etc.
   - once tokens have all run out on a service, it must either be removed or more tokens generated for access to it. providers should get a certain number of days before it gets taken down by themselves or site admins, or display a date when more tokens will be available for the service
   - a function could exist that members can get email notifications when a service is back "in stock" (is this too difficult to implement?)
   - tokens need to be tied to each members account
   - there is a limited number of tokens for each service, therefore the provider must be able to set an amount of tokens they wish to generate for giving out to people who sign up for the service.
   - the page for the service could display the amount of tokens it has remaining to give out like: 6/10 left
   - you have to be signed into a members account before you can take a token from the page of a service. so a button could be added to the page saying like "sign up for this" which generates the unique token to add to their account. if pressed again, they should not be able to gain another token

notes: the above system nullifies the point in the brief where providers have an interface to accept tokens as part of a transaction. an alternative could be that each member gets a set amount of tokens when registering that they can spend. the tokens must then be linked to each persons account, and the page for the service should then have a special interface that the provider can see which shows all the people's tokens and profiles (to verify) who want to sign up for their service, and be able to accept/reject them.

---

#### b) Include mapping of the User Stories to a CRUD analysis to design the database API for the application. Write API calls to implement CRUD in Express.js –note the API calls can be stubs –but are best if they produce code behaviour. Test the API using a tool such as POSTMAN.

API calls can be found in the project directory *web701-project/server/routes*  
There are currently just two sections, APIs for services and APIs for users. Use these templates for testing that requires body input

Server on localhost:5000  
body format: raw JSON

**register new user**  
POST: /user/add  

```json
{
  "email": "todd@todd.com",
  "name": "Todd",
  "type": "admin",
  "password": "12345"
}
```
    
**edit user**  
POST: /user/update/<id>  
you must copy in the ID that mongo generates for the user when added  
GET userlist first to find this. this is quite an annoying way of doing it but i suppose its only for the purposes of testing functionality rn  
*you must put in every field even if youre not changing it otherwise it will result in nulls*  

```json
{
  "email": "newemail",
  "name": "newname",
  "type": "newtype",
}
```

**add new service**  
POST: /services/add
  
```json
  {
"title": "Phone tapping lessons",
"category": "Learning",
"details": "Learn how to become a phreaker and tap phonelines of a property, useful for coordinated attacks disturbing government targets",
"tokens": 5,
"date": "March 2022"
}
```
    
**editing service**  
POST: /services/edit/<id>  
the same rules apply as was in user editing

```json
{
"title": "Phone tapping lessons",
"category": "Learning",
"details": "Learn how to become a phreaker and tap phonelines of a property, useful for coordinated attacks disturbing government targets",
"tokens": 5,
"date": "March-April 2022"
}
```

### Crud Matrix

![image](https://user-images.githubusercontent.com/16113944/158004141-68b053a6-8968-4602-9b0a-3805b0751441.png)

<sub>Notes: this is a draft of first thoughts about what features are needed and may not reflect the final features that get implemented as the project is brought to life</sub>

I reworked the CRUD matrix after completing the basic API commands that I thought I would need at the stage of this milestone, so it would fit in with what was actually needed. But i will leave in the first draft in this document anyway.

![image](https://user-images.githubusercontent.com/16113944/159631159-c81b7c4f-2a36-479b-9f69-34d6d5fd545b.png)

Revision according to workable api elements

---

### 2. Submit an Information Architecture analysis report that meets the requirements. This should atleast include the documents and topic headings listed in Additional Guidelines section in Appendix 1. See the marking guide provided in Appendix 1.
  
[**Report located here**](https://github.com/d3aths/web701-project/blob/master/info-analysis-report.md)

---
  
## Wireframes
  
Mockup of the website design, how it may look (first draft)
