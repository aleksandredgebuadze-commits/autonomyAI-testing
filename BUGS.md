
# Bug Report - AutonomyAI!

## 🐞 Bug #1
### 📌 Title
"Forgot Password" request returns 500 Internal Server Error

### ⚠️ Severity
**Major**

### 🔁 Steps to Reproduce
1. Navigate to: https://studio.autonomyai.io/login  
2. Click "Forgot password?"  
3. Enter a valid, registered email address  
4. Click "Send Email"

### ✅ Expected Behavior
System processes the request successfully (e.g., HTTP 200) and initiates the password recovery flow.

### ❌ Actual Behavior
Request fails with HTTP 500 error. Password recovery flow is not initiated.


### 📸 Screenshot
![Screenshot](/bugImg/forgotPass.png)


---
## 🐞 Bug #2
### 📌 Title
User account creation does not trigger welcome email

### ⚠️ Severity
**Major**

### 🔁 Steps to Reproduce
1. Navigate to: https://studio.autonomyai.io/login  
2. Click "Sign up"  
3. Enter a new email address  
4. Enter a name  
5. Click "Sign Up"

### ✅ Expected Behavior
User account is successfully created and onboarding flow is triggered (e.g., welcome email or confirmation step).

### ❌ Actual Behavior
Account may be created, but no welcome/onboarding email is received.

### 📝 Notes
- Needs verification whether account is created successfully in backend  
- Possibly related to Bug #5 (email service issue)

---

## 🐞 Bug #3
### 📌 Title
Existing account signup attempt shows success despite backend error

### ⚠️ Severity
**Major**

### 🔁 Steps to Reproduce
1. Navigate to: https://studio.autonomyai.io/login  
2. Click "Sign up"  
3. Enter an already registered email  
4. Enter any name  
5. Click "Sign Up"

### ✅ Expected Behavior
User is shown a clear error message indicating the account already exists.

### ❌ Actual Behavior
UI shows success state, while backend request fails (visible only in network tab).


### 📸 Screenshot
![Screenshot](/bugImg/silentErrorAuth.png)

---

## 🐞 Bug #4
### 📌 Title
User role update not reflected immediately in UI

### ⚠️ Severity
**Major**

### 🔁 Steps to Reproduce
1. Navigate to: https://studio.autonomyai.io/login  
2. Authenticate with valid credentials  
3. Open sidebar → User menu → "Users"  
4. Change role for any user  

### ✅ Expected Behavior
Role update is reflected immediately in UI after successful operation, with a single clear success message.

### ❌ Actual Behavior
- Role change is not reflected until application reload  
- Multiple overlapping notifications are displayed  


### 📸 Screenshot
![Screenshot](/bugImg/roleUpd.png)

---


## 🐞 Bug #5
### 📌 Title
User invitation flow does not trigger invitation email

### ⚠️ Severity
**Major**

### 🔁 Steps to Reproduce
1. Navigate to: https://studio.autonomyai.io/login  
2. Authenticate with valid credentials  
3. Open sidebar → User menu → "Users"  
4. Click "Invite User"  
5. Enter user details and assign role  
6. Submit invitation  

### ✅ Expected Behavior
Invitation is created successfully and onboarding flow is triggered (e.g., invitation email with access instructions).

### ❌ Actual Behavior
Invitation email is not received.

### 📝 Notes
- Likely related to Bug #2 (shared email service issue)

---

## 🐞 Bug #6
### 📌 Title
Project initialization status UI displays inconsistent progress information

### ⚠️ Severity
**Minor**

### 🔁 Steps to Reproduce
1. Navigate to: https://studio.autonomyai.io/login  
2. Authenticate with valid credentials  
3. Create a new project  
4. Hover over the info icon (ℹ️) for initialization status  

### ✅ Expected Behavior
Status UI displays accurate step count and highlights the correct current step.

### ❌ Actual Behavior
- Step count in progress bar does not match actual steps  
- Active step in UI does not match status message


### 📸 Screenshot
![Screenshot](/bugImg/infoBar.png)

---


## 🐞 Bug #7
### 📌 Title
All task executions fail for project "jira-clone-test"

### ⚠️ Severity
**Critical**

### 🔁 Steps to Reproduce
1. Navigate to: https://studio.autonomyai.io/login  
2. Authenticate with valid credentials  
3. Create/open project "jira-clone-test"  
4. Click "New Task"  
5. Select any task type (Plan / Build / Find)  
6. Enter task input  
7. Click "Generate"

### ✅ Expected Behavior
Task is processed successfully and returns a result.

### ❌ Actual Behavior
- All tasks fail  
- Retry attempts also fail  
- Error details only visible in network responses


### 📸 Screenshot
![Screenshot](/bugImg/failedTask.png)

#### after retry : 
![Screenshot](/bugImg/failureOnRetry.png)

---
## 🐞 Bug #8
### 📌 Title
Task names are not generated based on task context

### ⚠️ Severity
**Cosmetic**

### 🔁 Steps to Reproduce
1. Create a new task with custom input  
2. Observe generated task name  

### ✅ Expected Behavior
Task name reflects user input or task context.

### ❌ Actual Behavior
All tasks receive the same generic name.


### 📸 Screenshot
![Screenshot](/bugImg/taskNamesNotContextDependent.png)


---

## 🐞 Bug #9
### 📌 Title
Existing task becomes inaccessible after initiating new task flow

### ⚠️ Severity
**Major**

### 🔁 Steps to Reproduce
1. Open an existing task  
2. Click "New Task"  
3. Return to previously opened task  

### ✅ Expected Behavior
Task remains accessible and displays correct details.

### ❌ Actual Behavior
UI displays "Task not found" for an existing task.


### 📸 Screenshot
![Screenshot](/bugImg/taskNotFound.png)

---

## 🐞 Bug #10
### 📌 Title
Studio UI does not display all files included in pull request

### ⚠️ Severity
**Critical**

### 🔁 Steps to Reproduce
1. Create and complete a task  
2. Send changes to developers (create PR)  
3. Compare:
   - Changes shown in Studio  
   - Changes in GitHub PR  

### ✅ Expected Behavior
Studio reflects all files and changes included in the pull request.

### ❌ Actual Behavior
Some files (e.g., config/JSON files) are missing from Studio PR details but presented in GitHub.


### 📸 Screenshot

#### what we have in github : 
![Screenshot](/bugImg/changesInGithub.png)

#### changes in studio (based on commit it should be in VO1 version) : 
![Screenshot](/bugImg/studioChanges.png)

#### note : I checked all version in list but haven't found mentioned files
---

## 🐞 Bug #11
### 📌 Title
Empty initial commit is always included in generated pull requests

### ⚠️ Severity
**Minor**

### 🔁 Steps to Reproduce
1. Create task and generate PR  
2. Open PR in GitHub  
3. Review commit history  

### ✅ Expected Behavior
Only meaningful commits related to the task are included.

### ❌ Actual Behavior
An empty/dummy initial commit is always included.


### 📸 Screenshot

![Screenshot](/bugImg/dummyCommit1.png)

![Screenshot](/bugImg/dummyCommit2.png)

---


