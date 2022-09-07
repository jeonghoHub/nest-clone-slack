import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const err = exception.getResponse() as
         | { message: any, statusCode: number }
         | { error: string, statusCode: 400; message: string[] };

        if(typeof err !== 'string' && err.statusCode === 400) {
            console.log("111");
            return response.status(status).json({
                success: false,
                code: status,
                data: err.message,
            })
        }

        console.log("222");
        response.status(status).json({
            success: false,
            code: status,
            data: err,
        })
    }
}