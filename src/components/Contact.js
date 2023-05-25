export const Contact = () => {
    return (
        <div>
        <h1>Contact</h1>
        <section className="--section--contact">
            <form classname="--form-control--card rounded ">
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
        </div>
    )
}

export default Contact;