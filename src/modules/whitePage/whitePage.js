import './style.css'
import {useState, useEffect} from 'react'

const WhitePage = () => {
    const textItem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus mollitia est obcaecati veniam illo reprehenderit expedita, optio harum dolores excepturi facere id dignissimos officia sit dolorem quo! Et, molestias!'


    const [text, setText] = useState('')


    useEffect(() => {
     let counter = 0;
     const interval = setInterval(() => {
         if(counter !== textItem.length+1){
         setText(textItem.substr(0, counter++))}
         else {clearInterval(interval)}
     },100)
     return () => {clearInterval(interval)}
    },[])
    
    return <div className='whitePage'>{text}▊
    </div>
}

export default WhitePage