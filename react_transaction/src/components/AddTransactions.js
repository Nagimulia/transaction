import React, { useState } from "react";

export default function AddTransactions({ id, addTransaction }) {
  const options = [
    { label: 'Food', value: 1 },
    { label: 'Car', value: 2 },
    { label: 'School', value: 3 },
    { label: 'Wearing', value: 4 },
    { label: 'Health', value: 5 },
    { label: 'Other..', value: 6 },
  ]
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const onSubmit = (event) => {
    event.preventDefault()
    const newTransaction = {
      id: id,
      text: text,
      comment: comment,
      amount: amount,
      category: category,
      date: date
    }
    addTransaction(newTransaction)
    setText("")
    setComment('')
    setCategory('')
    setAmount(0)
    setDate("")
  }


  return (
    <div>

      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Transaction..." type="text" />
        </div>
        <div className="form-control">
          <label>Comment</label>
          <input value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Enter Comment..." type="text" />
        </div>
        <div className="form-control">
          <label>Category</label>

          <select className="form-control">
            {
              options.map(option => (
                <option value={category} onChange={(event) => setCategory(event.target.value)} >{option.label}</option>
              ))
            }
          </select>


        </div>
        <div className="form-control">
          <label>Amount</label>
          <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Amount..." type="number" />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="Select Date..." type="date" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}
