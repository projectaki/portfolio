# Clean Authentication and Authorization architecture

---

## Introduction

This article will be about building an authentication and authorization architecture,
in a full-stack application using an Identity provider and the OpenId Connect protocol.
The goal of this article is not just to build an architecure, but to build it in a clean
manner, utilizing the seperation of concerns principle. This is important because a clean
architecture in the authentication framework gives us the ability to migrate to a different
Identity provider in the future. Further in B2B scenarios it allows us to let the customers
bring their own identity, as the connection between the providers should be relying on simple
environment variables, which can easily be replaced at build/release time.

## Identity provider

An Identity provider is an application which is responsible for authenticating users, and
granting them access to protected applications. It is a middleman between the user and the
protected applications. There are many third party Identity providers, and open source frameworks
which allow the developer to create their own Identity provider.

## High-level architecture overview

An example application would be a backend server + database with a frontend client. In this scenario
the Identity provider would be either a third party application, or a developed application.

## Typical authorization with access tokens.

A typical way to implement authorization in a fullstack application is to utilize a role-based,
claim-based or permission based approach. Depending on access management requirements complexity,
one of the previous options is the way to go. No matter which choice, typically the roles, claims
or permissions are created in the Identity provider, and assigned to users within the Identity provider.
When the Identity provider authenticates a user, before provisioning the access token, it attaches
the user permissions to the token. In our frontend client and backend server we can retrieve these
values and grant the proper acces for the user.

The issue with this approach is that user access is typically part of the business logic, and should
ideally be part of the application. In B2B scenarios the user access information would have to be
communicated to the clients, and updated every time a business need changes.

## Implementing the clean architecture

The Identity provider needs to authenticate users, therefore it has a user storage. This storage will
include information neccessary for the authentication, like user email and hashed password. It could also
contain user metadata. This user store is not what we want to use for our application. We want it to be
seperate, and to be its own entity.

Instead we want to create a user store within our database which only contains application specific
user information. This store doesnt include any kind of authentication data. Further we also want to
create user roles/permissions in our database.

In this case, the only information the Identity provider has to attach to the access token, is the user
identifier. This can be the email or the user sub or in some cases both. In situations where the users
are not created before they can authenticate, for example in a **bring your own identity** scenario, we
cannot do user matching based on user id, therefore we would require the email in the access token. In a
typical scenario where the Identity provider is also managed by you, a good approach would be to create
users in the application, and then create them in the Identity provider. This process should be automated,
and a user management dashboard can be created for application administrators. This management dashboard can
handle the user creation.

The user access information was previously available in the access token. In this implementation, we need to
create our own logic for retrieving the access information. Since we still have the user identifiers in the
access token, we can extract this in the backend middleware, retrieve the rest of the user data from the
database, and use that for access management, instead of using the access token. In a frontend application
we also require the user access information, for example hiding certain content for specific users. Since the
frontend application gets back an access token from the Identity provider, following successful authentication,
it should have the user access information. In this implementation, we need to make a backend call after recieving
the access token, and ask the backend for the rest of the information, and only then tell the frontend that the
authentication was successful, with all the neccessary user information.

## Considerations with this implementation

Since we do not have all the available information for the user, we need to make database calls on every
request. In small and medium applications, where the active user count is low, this shouldnt be a problem.
In cases where there are many active users, a caching mechanism could be implemented, which could offload the
database calls.
