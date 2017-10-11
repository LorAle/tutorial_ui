import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


/**
 * Intercepts all outgoing HTTP requests and sets the withCredentials flag to true, so that
 * the identity cookie localy stored is attached to the request
 */
@Injectable()
export class CredentialInterceptor implements HttpInterceptor {
    /**
     * Intercepts an outgoing HTTP request and adds the credentials cookie to it.
     * @see HttpInterceptor
     * @param req the outgoing HTTP request
     * @param next a HTTP request handler
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            withCredentials: true
        });
        return next.handle(req);
    }
}

/**
 * Provider POJO
 */
export const CredentialInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: CredentialInterceptor,
    multi: true,
};
