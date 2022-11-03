import React from 'react'

export default function InsertStudent() {
  return (
    <>
           <form action="http://localhost:4000/newStudent" method="post">
        Name:
        <input type="text" name="sname" id="" /><br/>
        Roll number:
        <input type="text" name="rollNo" id="" /><br/>
        Destination:
        <select name="dest" id="">
            <option value="Erode">Erode</option>
            <option value="Bhavani">Bhavani</option>
            <option value="Tirupur">Tirupur</option>
            <option value="Nasiyanur">Nasiyanur</option>
            <option value="Gobichettipalayam">Gobichettipalayam</option>
            <option value="Chennimalai">Chennimalai</option>
        </select>
        <br/>
        Bus no:
        <input type="text" name="bno" id="" /><br/>
        <br/>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </>
  )
}
