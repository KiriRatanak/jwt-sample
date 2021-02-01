# What is JWT?

- JSON Web Token
- Completely stateless
- Contain 3 parts: Header, Data, Signature
- Signature encryption can be Symmetrical or Asymmetrical
- Symmetrical requires the same key to create token and validate
- Asymmetrical use private key to create JWT, and public key validate

# How does JWT work?

JWT works by having user first send their authenticatation information and the JWT server will encrypt the user data with secret key using jwt library. This process will generate a **token** which will be needed for every request the user made to the server.

This mean that user will have to find a way to attach the token back to the server. Usually, this can be archieve using authentication bearer or cookies.

**Benefit**
The benefit is that the process is entirely stateless. The server doesn't even have to hit the database to verify the user. How this can be done is that, the server will have the same secret key, and will attempt to decrypt the token with the secret key, and if it works then the user is verified.

**Drawback**
Though this does not come without a drawback. The token will be the main component for authentication, and since it's staless no token is stored in the database. If the attacker happened to acquire the token then we can't do anything about it except waiting for the token to expire.

However, this issue can be mitigate by either using refresh token and store some state in the database.

# Using refresh-token

As mentioned above, if the jwt is stolen than we can't do anything about it. One way to fix that is to make the token short-lived, like 15min maybe?

But that would mean that the user would be required to login again every 15min. Smart.

That where refresh-token come in. We still can make the JWT token short-lived, but instead of asking user to login again every 15min, we can use **refresh-token** to, you guess it, refresh for a new JWT token when it expired. 

The refresh-token have to be store securely, for if it's stolen then the attacker can use it to refresh new token as well. 

This concept work exactly like a session, but instead of storing a session id, we store refresh-token. 

# JWT Secret sharing

As disccused, we need secret key(encrytion key) to generate a JWT token, so doesn't that mean we have to share the key to every service that need to validate the token? What if the service we share the key with generate its own JWT token?

We don't want that. We only want auth server to generate, while the other service can only validate.

A way to solve this is by using asymmetric encryption, where the auth server generate token using private key, and other services would validate using public key. In this case, public key can't be used to generate token.