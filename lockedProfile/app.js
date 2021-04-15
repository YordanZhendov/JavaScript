window.onload=function(){

    console.log('regeg')
    

    lockedProfile();
}
function lockedProfile() {
    document.getElementById('main').addEventListener('click', (event) => {

        if (event.target.tagName === 'INPUT') {
            const profle = event.target.parentNode;
            const inputs = Array.from(profle.querySelectorAll('input[type=radio]'));

            if (event.target == inputs[0]) {
                const profile = inputs[0].parentNode;
                const div = Array.from(profile.getElementsByTagName('div'));
                div[0].style.display = 'none'
                profile.getElementsByTagName('button')[0].textContent = 'It`s locked';

            } else if (event.target == inputs[1]) {
                const profile = inputs[1].parentNode;
                const div = Array.from(profile.getElementsByTagName('div'));
                const isVisible = div[0].style.display = 'block'
                const visible = div[0].style.display = isVisible ? 'block' : 'none';

                profile.getElementsByTagName('button')[0].textContent = 'Hide it'
               

            }
        };

        if (event.target.tagName === 'BUTTON') {
            const profile = event.target.parentNode;
            const button = profile.getElementsByTagName('button')[0];
            if (button.textContent === 'Hide it') {
                const divProfile=button.parentNode;
                profile.getElementsByTagName('button')[0].textContent='Show more';
                divProfile.getElementsByTagName('div')[0].style.display='none';

            } else if (button.textContent === 'Show more') {
                const divProfile=button.parentNode;
                const buttonUnlocked = profile.getElementsByTagName('button')[0].textContent='Hide it';
                divProfile.getElementsByTagName('div')[0].style.display='block';
                console.log('toshow')
            }

        }
    })
}
