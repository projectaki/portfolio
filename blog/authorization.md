# Authorization on the server side

This article is going to be about authorization on the server side. It is going to show the different types of authorization strategies
we can implement. I am going to do a demonstration in a `NestJs` application (Nodejs/Express), but the authorization should be very similar
in any backend framework. A prerequisite is to have an access token attached to your backend requests, and a way to extract the information, and make it accessible through the Context. I personally used `Passport.js` as it is integrated with NestJs, but any other library can be used.

## Types of authorization

Some of the typical types of authorization are: Role-based, Permission-based, Policy-based and Resource based authorization. The best kind of authorization
is a mix of approaches, as all of them have a different role, while some of them are similar.

### Role-based authorization

Role-based authorization allows the access to API endpoints to be determined by user roles. The role claims are part of the access token. The typical ones are : Admin, Manager and Employee. Roles can be added to endpoint/controller metadata, and evaluated when the user request hits the endpoint. This is a valid approach, but it doesn't scale well, and it doesn't allow for fine-grained access.

### Permission-based authorization

Permission-based authorization is similar to role-based approach. The permissions are also present in the access token. Permissions allow for much more fine-grained access control. Permissions can be made for each resource type. For example a user can have a permission for each CRUD operation: `user:create`, `user:read`,`user:update`,`user:delete`. The permissions are attached to each endpoints/controllers metadata. Before the endpoint gets hit, the permissions from the access token are compared to the permissions on the endpoints metadata. This is identical to how roles are evaluated.

```typescript
export enum Permission {
  USER_CREATE = 'user:create',
  USER_UPDATE = 'user:update',
  USER_DELETE = 'user:delete',
  USER_READ = 'user:read',
}
```

Roles can be combined with permissions aswell. Each role can have pre-assigned permissions to it. This way users can have roles, with pre-determined permissions, but also the ability to attach extra permissions, to create a more customizable access control.

Below is an example of required permissions attached to the endpoints metadata.

```typescript
@Post()
@Permissions(Permission.USER_CREATE)
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
}
```

Below is an example of the permission guard. This is NestJs specific syntax, but this guard is registered globally, which means that it is called every time an endpoint is hit, unless the endpoint is marked as public. The guard gets the permissions from the user object in the context (which is created from the access token), and the permissions from the endpoint metadata, and determines if the user has access.

A role based approach would look identical, except instead of permissions there would be roles.

```typescript
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<Permission[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredPermissions) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredPermissions.some(p => user.permissions?.includes(p));
  }
}
```

### Policy-based authorization

Policies are a set of rules. You can combine multiple requirements into a policy, and give it a name. These policies can then be reused. I have seen policies being used in .NET framework, but I did not find a simple policy based approach for nodejs. I will show an example how I created policies in a nodejs environment.

Below is a policy service, where policies can be registered. These are callback functions which can take an arbitrary amount of inputs, and return a boolean output. The public getter is what we can use to retrieve policies, and provide the inputs. This is also an example of a resource based policy. The policy expects a user and a resource, and returns true if the user id is equal to the resource id. In this case the resource is also a user, therefore users can only retrieve their own user information.

In case where a policy is not resource-based, it can also be attached to the endpoint metadata, just like for permissions and roles.

```typescript
@Injectable()
export class PolicyService {
  private policies: Map<Policy, (u: any, r: any) => boolean> = new Map();

  constructor() {
    this.registerPolicy<User>(Policy.RESOURCE_ID_MATCH, (u, r) => u.sub === r._id);
  }

  public get(policy: Policy) {
    return this.policies.get(policy);
  }

  private registerPolicy<T>(policy: Policy, action: (u: any, r: T) => boolean) {
    this.policies.set(policy, action);
  }
}
```

Below is the authorization service.

```typescript
@Injectable()
export class AuthService {
  constructor(private policyService: PolicyService) {}

  public authorize<T>(user: any, resource: T, policy: Policy) {
    const action = this.policyService.get(policy);
    if (!action) throw new Error('Invalid policy!');

    const authorizationResult = action(user, resource);
    if (!authorizationResult) throw new ForbiddenException('Resource is forbidden!');
  }
}
```

And below is how it is called in the code. The @CurrentUser decorator extracts the user object from the request. The auth service passes a user object, a resource and a policiy name. If the authorize returns false the request returns Unauthorized, otherwise the request continues.

```typescript
@Get(':id')
  @Permissions(Permission.USER_READ)
  async findOne(@Param('id') id: string, @CurrentUser() user): Promise<User> {
    const resource = await this.usersService.findOne(id);

    this.authService.authorize<User>(user, resource, Policy.RESOURCE_ID_MATCH);

    return resource;
  }
```

### Resource-based authorization

The previous types of authorization strategies were similar in a sense that they were protecting the access to an endpoint itself. Resource based authorization is a bit different, and should be used in combination with the others.

Resource-based authorization is preventing access to resources which are not owned by the user requesting access. For example a user could have a product in the database with an id, and a foreign key pointing to the user. The product is owned by the user. If another user tries to access this product, a resource based policy can prevent access. Since the requested resource has to be loaded first, we cannot attach this kind of policy to the endpoint metadata. Instead, we can use an authorization service, and determine access after the resource has been loaded.

# Conclusion

These are the authorization strategies that I've came accross, but I am sure there are more out there.

Either way, thanks for reading! 😀
