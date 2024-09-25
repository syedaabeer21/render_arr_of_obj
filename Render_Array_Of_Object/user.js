const user = document.getElementById('user');
const email = document.getElementById('email');
const next = document.getElementById('next');
let users = [];
let currentIndex = 0;

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    users = data;
    display(currentIndex);
  })
  .catch(error => console.error('There is some error in fetching data:', error));

display = (index) => {
    user.textContent = 'User Name : ' + users[index].name;
    email.textContent = 'User Email : ' + users[index].email;
}

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % users.length; 
  display(currentIndex);
});
