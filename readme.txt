CS193X Final Project
====================

Project Name: Exam Finder
Your Name: Adam Barry
Your SUNetID: adamjb

Overview
--------
My project is a tool that makes it easier for high school students in Ireland to search through exam papers and marking schemes for the Junior Certificate and Leaving Certificate (state-run examinations). There is already a website that allows you to do this “https://www.examinations.ie/exammaterialarchive/”, but it absolutely sucks. Every time you make a change to the form, the form resets, making it super laborious and tedious to find an exam. My tool makes it easier by updating the exam links that are retrieved as soon as one of the form fields is changed. Originally, I was going to use PDF.js to load a PDF of the exam in-browser, but because I am running the web app from localhost, CORS blocked this request so I had to use links instead. If my web app was hosted I believe the PDF loader would work.

Running
-------
Run npm install and then npm start. Login system details:
  Username: admin
  Password: ilovedogs

You will also have to run mongosh mongodb_init.js to populate the db with exam, login, and error data.

Features
--------
- You can login to the system using the above login details.
- You cannot access any page without being logged in (this isn't a secure way of doing it, I just redirect the user, but it is appropriate for the size of this project).
- You can use the exam-finder form to search for an exam paper and marking scheme based on its language, certificate, level, subject, and year.
- You can favourite an exam so that you can review it again in the future. This is specific to a user's profile.
- You can also submit an error if there is a problem with a link to one of the exams.
- You can delete errors as they become fixed.
- Finally, you can sign out when you are finished your session.

Collaboration and libraries
---------------------------
- I used uuidv4 to generate unique id's for the individual records in the DB.
- I used pdf.js to load a pdf directly onto the web page. This doesn't work unless the pdf is a local file, but like I have said
if I hosted this web app, I think it would not be blocked by CORS.
- I also used crypto and jsonwebtoken to handle logins.