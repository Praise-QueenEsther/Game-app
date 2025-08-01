import React from "react";
import { Link } from "react-router-dom";
export function BrowserStorage(){
    return(
        <div>
    <h3>What Is Browser Storage?</h3> 

    <p>Browser storage allows developers to save data directly in the user’s browser, 
        instead of sending it to a server. This means my app can:</p>
                <br />
            -Remember things even after the user refreshes or closes the tab.
            -Improve speed by avoiding unnecessary API calls.
            -Store user settings, form inputs, game scores, etc.
            <br />

    <div><strong>Examples of Storage Mechanism</strong>

    <h3> 1. LocalStorage(Permanent Storage in the Browser)</h3>
    LocalStorage allows one to save data as key-value pairs in the user's browser.
            <br />
    Data stays saved even after the user closes the browser or restarts the computer.
            <br />
    You can store strings only.
    </div>
        <p>localStorage is an object provided by the browser</p>

        <p>it has the following methods/functions</p>
            <div>
                <p>setItem(key, value)=Saves data to localStorage. Example:localStorage.setItem("username", "Esther")</p> <br />
                <p>getItem(key)=Gets data from localStorage. Example:localStorage.getItem("username")</p> <br />
                <p>removeItem(key) =	Deletes data from localStorage Example:localStorage.removeItem("username")</p><br />
                <p>clear()=Removes everything from localStorage: Example:localStorage.clear()</p>
            </div>

                <br />
                <div><h3>2. SessionStorage(Storage for a Single Tab)</h3>
            <p>SessionStorage is just like LocalStorage, but it only lasts until the browser tab is closed.</p>
        <br />
        <p>It's also key-value storage and Data is lost when you close the tab</p>
        <p>Good for	Temporary data, form progress</p>

        <h3>methods of seesion storage</h3> 
        <p>setItem(key, value)=Saves data into session storage. Example:sessionStorage.setItem("name", "Esther");</p> <br />
        <p>getItem(key)= Retrieves data from session storage. Example:sessionStorage.getItem("name")</p> <br />
        <p>removeItem(key) =Deletes a specific item from session storage. Example:sessionStorage.removeItem("name")</p><br />
        <p>clear()= Clears all data from session storage. Example:sessionStorage.clear();</p> <br />
        <p>length=Tells how many items are stored.</p>

            <p>
                sessionStorage stores only strings like localStorage. To store objects, JSON.stringify() and JSON.parse() are used</p>
        </div>
                <br /><br />

        <div><h3>3. Cookie</h3>
        <p>A cookie is just a key-value pair: A cookie is a small piece of data that 
        browser stores on computer when one visit a website.</p>
        <p>Websites use cookies to remember you — like your login status, language preference, or items in your shopping cart.</p>
        <br />
        <h3>Cookie helps to remember:</h3>
        <p>To remember if one is logged in</p>
        <p>To save user preferences (like dark mode or language)</p>
        <p> To track analytics (like pages visited)</p>
    
    <p> To save a small amount of data across sessions (even after refresh or closing the tab)</p>
                <br />
        <h4>How Cookies Work</h4>
        <p>The server or JavaScript sets a cookie in the browser.</p>
        <p>The cookie is saved in your browser.</p>
        <p>On every request to the same site, the cookie is sent back to the server.</p>
        <p>one can read, write, or delete cookies with JavaScript or HTTP</p>

        <br /><br />
        <h4> Cookie Limitations</h4>
        <p>Small size limit (around 4KB)</p>
        <p>Sent to the server on every request (adds to bandwidth)</p>
        <p> Not secure unless secure and HttpOnly are used</p>
        <p>Can be manipulated (if not protected properly)</p>

        <h4>Cookie methods</h4>
        <p> Cookies.set(name, value, options)=Use: Create or update a cookie. Example:Cookies.set('username', 'Esther');
        </p> With options:Cookies.set('username', 'Esther', 
                expires: 7,           // Cookie lasts 7 days
                path: '/',            // Accessible from any path
                secure: true,         // Only set cookie over HTTPS
                sameSite: 'strict'    // CSRF protection) <br />
        <p>Cookies.get(name)=Use to Retrieve a cookie value by its name. Example:const user = Cookies.get('username');</p>
        <p>Cookies.remove(name, options)=Delete a cookie.Example:Cookies.remove('username'); if options where used when setting the cookie, it will also be included in other for them to be removed
        </p>


            </div>   
            <div><h3>IndexedDB is a low-level, built-in browser database that lets you store large amounts of structured data, including files and blobs. 
            It's asynchronous, persistent, and much more powerful than localStorage or sessionStorage</h3></div>
            <br />
            <h4>Importance of IndexedDB </h4>
            <p>Stores large data:Unlike localStorage's 5MB limit, IndexedDB can store hundreds of MBs.</p>
            <p>Structured storage:Stores objects, as well as strings.</p>
            <p>Supports transactions:	Allows consistent updates.</p>
            <p>Asynchronous:Doesn't block your app's main thread.</p>
            <p>Indexes:one can create indexes for fast searching.</p>
            <p>example:use in offlibne apps like Google Doc, complex-to-do list or calender with history</p>
            <Link to="/" className="back-button">← Back to Home</Link>
        </div>
    )
}