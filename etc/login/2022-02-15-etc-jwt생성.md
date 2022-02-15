
1.http://localhost:2016/api/auth

controllers.AuthController{}.Init(e.Group("/api/auth"))


	요청해더 정보
	Content-Type: application/json
	{
	    "id": "test",
	    "password": "111111"
	}

2.g.POST("", controller.AuthWithSignIdPassword)


3.AuthWithSignIdPassword

	if err := ctx.Bind(&memberSignIn); err != nil {
		return ctx.JSON(http.StatusBadRequest, err.Error())
	}

	jwtToken, err := auth.AuthService{}.AuthWithSignIdPassword(ctx.Request().Context(), memberSignIn)

4.AuthWithSignIdPassword

```go

func (s AuthService) AuthWithSignIdPassword(ctx context.Context, signIn dtos.MemberSignIn) (token security.JwtToken, err error) {
	memberEntity, err := member.MemberService{}.GetMemberBySignId(ctx, signIn.Id)
	if err != nil {
		return
	}

	err = memberEntity.ValidatePassword(signIn.Password)
	if err != nil {
		err = domain.ErrAuthentication
		return
	}

	approved := memberEntity.IsApproved()
	if approved == false {
		err = domain.ErrUnApproved
		return
	}

	memberAssignedAllRoleAndPermission, err := factory.MemberAssignedAllRoleAndPermissionFactory{}.Create(ctx, memberEntity)
	if err != nil {
		return
	}

	token, err = security.JwtAuthentication{}.GenerateJwtToken(security.UserClaim{
		Id:          memberEntity.ID,
		Name:        memberEntity.Name,
		Roles:       memberAssignedAllRoleAndPermission.Roles,
		Permissions: memberAssignedAllRoleAndPermission.Permissions,
	})
	return
}
```


4.token 생성
token, err = security.JwtAuthentication{}.GenerateJwtToken(security.UserClaim{
		Id:          memberEntity.ID,
		Name:        memberEntity.Name,
		Roles:       memberAssignedAllRoleAndPermission.Roles,
		Permissions: memberAssignedAllRoleAndPermission.Permissions,
	})

5.refreshtoken 생성

```go

	refreshToken, err := ctx.Cookie("refreshToken")
	if err != nil || len(refreshToken.Value) == 0 {
		cookie := new(http.Cookie)
		cookie.Name = "refreshToken"
		cookie.Value = jwtToken.RefreshToken
		cookie.HttpOnly = true
		cookie.Path = "/"
		ctx.SetCookie(cookie)
	} else {
		refreshToken.Value = jwtToken.RefreshToken
		refreshToken.HttpOnly = true
		refreshToken.Path = "/"
		ctx.SetCookie(refreshToken)
	}

	result := map[string]string{}
	result["accessToken"] = jwtToken.AccessToken
```

6 aceestoken 을 응답값으로 보낸다.

7 my 호출 ? 자동으로? 아.. 로그인 버튼 클릭하면..?
http://localhost:2016/api/members/my 호출
하고 또 호출한다.

```javascript

class AuthService {
  async login(id, password) {
    const authResponse = await axios.post(API_URL + "/auth", {id, password})
    const {accessToken} = authResponse.data;
    axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;

    const memberResponse = await axios.get(API_URL + "/members/my");
    MemberContext.memberInformation = memberResponse.data;
  }
  }

```
