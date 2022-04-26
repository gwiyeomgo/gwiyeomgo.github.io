var application service.ApplicationRepository

	var id int64
	var key int64
	if err := echo.PathParamsBinder(c).Int64("id", &id).Int64("key", &key).BindError(); err != nil {
		return err
	}

	https://github.com/labstack/echo/blob/master/binder_test.go
