# Clean Authentication and Authorization architecture 🔑

---

## Introduction

This article will be about designing an authentication and authorization architecture,
in a full-stack application using an `Identity provider (IDP)` with the `OpenId Connect` protocol.
I won't include code examples or specific technologies as this is more from a design perspective,
and the architecture can be implemented using any technology.
Implementing a clean architecture in the authentication framework gives us the ability to migrate to a different
`IDP` in the future. Further in `B2B` scenarios it allows us to let the customers
bring their own identity, as the connection between the providers should be relying on simple
environment variables, which can easily be replaced at build/release time.

## Identity Provider

An `IDP` is an application which is responsible for authenticating users, and
granting them access to protected applications. It is a middleman between the user and the
protected applications. There are many third party `IDP`s, and open source frameworks
which allow the developer to create their own `IDP`. It is a good idea to implement
the `IDP` as a standalone application, especially if you want to have `SSO` capabilities.

## High-level architecture overview

An example application would be a backend server + database + frontend client. In this scenario
the `IDP` would be either a third party application, or a developed application.

## Typical authorization with access tokens.

A typical way to implement authorization in a fullstack application is to utilize a role-based,
claim-based or permission based approach. Depending on access management requirements complexity,
one of the previous options is the way to go. No matter which choice, typically the roles, claims
or permissions are created in the `IDP`, and assigned to users within the `IDP`'s
user store.
When the `IDP` authenticates a user, before provisioning the `id token` and `access token`, it attaches
the user permissions to the tokens. In our frontend client and backend server we can retrieve these
values and grant the proper access for the user.

### Cons of storing user access in IDP

The issue with this approach is that user access can typically be part of the business logic, in which case, it should be part of the application, not the IDP. Another drawback is the size of the tokens,
as the permissions grow, so does the token size. What is in the access token is also visible to
every client, therefore we don't want to store any sensitive information there, which gets prevented by this
approach. In `B2B` scenarios, the clients would have to implement our user access roles, or we would need to create
customer specific mapping in our application, which can become unscalable.

## Implementing the clean architecture

The `IDP` needs to authenticate users, therefore it has a user storage. This storage will
include information neccessary for the authentication, like user email and hashed password. It could also
contain user metadata. This user store is not what we want to use for our application. We want it to be
seperate, and to be its own entity. The only responsibility of the IDP is to authenticate users.

### Shadow users

Instead we want to create a user store within our database which only contains application specific
user information. This store doesn't include any kind of authentication data. Further we also want to
create user roles/permissions in our database.

### Access token

In this case, the only information the `IDP` has to attach to the access token, is the user
identifier. This can be the email or the user sub or in some cases both. In situations where the users
are not created before they can authenticate, for example in a `bring your own identity` scenario, we
cannot do user matching based on user id, therefore we would require the email in the access token. This would
also be the case when a user authenticates with an upstream `IDP`, for example social logins such as
`Facebook`, `Google`, etc..., as well as Enterprise logins like `Azure AD`.

### User creation flow

In a typical scenario where the `IDP` is also managed by you, a good approach would be to create
users in the application, and then create them in the `IDP`. Usually the `IDP`s have
a `management API` which can be called from our application. If the IDP is developed in-house, then we can build
the `management API` ourselves. A user management dashboard can be created for application administrators.

### Management API seperation

If we want to apply complete seperation, then the `management API` shouldn't be directly called from our application,
but instead from an external service. This service could be implemented as a serverless function, and trigger
based on our databases user store changes. The alternative to this is to have the `management API` calls coupled with
the user create logic. We can implement the `management API` as an interface, which would provide us the ability to
easily change the functionality, but it will still be part of our business logic.

### Retrieving user information

The user access information was previously available in the access token. In this implementation, we need to
create our own logic for retrieving the access information. Since we still have the user identifiers in the
access token, we can extract this in the backend middleware, retrieve the rest of the user data from the
database, and use that for access management, instead of using the access token. In a frontend application
we also require the user access information, for example hiding certain content for specific users. In this implementation, we need to make a backend call after recieving the id token from the IDP, and ask the backend for the rest of the information, and only then tell the frontend that the authentication was successful, with all the neccessary user information. This can be implemented in the frontend
authentication library of our choice.

## Considerations with this implementation

Since we do not have all the available information for the user, we need to make database calls on every
request. In small and medium applications, where the active user count is low, this won't neccessarily be a problem.
In cases where there are many active users or performance is affected, a caching mechanism could be implemented, which could offload the
database calls.
