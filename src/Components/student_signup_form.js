import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class student_signup_form extends Component {
  static propTypes = {}

  render() {
    return (
        <div id="id01" class="modal">
        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
        <form class="modal-content" action="std_dash.html">
          <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required>
  
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
  
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
  
            <label>
              <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"/> Remember me
            </label>
  
            <label><br/>Already have an account? <a href = "signinstud.html">Sign in</a></label>
  
            <div class="clearfix">
              <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
              <button type="submit" class="signup">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
  
    )
  }
}

export default student_signup_form