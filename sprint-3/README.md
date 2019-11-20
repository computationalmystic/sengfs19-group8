# Sprint 3 Readme

---

### Sprint 3 Goals and Additions:
- Front end completely functional with charts/visualizations implemented
  - charts loaded with sample data if server is still blocked
- Add another endpoint
  - could be an improvement to one of the repo comparison visualizations
  - could a small function added to the homepage, similar to insights in the default augur Vue app
- Back-end server should be functional with sample data loaded into the augur database
 - If the server is not functional, then it should work locally on a VM

---

### Sprint 3 Changelog

- 11/16/19 - Attempted to run augur on local VM
- 11/18/19 - Created Sprint 3 Readme
- 11/18/19 - Noticed database permissions were wrong for augur, rebuilt the database and will try it locally on VM
- 11/19/2019 The server is no longer getting errors returning data, but the database is still empty
  - augur.config.json file's host needs to public ip, and port needs to be 8080
  - Need to load sample data into database
- 11/19/2019 - Server issue on the backend resolved
  - The frontend still won't be able to connect to the backend
  - However, Jacob and Davin can move forward with testing the endpoints
  - run the backend only with "augur run", use 129.114.104.249:5000/api/unstable/repos to connect to the data
- 11/20/2019 - Issue assignees endpoint is finished
  - Returns repo group ID, issue title, assignee count, and issue date
