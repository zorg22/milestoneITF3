import React, { Component } from 'react';
import '../css/contact.css'

export default class Contact extends Component {
    render() {
        return (
            <section id="contact-container">
                    <h1>Contact Form</h1>
                    <form>
                        <input type="text" name="name" placeholder="Your name" />
                        <input type="email" name="email" placeholder="Your Email Address" />
                        <input type="tel" name="phone" placeholder="Your Phone Number" />
                        <input type="url" name="site" placeholder="Your Web Site" />
                        <textarea placeholder="Type your message here..." defaultValue="Awesome site"></textarea>
                        <button type="button" name="submit" id="contactSubmit">Submit</button>
                    </form>
            </section>
        )
    }
}
