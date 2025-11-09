# login (siswa,pengajar,admin)

- endpoint : POST /api/auth/login

request body :

```json
{
  "username": "xxx",
  "password": "kontolodon"
}
```

response body (sucess):

```json
{
  "message": "ok",
  "user": {
    "id": 1,
    "username": "xxx",
    "role": "siswa"
  },
  "token": "asjdhakjajkhgkjaghkjah"
}
```

response body (failed):

```json
{
  "message": "unauthorize"
}
```

# register (siswa)

- endpoint : POST /api/auth/register

request body :

```json
{
  "email": "blabla@gmail.com",
  "username": "xxx",
  "password": "kontolodon"
}
```

response body (sucess):

```json
{
  "message": "sucsess create",
  "user": {
    "id": 2,
    "username": "xxx",
    "role": "siswa"
  }
}
```

response body (failed):

```json
{
  "message": "cannot create account"
}
```

# video pembelajaran (siswa)

- endpoint : GET /api/video

request body :

```json
{
  "items": [
    { "id": "vid_7", "title": "Limit Dasar", "subjectId": "sub_math10" }
  ],
  "page": 1,
  "total": 9
}
```

response body (sucess):

```json
{
  "message": "ok",
  "user": {
    "id": 1,
    "username": "xxx",
    "role": "siswa"
  },
  "token": "asjdhakjajkhgkjaghkjah"
}
```

response body (failed):

```json
{
  "message": "unauthorize"
}
```
