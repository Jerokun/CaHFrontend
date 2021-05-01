import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MessageDto } from './MessageDto';

@Injectable({
	providedIn: 'root',
})
export class ChatServiceService {
	private notificationsUrl = environment.baseUrl + 'api/chatsocket';

	constructor(private http: HttpClient) {}

	getNotificationMessage(): Observable<Array<MessageDto>> {
		const url = `${this.notificationsUrl}/notificationresult`;
		const response = this.http.get<Array<MessageDto>>(url).pipe(catchError(this.handleError));
		return response;
	}

	private handleError(err) {
		let errorMessage: string;
		if (err.error instanceof ErrorEvent) {
			errorMessage = `An error occurred: ${err.error.message}`;
		} else {
			errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
		}
		console.error(err);
		return throwError(errorMessage);
	}
}
