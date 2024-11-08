(() => {
    let playing = true,
        activeHole = 1,
        dead = 0,
        lost = 0;

    const stop = () => {
            playing = true;
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        },
                getHole = index => document.getElementById(`hole${index}`),
                deactivateHole = index => getHole( index ).className = 'hole',
                activateHole = index => getHole( index ).className = 'hole hole_has-mole'

        next = () => setTimeout(() => {
            if ( !playing ) {
                return;
            }
            deactivateHole( activeHole );
            activeHole = Math.floor( 1 + Math.random() * 9 );
            activateHole( activeHole );
            next();
        }, 800 );
    for (let i = 1; i<= 9; i++){
        getHole(i).onclick = () => {
            if (playing) {
                if (getHole(i).classList.contains('hole_has-mole')) {
                    dead++;
                    if (dead === 10) {
                        alert('Победа!')
                        stop();
                    } else {
                        document.getElementById('dead').textContent = dead;
                    }
                } else {
                    lost++;
                    if (lost === 5) {
                        alert('Вы проиграли!')
                        stop();
                    } else {
                        document.getElementById('lost').textContent = lost;
                    }
                }
            }
        }
    }
    next();
})();
