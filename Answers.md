1.  Explain the differences between `client-side routing` and `server-side routing`.
    With server-side routing, you navigate to a page, the site requests the data for that page, and then the server returns a document, HTML file, or a template to the browser, which the browser is then able to render. A downside of server-side routing is that the page must reload every time one navigates to a different in-site page; an upside is that it only calls for the data the page needs.
    Client-side routing means that JavaScript within a client application manages the data for that application within its own memory. This means, since the server is no longer requesting data but is self-contained, the page does not reload when one navigates throughout it but can immediately render. An upside of client-side routing is that it provides a better user experience since there is no waiting time; a downside is that it must call *all* of the page's data *all* of the time.
2.  What does HTTP stand for?
    Hyper Text Transfer Protocol. It is a set of protocols used by web applications.
3.  What does CRUD stand for?
    Create, Read, Update, and Delete.
4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    POST -> Create; DESTROY or DELETE -> Delete; and PUT -> Update.
5.  Mention three tools we can use to make AJAX requests
    Three tools we can use to make AJAX requests are .fetch(), .get(), and .post(). Each of these is accompanied by chained methods: .then() and .catch().