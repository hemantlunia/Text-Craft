// import React, { useState } from 'react'

export default function About(props) {
    // const [mystyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btntext,setBtntext]= useState("Light-Mode")


    // const togglestyle = () => {
    //     if (mystyle.color === 'black') {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtntext("Dark-Mode")
    //     } else {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtntext('Light-Mode')
    //     }
    // }


    return (
        <>
            <div className='container my-5' style={{ backgroundColor: '{props.mode==="light"?"black":"white"}', color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>About Language,Framework and Database </h1>
                <div className="accordion" id="accordionPanelsStayOpenExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button  bg-${props.mode === 'light' ? 'white' : 'black'} text-${props.mode === 'light' ? 'black' : 'white'} `} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                1. JavaScript
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse show  bg-${props.mode === 'light' ? 'white' : 'black'} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                            <div className="accordion-body" >
                                <strong>JavaScript (JS) is a versatile programming language primarily used for front-end web development.</strong> Developed by Netscape in the mid-1990s, it has since become an essential tool for creating dynamic and interactive websites. JS enables developers to manipulate the Document Object Model (DOM), allowing real-time updates to web pages without requiring a full page reload. It supports event-driven programming, responding to user actions like clicks and input.
                                <br />

                                <code>console.log('Hello, World!');
                                </code><br />

                                With the advent of Node.js, JavaScript has expanded its reach to server-side development, enabling the creation of full-stack applications. JS is known for its asynchronous programming capabilities, utilizing features like callbacks, promises, and async/await for efficient handling of asynchronous operations. The language has a vast ecosystem of libraries and frameworks, including Angular, React, and Vue.js, facilitating the development of complex and scalable applications.

                                Despite being initially criticized for browser compatibility issues, JS has evolved with the introduction of ECMAScript standards, ensuring a consistent language specification. As a result, JavaScript has grown into one of the most widely used programming languages, powering the majority of web applications and playing a crucial role in modern software development. <br />
                                <code>
                                    function addNumbers(a, b) {
                                        <strong>return a + b;</strong>
                                    } <br />


                                    let result = addNumbers(5, 7);
                                    console.log('Sum:', result);
                                </code>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button collapsed  bg-${props.mode === 'light' ? 'white' : 'black'} text-${props.mode === 'light' ? 'black' : 'white'}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                2 . React
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className={`accordion-body  bg-${props.mode === 'light' ? 'white' : 'black'} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                                <strong>                                React, a JavaScript library developed by Facebook, has emerged as a cornerstone in modern web development. Primarily focused on building efficient and interactive user interfaces, React employs a component-based architecture, allowing developers to create reusable and modular UI elements. The library's Virtual DOM system optimizes performance by updating only the portions of the actual DOM that have changed, reducing unnecessary re-rendering and enhancing overall application speed.</strong>

                                React promotes a declarative programming style, making code more readable and easier to debug. Its unidirectional data flow ensures predictable state management, enhancing the stability of applications. React's popularity is further fueled by its robust ecosystem, which includes tools like React Router for seamless navigation and Redux for effective state management in larger applications.

                                The library's <code>component-based structure encourages the development of scalable and maintainable code,</code>  fostering collaboration among developers. With a strong community and widespread adoption, React remains a go-to choice for developers aiming to create dynamic and responsive user interfaces. Its continuous evolution, support for modern development practices, and compatibility with other technologies contribute to React's enduring significance in the ever-evolving landscape of web development.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button collapsed  bg-${props.mode === 'light' ? 'white' : 'black'} text-${props.mode === 'light' ? 'black' : 'white'} `} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                                3 . MongoDB
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className={`accordion-body  bg-${props.mode === 'light' ? 'white' : 'black'} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                                <strong> MongoDB is a popular, open-source NoSQL database that provides a flexible and scalable solution for handling large volumes of unstructured or semi-structured data.</strong> Developed by MongoDB Inc., it falls under the category of document-oriented databases, which means it stores data in flexible, JSON-like BSON (Binary JSON) documents.

                                One of MongoDB's key features is its ability to scale horizontally, allowing it to efficiently manage growing datasets by distributing them across multiple servers. This horizontal scaling is achieved through sharding, where data is partitioned and distributed across different machines, enabling MongoDB to handle increased loads and provide high availability. <br />
                                <code>pip install pymongo
                                </code> <br />

                                Documents in MongoDB are organized into collections, which are analogous to tables in relational databases. Each document within a collection can have a different structure, allowing for dynamic and schema-less data modeling. This flexibility is particularly advantageous in scenarios where data schemas are evolving or diverse.

                                MongoDB's query language supports a wide range of operations, making it versatile for various applications. It also provides indexing capabilities to improve query performance, and its aggregation framework enables users to perform complex data transformations and analyses.

                                Additionally, MongoDB offers comprehensive support for geospatial data, making it suitable for applications that involve location-based services. Its robust security features include authentication, authorization, and encryption, ensuring the protection of sensitive data.

                                Developers often appreciate MongoDB's ease of use and quick setup. Its JSON-like document model aligns well with modern programming languages, simplifying the development process. The community edition of MongoDB is open source, and there's also a commercially supported version for enterprise-level applications.

                                In summary, MongoDB is a powerful NoSQL database that stands out for its scalability, flexibility, and ease of use. It has gained popularity in various industries, including e-commerce, finance, and content management, where handling large volumes of diverse data is a common requirement.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button onClick={togglestyle} className='btn btn-primary my-2'>{btntext}</button> */}
            </div>
        </>
    )
}
