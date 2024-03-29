import React from 'react'
import './QuizStyle.css'

const Quiz = () => {
  return (
    <div className='-quiz'>
        <h1>Quiz</h1>
        <h2>สีเส้นเลือดที่ข้อมือของคุณเป็นสี ?</h2>
        <ul>
            <li>สีเขียว</li>
            <li>สีม่วง</li>
            <li>สีน้ำเงินเขียว</li>
        </ul>
        <button>Next</button>
        <div className="-all">คำถาม 1 ใน 3</div>
    </div>
  )
}

export default Quiz