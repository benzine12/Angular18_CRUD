import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private SERVER = "http://localhost:3000/profiles";
  constructor(private http: HttpClient) { }

  // Get all Profiles
  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.SERVER)
  }

  // Get a single Profile by ID
  getProfile(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.SERVER}/${id}`)
  }

  // Add a new Profile
  addProfile(Profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.SERVER, Profile) 
  }
  // Update an existing Profile
  updateProfile(id: number, Profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.SERVER}/${id}`, Profile)
  }
  // Delete a Profile by ID
  deleteProfile(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.SERVER}/${id}`)
  }
}