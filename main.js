const emailListEl = document.getElementById('email-list')

const listEmailGenerate = []

// Add cicle for the email

for (let i = 0; i < 10; i++){

    fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then(response => response.json())
        .then(data => {
            listEmailGenerate.push(data.response)

            const li = document.createElement('li')
            li.textContent = data.response;
            emailListEl.appendChild(li)
        }
        )
        .catch((error) => console.error(error));
}

console.log(listEmailGenerate);

