import { useState ,useCallback ,useEffect , useRef} from 'react';


function App() {
  const [count, setCount] = useState(0)
    const [password , setPassword]= useState('');
    const [length , setLength]= useState(8);
    const [numbers, setNumbers] = useState(false);
    const [character, setCharacter] = useState(false);
  const passwerdGenrateron=   useCallback(()=>{
      let pass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx'
      if(numbers){
          pass+='1234567890';
      }
      if(character){
          pass+='!@#$%^&*?><~';
      }
      let str =""
      for( let i =0; i<length; i++){
        let ind = Math.floor(Math.random()*pass.length+1);
        str+= pass.charAt(ind);
    }
    setPassword(str);
    },[length,numbers,character,setPassword])
  const copyForm=() =>{
    passwordRef.current?.select()
      // passwordRef.current?.setSelectionRange(0,password.length)
      window.navigator.clipboard.writeText(password);
    }
    const passwordRef = useRef(null);
    useEffect(()=>{passwerdGenrateron()},[length,numbers,character,setPassword]);
  return (
    <>
        <div className={'w-full h-screen bg-blue-300'}>
            <div className={'relative m-auto top-12 w-[600px] h-[300px] rounded-3xl bg-black text-white text-center'}>
                <h1 className={'text-4xl'}> Password Genrator </h1>
                <div className={'mt-4 flex justify-center'}>
                    <input className={'rounded pl-2 text-black bg-blue-300  w-1/2'} type="text" value={password}
                           placeholder={'Password'}
                           readOnly
                      ref={passwordRef}
                    />
                    <button onClick={copyForm}
                            className={'rounded ml-2 text-center bg-[blue] h-12 w-14'}> Copy
                    </button>
                </div>
                <div>
                    <input type="range" min={6} max={20} value={length} className={'cursor-pointer'} onChange={(e) => {
                        setLength(e.target.value)
                    }}/>
                    <label> Lenght : {length}</label>
                </div>
                <div>
                    <input type="checkbox" defaultChecked={numbers} className={'cursor-pointer'} onChange={() => {
                        setNumbers((prev)=> (!prev))
                    }}/>
                    <label> Number</label>
                </div>
                <div>
                    <input type="checkbox" defaultChecked={character} className={'cursor-pointer'} onChange={() => {
                        setCharacter((prev)=> (!prev))
                    }}/>
                    <label> Character</label>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
