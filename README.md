# finalAssignmentCypress

1. This is manual testcases : 
   1. [Google Sheets](https://docs.google.com/spreadsheets/d/1dTMK0WjKwAygpJcpOOWrQab_Gi85Cu7eKoMVuYwSNK4/edit?usp=sharing)
    
   2. This repository is my automation part I work with your URL. In this repo, I use :
      1. Page Object Model concept to work with 3 pages : [pages folder](cypress/support/pageObjectModel)
         1. Homepage
         2. New product page
         3. Product Detail page
      2. Using Awesome reporter to collect report json file and merge it to 1 report file. After that, convert it to HTML file
      3. Using Github Actions to trigger pipelines and export Report everytime automation testing is done. You can visit this URL to see the report after running is finished on GITHUB Actions. [REPORT LINK](https://sinnv2710.github.io/finalAssignmentCypress/report.html)

###How to run on your local machine
   1. Install node (above 13) 
   2. Install `Yarn`
   3. Clone this repository
   4. `cd finalAssignmentCypress` && `yarn`
   5. Run command `yarn cypress verify`
   6. After Cypress library is verified, please run `yarn open` if you want to open Cypress and run each spec file. If you want to run cypress with headless mode, please use `yarn cy:run` 
   7. (NOTE!!!!) After Cypress with headless mode is finish, If you want to open the HTML report, please use this command `yarn gen:report` . After that , please open it with path `./cypress/reports/html/report.html`
   8. Everytime trigger Cypress with headless mode, please use this command first `yarn clean:win` if you use `Windows` or `yarn clean:unix` if you use `LINUX` or `MACOS`


###How to trigger Cypress on GITHUB actions
1. Go to this repository
2. Select `Actions` tab
3. Select `Github Actions Demo` option at the left 
![image](https://image.prntscr.com/image/9se8in44SjutXMJ42_7J_g.png)
4. Select `Run workflow` dropdown and input `Yourname` 
![image](https://image.prntscr.com/image/MQ-3lLmDQxGJJrrk530B7Q.png)
5. Click `Run workflow` and wait a bit
6. You will see your runner is appeared in workflow runs list
7. Click that runner to see whole process of runner
8. After the runner is finish, you can go to this URL to see the report is generated. [REPORT LINK](https://sinnv2710.github.io/finalAssignmentCypress/report.html) ![image](https://image.prntscr.com/image/Sd_zrG8iRUy7CcXht1BGeg.png)

If you have a question, please send me via my email : sin.sin27100@gmail.com
Thank you very much
Have a nice day !
