import React,{useState,useEffect} from "react"
import QuestionItem from './QuestionItem'
import QuestionForm from "./QuestionForm"
function QuestionList() {
  const[questions,setQuestion]=useState([])
  const[form,setForm]=useState(false)
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
     .then(r=>r.json())
     .then((questions)=>setQuestion(questions))
  },[])
  function handleAdd(newQuestion){
    setQuestion([...questions,newQuestion])
  }
  return (
    <section>
      <button onClick={()=>setForm(!form)}>ask Question</button>
      {form && <QuestionForm onSubmit={handleAdd} />}
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
        {questions.map((item)=> <QuestionItem key={item.id} question={item} />)}
      </ul>
    </section>
  );
}

export default QuestionList;
