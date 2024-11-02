import React, {useState, useTransition} from 'react'
import Buttons from "./Buttons.jsx";
const Background = () => {
    const [back, setBack] = useState('bg-[black]')

    return (
        <div className={ ' h-screen w-screen'}
             style={{backgroundColor: back}}>
            <div
                className={'relative left-[17%] top-4 bg-blue-300 w-2/3 flex items-center justify-center rounded-3xl h-[60px] '}>

                <button onClick={() => setBack('red')} className={' m-1 rounded-3xl bg-[red]' + ''}>Red</button>
                <button onClick={() => setBack('blue')} className={' m-1 rounded-3xl bg-[blue]' + ''}>Blue</button>
                <button onClick={() => setBack('green')} className={' m-1 rounded-3xl bg-[green]' + ''}>Green
                </button>
                <button onClick={() => setBack('yellow')} className={' m-1 rounded-3xl bg-[yellow]' + ''}>Yellow
                </button>
                <button onClick={() => setBack('purple')} className={' m-1 rounded-3xl bg-[purple]' + ''}>Purple
                </button>
                <button onClick={() => setBack('grey')} className={' m-1 rounded-3xl bg-[grey]' + ''}>Grey
                </button>
                <button onClick={() => setBack('black')} className={' m-1 rounded-3xl ' + ''}>Reset
                </button>

            </div>
        </div>
    )
}
export default Background
