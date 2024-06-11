import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [modalTitle,setModalTitle] = useState(0);
  let [inputVal, setInputVal] = useState('');
  
  function updateNote(){
        let copy = [...글제목];
        if(copy[0] == '남자 코트 추천'){
          copy[0] = '여자 코트 추천';
        }
        글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={ ()=>{
        let copy = [...글제목].sort();
        글제목변경(copy);
      }}>가나다순정렬</button>


      <button onClick={ () => {
        updateNote()
      } }>글제목 변경</button>


      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
      {
        글제목.map(function(title, i) {
          return (
          <div className='list' key={i}>
            <h4 style={{ cursor : 'pointer' }} onClick={()=>{setModal(!modal); setModalTitle(i); } }>{ 글제목[i] }
            <span onClick={(e)=>{
              e.stopPropagation();
              let copy = [...따봉];
              copy[i]++;
              따봉변경(copy);
            }}>👍</span> {따봉[i]}
            <button onClick={(e)=>{
              e.stopPropagation();
              let copy = [...글제목];
              let likeCopy = [...따봉];
              copy.splice(i,1);
              likeCopy.splice(i,1);
              따봉변경(likeCopy);
              글제목변경(copy);
            }}>삭제</button></h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      <input onChange={(e)=>{ setInputVal(e.target.value) }} id="newText"/>

      <button onClick={()=>{
        let newText = document.querySelector("#newText").value;
        let copy = [...글제목];
        let likeCopy = [...따봉];
        if(newText){
          copy.unshift(document.querySelector("#newText").value);
          likeCopy.unshift(0);
        }
        따봉변경(likeCopy);
        글제목변경(copy);
      }}>글발행</button>
      {/* <Modal2 글제목={글제목}/> */}
      { modal ? <Modal 글제목={글제목} modalTitle={modalTitle} 글제목변경={글제목변경}/> : null }

    </div>
  );
}



function Modal(props){
  return (
    <div className="modal">
        <h4>{ props.글제목[props.modalTitle] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
    </div>
  )
}
// // 클래스 문법 (옛날 방법)
// class Modal2 extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name : 'kim',
//       age : 20
//     }
//   }
//   render(){
//     return (
//       <div>안녕 {this.props.글제목[0]}
//         <button onClick={()=>{
//           this.setState({age : 21})
//         }}>버튼</button>
//       </div>
//     )
//   }
// }

export default App;
