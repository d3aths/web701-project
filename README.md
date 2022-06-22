# web701-project
Workspace for assignment in web class. This repo holds the MERN stacked project


## Running the website

From path "../../web701-project/"  
cd server  
node server.js  

From path "../../web701-project/"  
cd client/src  
npm start

Login as admin user to view functionality  
Email: admin@no.com  
Password: admin

One specific thing that happens that I can't figure out is that going into individual service pages from the home screen, won't display their details unless you go into a service from the service list page (under admin options), then clicking edit on the service from the table, then going back without changing information. Only then for some reason will the individual info display (and only for the item you edited). I have no idea what is causing this and why it won't just damn well display properly.

### M3 Essay

https://github.com/d3aths/web701-project/blob/master/New%20tech%20essay.docx

### To - do bug fixes

- [x]  make provider fields on table in user list

- [x] edit service page has infinite loader, must be corrupted item on page

- [ ] services do not display information correctly. look into backend

- [x] creating service gui button fails with request 401

- [ ] admin order page shows 404. must be revamped into transactions payable with token out of the users balance

- [x] need correct labels on the services list table

- [x] code 500 on homepage, i believe this should be a rotating list. look at what backend is trying to get here. the functionality for the carousel is not implemented

- [x] provider type account should have access to services list to create. reevaluate authentication for those api points