package core

type CloudflareSslError struct {
	IsCloudflareSslError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareSslError(code string, msg string, ctx *Context) *CloudflareSslError {
	return &CloudflareSslError{
		IsCloudflareSslError: true,
		Sdk:              "CloudflareSsl",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareSslError) Error() string {
	return e.Msg
}
