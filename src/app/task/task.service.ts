import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { User } from '../user/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public token = this.cookie.get('token');

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) {}

  //LOGIN
  Login(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<any>('http://127.0.0.1:5000/login',user, httpOptions).pipe(
      tap(res=> {
        this.cookie.set('token', res.token , {
          path: '/'
        });
        this.cookie.set('isLogin', 'true', {
          path: '/'
        });
        this.token = this.cookie.get('token');
      }),
      catchError(error=> this.handleError(error, undefined))
    )
  }

  //GET USER
  getUser(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${ this.token }` })
    }

    return this.http.get<any>(`http://127.0.0.1:5000/profil`, httpOptions).pipe(
      tap(res=> console.log(res)),
      catchError(error=> this.handleError(error, null))
    )
  }

  //FETCH TASK
  fetchTask(week: string, day: string): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:5000/taches/${ week }/${ day }`).pipe(
      tap(res=>console.log(res)),
      catchError(error=> this.handleError(error, {}))
    )
  }

  getPaymentsWater(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${ this.token }` })
    }
    
    return this.http.get<any>('http://127.0.0.1:5000/paiements/eau', httpOptions).pipe(
      tap(res=>console.log(res )),
      catchError(error=> this.handleError(error, null))
    )
  }

  getPaymentsElectric(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${ this.token }` })
    }
    
    return this.http.get<any>('http://127.0.0.1:5000/paiements/electricite', httpOptions).pipe(
      tap(res=>console.log(` ===${ res }`)),
      catchError(error=> this.handleError(error, null))
    )
  }

  //ADD REMARQUE
  addRemarque(data: Object): Observable<Object|null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${ this.token }` })
    }

    return this.http.post<Object|null>(`http://127.0.0.1:5000/ajouter_remarque`, data, httpOptions).pipe(
      tap(res=> console.log(res)),
      catchError(error=>this  .handleError(error, null))
    )
  }

  // GET REMARQUE
  getRemarque(): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${ this.token }` })
    }

    return this.http.get<Object>(`http://127.0.0.1:5000/dernieres_remarques`, httpOptions).pipe(
      tap(res=> console.log(res)),
      catchError(error=> this.handleError(error, {}))
    )
  }

  //CHECK WATER PAYMENT
  checkWaterPayment(user_matricule: number): Observable<Object|null> {
    const user_id = this.token[0];

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${ this.token }` })
    }

    return this.http.post<Object|null>(`http://127.0.0.1:5000/user/${ user_id }/water_payment`, { user_matricule }, httpOptions).pipe(
      tap(res=> console.log(res)),
      catchError(error=>this  .handleError(error, []))
    );
  }

  //CHECK ELECTRIC PAYMENT
  checkElectricPayment(user_matricule: number): Observable<Object|null> {
    const user_id = this.token[0];

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${ this.token }` })
    }

    return this.http.post<Object|null>(`http://127.0.0.1:5000/user/${ user_id }/electricity_payment`, { user_matricule }, httpOptions).pipe(
      tap(res=> console.log(res)),
      catchError(error=>this  .handleError(error, []))
    );
  }

  //GET MESSAGE 
  getMessage(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${ this.token }` })
    }

    return this.http.get<any>('http://127.0.0.1:5000/chat', httpOptions).pipe(
      tap(res=> console.log(res)),
      catchError(error=> this.handleError(error, {}))
    );
  }

  setMessage(content: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${ this.token }` })
    }

    return this.http.post<any>('http://127.0.0.1:5000/chat', { content }, httpOptions).pipe(
      tap(res=> console.log(res)),
      catchError(error=> this.handleError(error, {}))
    );
  }

  handleError(error: Error, value: any): Observable<any> {
    console.log(error);
    return of(value);
  }
}
