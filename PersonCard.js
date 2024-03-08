function createPersonCard(name, peronSVG, description) {
    return `
        <article class="person-card">
            <div class="person-image">
            ${peronSVG}
            </div>
            <h3>${name}</h3>
            <p>${description}</p>
        </article>
    `;
}

function usePeople(containerSelector) {
    let people = [];

    for (let i = 1; i <= 6; i++) {
        people.push({
            name: `Person Name ${i}`,
            personSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="115" height="125" viewBox="0 0 115 125" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 125H115C113.476 88.5622 88.315 59.5794 57.5 59.5794C26.685 59.5794 1.52433 88.5622 0 125Z" fill="#476778"/>
                            <path d="M100.266 44.3925C100.266 67.8076 81.3083 86.785 57.9284 86.785C34.5485 86.785 15.5911 67.8076 15.5911 44.3925C15.5911 20.9774 34.5485 2 57.9284 2C81.3083 2 100.266 20.9774 100.266 44.3925Z" fill="#476778" stroke="white" stroke-width="4"/>
                        </svg>`,
            description: `Information about person ${i} goes here that explains the image above.`,
        });
    }

    let personCardsHTML = '';
    people.forEach(person => {
        personCardsHTML += createPersonCard(person.name, person.personSVG, person.description);
    });

    return document.querySelector(containerSelector).innerHTML = personCardsHTML;
}

export { usePeople };