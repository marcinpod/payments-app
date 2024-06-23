import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkeletonComponent} from "mfcmptestcomponents";
import {UserStateService} from "mfcmpteststate";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'payments-dashboard',
  standalone: true,
  imports: [CommonModule, SkeletonComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private _userStateService = inject(UserStateService);
  public user$ = this._userStateService.user$
  public user: string = '';

  handleChangeUser() {
    console.log(this.user)
    this._userStateService.user = this.user;
  }
}
