var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var httpClient = new HttpClient();

app.Map(
    "/{**catchall}",
    async (HttpContext context) =>
    {
        var path = context.Request.Path.Value ?? "";
        string targetUrl =
            path.StartsWith("/auth") ? $"http://authservice{path}"
            : path.StartsWith("/user") ? $"http://userservice{path}"
            : path.StartsWith("/admin") ? $"http://adminservice{path}"
            : null;

        if (targetUrl == null)
        {
            context.Response.StatusCode = 404;
            await context.Response.WriteAsync("Not found");
        }

        var requestMessage = new HttpRequestMessage(
            new HttpMethod(context.Request.Method),
            targetUrl
        )
        {
            Content = new StreamContent(context.Request.Body),
        };

        foreach (var header in context.Request.Headers)
            requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());

        var response = await httpClient.SendAsync(requestMessage);
        context.Response.StatusCode = (int)response.StatusCode;
        foreach (var header in response.Headers)
            context.Response.Headers[header.Key] = header.Value.ToArray();

        await response.Content.CopyToAsync(context.Response.Body);
    }
);

app.Run();

