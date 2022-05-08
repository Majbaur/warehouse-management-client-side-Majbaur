import React from 'react';

const Blog = () => {
    return (
        <div>
                          <h2> Ques:Difference between javascript and node js?</h2>
            <p> Ans:
                1. Javascript is a programming language that is used for writing scripts on a website.
                But NodeJS is a Javascript runtime environment.
                <br />
                2.	 Javascript can only be run in the browsers.
                We can run Javascript outside the browser with the help of NodeJS.
                <br />
                3.	JavaScript is basically used on the client-side.
                It is mostly used on the server-side.
                <br />
                4.	 Javascript is capable enough to add HTML and play with the DOM.
                Nodejs does not have the capability to add HTML tags.
                <br />
                5.	 Javascript can run in any browser engine like JS core in safari and Spidermonkey in Firefox.
                V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                <br />
                6.	 Javascript is used in frontend development.
                Nodejs is used in server-side development.
                <br />
                7.  Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                Some of the Nodejs modules are Lodash, express, etc.
                These modules are to be imported from npm.
                <br />
                8.	 It is the upgraded version of the ECMA script that uses Chrome’s V8 engine written in C++.
                Nodejs is written in C, C++ and Javascript.
            </p>
              <h2> Ques:When should you use nodejs and when should you use MongoDB?</h2>
            <p> Ans:
                MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily.
                There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS.
            </p>
              <h2> Ques:Differences between SQL and NoSQL databases.?</h2>
            <p> Ans:1.  SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).
                NoSQL is a Non-relational or distributed database system.
                <br />
                2.   These databases have fixed or static or predefined schema.
                They have a dynamic schema.
                <br />
                3.   These databases are not suited for hierarchical data storage.
                These databases are best suited for hierarchical data storage.
                <br />
                4.  These databases are best suited for complex queries
                These databases are not so good for complex queries.
                <br />
                5.   Vertically Scalable.
                Horizontally scalable.
                <br />
                5.   SQL Follows the ACID property.
                NoSQL Follows CAP(consistency, availability, partition tolerance).</p>
                  <h2> Ques:What is the purpose of jwt and how does it work?</h2>
                <p> Ans:JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON objects.

                It is compact, readable, and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                
                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                
                JWT is a token-based stateless authentication mechanism. Since it is a client-side-based stateless session, the server doesn’t have to completely rely on a datastore(database) to save session information.
                
                JWT Works:
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                
                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                
                Once decoded, you will get two JSON strings:
                
                The header and the payload.
                The signature. 
                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.  
                
                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                
                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. 
                
                The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>
        </div>
    );
};

export default Blog;