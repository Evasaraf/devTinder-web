//DEVTINDER FRONTEND
 
create a vite + react project
remove unnecessary code and create a hello world app
install tailwind css
install daisyUI 
add NavBar component to app.jsx file 
create a sperate file Navbar.jsx for handling navbar
install react router dom 
create browserrouter->routes-> route=/ ->routechildren
create an outlet in your body component
create a footer
create a login page
install axios
CORS- install cors in backend =>add middleware to with configurations: origins, credentials: true
Whenever u are making API calls - pass with credentials true











BODY
 navbar
 route=/ =>feed
 route=/login =>login
 route=/connections => dispaly connections
route=/profile => display profile 


DEPLOYMENT

-signup on AWS
=launch instance
-chmod 400 devTinder-secret.pem
-
-install node version 24.18.0
-Git Clone
-FRONTEND
 -npm intsall -> dependencies install 
 -npm run build
 -sudo apt update
 -sudo apt install nginx
 -sudo systemctl start nginx
 -sudo systemctl enable nginx
 -copy code from dist(build files) to /var/www/html/
 -sudo scp -r dist/* /var/www/html/
 -Enable port : 80 of your instance
- BACKEND
 - update DB password
 -allowed ec2 instance public IP on mongodb server
 -npm install pm2 -g
 -pm2 start npm --name "devTinder-backend" -- start
 -pm2 logs
 -pm2 list, pm2 flush<name>, pm2 stop <name> , pm2 delete <name>
 -config nginx - /etc /nginx/sites-available/default
 -restart nginx - sudo systemctl restart nginx
 - modify the Base_url in frontend project to "/api"



# adding a custom domain name
-purchased domain nmae from godaddy

# scheduling cron jobs
-installing node cron package
-learning cron expression syntax
-schedule a job
- learnt about date fns
-find all the unique email ids
-send email
- explore queue mechanism to send bilk emails
 
